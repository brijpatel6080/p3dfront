import React, { useState } from "react";
import { Button, ButtonToolbar, Card, CardBody, Col } from "reactstrap";
import PropTypes from "prop-types";
import EyeIcon from "mdi-react/EyeIcon";
import { useTranslation } from "react-i18next";
import { SelectField } from "@/shared/components/form/Select";
import { emailPatter, urlPattern } from "@/shared/helpers";
import showResults from "./Show";
import { FormField } from "./FormFieldAddBlog";
import { useForm, Controller } from "react-hook-form";
import { FileInputField } from "@/shared/components/form/FileInput";
import MultiSelect from "react-multi-select-component";
import TextEditor from "./TextEditor";
import { addBlogList } from "../../../utils/api/APIServices";
import { useSelector, useDispatch } from "react-redux";
import { blogsUpdate, user_error_action } from "../../../redux/actions/authActions";

import "../Blogs.css";

const Form = ({ isHorizontal, isAboveError }) => {
  const { t } = useTranslation("common");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const onSubmit = (data) => showResults(data);

  const options = [
    { label: "Category 1", value: "Category 1" },
    { label: "Category 2", value: "Category 2" },
    { label: "Category 3", value: "Category 3" },
    { label: "Category 4", value: "Category 4" },
    { label: "Category 5", value: "Category 5", disabled: true },
  ];

  const [selected, setSelected] = useState([]);
  const [interestList, setInterestList] = useState([]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleSave = async () => {
    var values = { title: title };

    console.log("addImages", values.images);
    const payload = new FormData();
    payload.append("images", values.images);
    payload.append("title", values.title);
    // payload.append('description', description)
    payload.append("source_url", values.source_url);
    payload.append(
      "category",
      interestList.find((s) => s.title === values.category)
      // interestList.find((s) => s.title === values.category)._id,
    );
    payload.append("author", values.author);

    // setShowLoader(true)
    const { response, error } = await addBlogList(payload, token);
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

  return (
    <Col md={12} lg={12} xl={12} className="AddblogForm pr-0">
      <Card>
        <CardBody>
          {/* <div className="card__title">
            <h5 className="bold-text">{t('tables.form_add_blog.horizontal_form_validate')}</h5>
            <h5 className="subhead">
              {
                isAboveError
                  ? (
                    <span>Errors are above fields, use class super
                      <span className="red-text"> form__form-group-input-wrap--error-above</span>
                    </span>
                  )
              : 'Errors are under fields'
              }
            </h5>
          </div> */}
          <form
            className={`form ${isHorizontal && "form--horizontal"}`}
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group col-md-4 pl-0">
              <span className="form__form-group-label">Title</span>
              <div className="form__form-group-field">
                <FormField
                  name="title"
                  control={control}
                  component="input"
                  errors={errors}
                  // rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Category</span>
              <div className="form__form-group-field">
                {/* <pre>{JSON.stringify(selected)}</pre> */}
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
            </div>

            {/* <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Category ss</span>
              <div className="form__form-group-field">
                <FormField
                  name="select"
                  control={control}
                  component={SelectField}
                  errors={errors}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                />
              </div>
            </div> */}
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Add Image</span>
              <div className="form__form-group-field">
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => <FileInputField {...field} />}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <TextEditor onChange={() => {}} />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Source Url</span>
              <div className="form__form-group-field">
                <FormField
                  name="url"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{
                    required: "This is required field",
                    pattern: {
                      value: urlPattern,
                      message: "invalid url",
                    },
                  }}
                  placeholder="Source Url"
                  defaultValue=""
                  isAboveError={isAboveError}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Author</span>
              <div className="form__form-group-field">
                <FormField
                  name="author"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{ required: "This is required field" }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="Author"
                />
              </div>
            </div>

            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit" onClick={handleSave}>
                Add Blog
              </Button>
              <Button
                type="button"
                onClick={() =>
                  reset({
                    username: "",
                    email: "",
                    url: "",
                    password: "",
                    select: "",
                  })
                }
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

Form.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
};

Form.defaultProps = {
  isHorizontal: false,
  isAboveError: false,
};

export default Form;
