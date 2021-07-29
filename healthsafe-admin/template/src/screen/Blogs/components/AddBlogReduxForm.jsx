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
import { getInterestsList, addBlogList } from "../../../utils/api/APIServices";
import { useSelector, useDispatch } from "react-redux";
import {
  blogsUpdate,
  user_error_action,
} from "../../../redux/actions/authActions";

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

const VerticalForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  onSuccess,
}) => {
  const { t } = useTranslation("common");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [interestList, setInterestList] = useState([]);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  useEffect(() => {
    (async function () {
      // setShowLoader(true)
      const { response, error } = await getInterestsList(token);
      console.log("response, error", { response, error });
      // setShowLoader(false)
      if (response.status) {
        var categoryData = response.data.map((data) => {
          return { value: data.name, label: data.name, ...data };
        });
        setInterestList(categoryData);
        // console.log('categoryData', categoryData)
        // { value: 'one', label: 'One' }
        // setInterestList(
        //   response.data.map((data) => {
        //     return { ...data, name: data.name }
        //   }),
        // )
      }
    })();
  }, []);

  // const submit = (data) => {
  //   // console.log('field data', data)
  //   handleSave()
  // }

  const handleSave = async (values) => {
    console.log("addImages", values);
    const payload = new FormData();
    if (values.Image) {
      payload.append("featured_image", values.Image.file);
    }
    payload.append("title", values.Title);
    payload.append("description", values.Description);
    payload.append("source_url", values.url);
    if (values.Category && values.Category.length != 0) {
      values.Category.map((item_cat) => {
        payload.append("tags", item_cat._id);
      });
      // payload.append(
      //   'category',
      //   interestList.find((s) => s.name === values.Category[0].name)._id,
      // )
    }
    payload.append("author", values.Author);
    console.log("field_data", JSON.stringify(payload));
    // return false
    // setShowLoader(true)
    const { response, error } = await addBlogList(payload, token);
    console.log("response, error", response, error.response);
    // setShowLoader(false)
    if (error) {
      const err = error.response ? error.response.data : "";
      console.log("____err", err);
      if (err && err.data && err.data.length > 0) {
        console.log("____err 1", err);

        dispatch(
          user_error_action({
            show: true,
            msg: err.data[0].msg,
            type: "danger",
          })
        );
        return;
      } else if (err && err.message) {
        console.log("____err 2", err);

        dispatch(
          user_error_action({
            show: true,
            msg: err.message,
            type: "danger",
          })
        );
        return;
      }
      console.log("____err 3", err);

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
          msg: "Added Successfully",
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

  // description, titile
  return (
    <Col md={12} lg={12} xl={12} className="pr-0">
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
                  name="Title"
                  component={renderField}
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Image</span>
              <div className="form__form-group-field">
                <Field name="Image" component={renderFileInputField} />
              </div>
            </div>

            <div className="form__form-group text-editor">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <Field name="Description" component={TextEditor} />
                {/* <Field
                  // name="multiSelect"
                  component={TextEditor}
                  // options={interestList}
                  // multiple={true}
                /> */}
                {/* <TextEditor onChange={() => {}} /> */}
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
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Source Url</span>
              <div className="form__form-group-field">
                <Field
                  name="url"
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
                  name="Author"
                  component={renderField}
                  type="text"
                  placeholder="Author"
                />
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">
                Add Blog
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
