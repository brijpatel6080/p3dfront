import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Field, reduxForm } from "redux-form";
import { Card, CardBody, Col, Button, ButtonToolbar } from "reactstrap";
import EyeIcon from "mdi-react/EyeIcon";
import renderSelectField from "@/shared/components/form/Select";
import validate from "./validateRedux";
import renderMultiSelectField from "@/shared/components/form/MultiSelect";
import renderFileInputField from "@/shared/components/form/FileInput";
import {
  getInterestsList,
  addBlogList,
  editSpeciality,
} from "../../../utils/api/APIServices";
import { useSelector, useDispatch } from "react-redux";
import {
  blogsUpdate,
  user_error_action,
} from "../../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

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
  item,
  data,
  initialize,
}) => {
  const { t } = useTranslation("common");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [roleType, SetroleType] = useState("");
  const [interestList, setInterestList] = useState([]);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  console.log("____item", item);

  useEffect(() => {
    (async function () {
      // setShowLoader(true)
      const { name, role, image } = item;
      initialize({
        name: name,
        file: image,
        role: { value: role, label: role },
      });

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
    // return false
    const payload = new FormData();
    payload.append("file", values.file.file);
    payload.append("name", values.name);
    payload.append("role", values.role.value);
    var id = item.id;
    const { response, error } = await editSpeciality(payload, token, id);
    console.log("editSpeciality response, error", response, error.response);
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
      // onSuccess()
      dispatch(blogsUpdate());
      routeChange();
      dispatch(
        user_error_action({
          show: true,
          msg: response.message,
          type: "success",
        })
      );

      // console.log("success")

      // setSnackBarLabel('Added Successfully')
      // setSnackBarVisible(true)
      // getBlogsList()
      // setTimeout(()=>{
      //   props.history.push('/dashboard/blogs/list')
      // }, 2000)
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

  const history = useHistory();

  const routeChange = () => {
    let path = `SpecialitiesList`;
    history.push(path);
  };

  console.log("props list", item);
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

          <ButtonToolbar className="form__button-toolbar Back">
            <Button onClick={routeChange} color="primary" type="submit">
              View All Specialities
            </Button>
          </ButtonToolbar>

          <form className="form" onSubmit={handleSubmit(handleSave)}>
            <div className="form__form-group col-md-8 pl-0">
              <span className="form__form-group-label">Name</span>
              <div className="form__form-group-field">
                <Field
                  name="name"
                  component={renderField}
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Image</span>
              <div className="form__form-group-field">
                <Field name="Image" component={renderFileInputField} />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Role</span>
              <div className="form__form-group-field">
                <Field
                  name="role"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: "doctor", label: "Doctor" },
                    { value: "alliedHSP", label: "alliedHSP" },
                  ]}
                  onChange={(event) => {
                    SetroleType(event.label);
                    // console.log("___event", event)
                  }}
                />
              </div>
            </div>

            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">
                Update Speciality
              </Button>
              <Button
                type="button"
                onClick={reset}
                disabled={pristine || submitting}
              >
                Clear
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
