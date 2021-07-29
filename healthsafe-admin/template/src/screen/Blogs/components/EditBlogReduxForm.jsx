import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Field, reduxForm } from "redux-form";
import { Card, CardBody, Col, Button, ButtonToolbar } from "reactstrap";
import EyeIcon from "mdi-react/EyeIcon";
import renderSelectField from "@/shared/components/form/Select";
import validate from "./validateRedux";
import renderMultiSelectField from "@/shared/components/form/MultiSelect";
import TextEditor from "./TextEditor";
import "../Blogs.css";
import renderFileInputField from "@/shared/components/form/FileInput";
import { editBlogList, getInterestsList } from "../../../utils/api/APIServices";
import { useDispatch, useSelector } from "react-redux";
import { blogsUpdate, user_error_action } from "../../../redux/actions/authActions";

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div className="form__form-group-input-wrap">
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && (
      <span className="form__form-group-error">{error}</span>
    )}
  </div>
);

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderField.defaultProps = {
  placeholder: "",
  meta: null,
  type: "text",
};

const VerticalForm = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    // props,
    item,
    data,
    onSuccess,
  } = props;
  console.log("data", data);
  const id = props?.match?.params?.id;
  const blog = props?.location?.state?.blog;

  const { t } = useTranslation("common");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const [snackBarLabel, setSnackBarLabel] = useState("");
  const token = useSelector((state) => state.user.token);
  const [interestList, setInterestList] = useState([]);
  const [imagepath, setImagePath] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      // setShowLoader(true)
      const { response, error } = await getInterestsList(token);
      // setShowLoader(false)
      if (response.status) {
        setInterestList(
          response.data.map((data) => {
            return { ...data, name: data.name };
          })
        );
      }
    })();
  }, []);

  const handleSave = async (values) => {
    console.log("values", values);

    const payload = new FormData();
    // payload.append('featured_image', values.Image.file)
    payload.append("title", values.title);
    payload.append("description", values.description);
    payload.append("source_url", values.source_url);
    if (values.Category && values.Category.length != 0) {
      values.Category.map((item_cat) => {
        payload.append("tags", item_cat._id);
      });
      // payload.append(
      //   'category',
      //   interestList.find((s) => s.name === values.Category[0].name)._id,
      // )
    }
    payload.append("author", values.author);
    // console.log('field_data', JSON.stringify(payload))
    // setShowLoader(true)
    const { response, error } = await editBlogList(payload, token, data.id);
    console.log("response, error11", { response, error });
    // console.log('response, error ', response, error, values, token, item.id)
    // setShowLoader(false)
    if (error) {
      const err = error.response ? error.response.data : "";
      if (err && err.data && err.data.length > 0) {
        dispatch(
          user_error_action({
            show: true,
            msg: err.data[0].msg,
            type: "danger",
          })
        );
        return;
      } else if (err && err.message) {
        dispatch(
          user_error_action({
            show: true,
            msg: err.message,
            type: "danger",
          })
        );
        return;
      }
      dispatch(
        user_error_action({
          show: true,
          msg: "Something went wrong. " + error.message,
          type: "danger",
        })
      );
      return;
    }
    if (response.status) {
      onSuccess();
      dispatch(blogsUpdate());
      dispatch(
        user_error_action({
          show: true,
          msg: "Updated Successfully",
          type: "success",
        })
      );
    } else {
      dispatch(
        user_error_action({
          show: true,
          msg: response.message,
          type: "success",
        })
      );
    }
  };

  // const toggle = () => {
  //   // onEditClick()
  //   console.log('____item', item)
  //   setTitle(item.title)
  //   // setModal((prevState) => !prevState)
  // }

  useEffect(() => {
    var updateCategory = data.categorie.map((item) => {
      item.label = item.name;
      return item;
    });
    props.initialize({
      title: data.title,
      author: data.author,
      source_url: data.source_url,
      Category: updateCategory,
      description: data.description,
    });
    var filename = null;
    if (props.data.featured_image && props.data.featured_image != "") {
      filename = props.data.featured_image.substring(
        props.data.featured_image.lastIndexOf("/") + 1
      );
    }
    setImagePath(filename);
  }, []);
  return (
    <Col md={12} lg={12} xl={12} className="editBlog pr-0">
      <Card>
        <CardBody>
          {/* <div className="card__title">
            <h5 className="bold-text">
              {t('forms.from_validation.vertical_form_validate')}
            </h5>
            <h5 className="subhead">Errors are under fields</h5>
          </div> */}
          <form className="form" onSubmit={handleSubmit(handleSave)}>
            <div className="form__form-group col-md-8 pl-0">
              <span className="form__form-group-label">Title</span>
              <div className="form__form-group-field">
                <Field
                  name="title"
                  component={renderField}
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Image</span>
              <div className="form__form-group-field">
                <Field
                  name="images"
                  component={renderFileInputField}
                  onChange={(event) => {
                    if (event) {
                      setImagePath(null);
                    }
                    // console.log("____event", event);
                  }}
                />
                {imagepath != null && (
                  <span class="form__form-group-label">{imagepath}</span>
                )}
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Category</span>
              <div className="form__form-group-field">
                <Field
                  name="Category"
                  component={renderMultiSelectField}
                  options={interestList}
                  multiple={true}
                />
                {/* <Field
                  name="category"
                  component={renderMultiSelectField}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                /> */}
              </div>
            </div>

            <div className="form__form-group text-editor">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                {/* <TextEditor onChange={() => {}} /> */}
                <Field
                  name="description"
                  component={TextEditor}
                  // value={description}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Source Url</span>
              <div className="form__form-group-field">
                <Field
                  name="source_url"
                  component={renderField}
                  type="url"
                  placeholder="Source Url"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Author</span>
              <div className="form__form-group-field">
                <Field
                  name="author"
                  component={renderField}
                  type="text"
                  placeholder="Author"
                />
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button
                color="primary"
                type="submit"
                // onClick={toggle}
              >
                Update Blog
              </Button>
              <Button
                type="button"
                onClick={reset}
                disabled={pristine || submitting}
              >
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

VerticalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: "vertical_form_validation", // a unique identifier for this form
  validate,
})(VerticalForm);
