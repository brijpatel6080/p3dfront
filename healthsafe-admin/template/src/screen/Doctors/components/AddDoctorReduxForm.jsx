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
// import '../Blogs.css'
import renderFileInputField from "@/shared/components/form/FileInput";
import {
  getInterestsList,
  addBlogList,
  getSpecialities,
  addhsp,
} from "../../../utils/api/APIServices";
import { useSelector, useDispatch } from "react-redux";
import {
  blogsUpdate,
  user_error_action,
} from "../../../redux/actions/authActions";
import renderDatePickerField from "@/shared/components/form/DatePicker";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
import moment from "moment";
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
  const [roleType, SetroleType] = useState("");
  const [specialization_data, setspecialization_data] = useState([]);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  useEffect(() => {
    (async function () {
      // setShowLoader(true)
      const { response, error } = await getSpecialities(
        token,
        roleType.toString().toLowerCase()
      );
      console.log("response, error", { response, error });
      // setShowLoader(false)
      if (response.status) {
        var categoryData = response.data.map((data) => {
          return { value: data.name, label: data.name, ...data };
        });
        setspecialization_data(categoryData);
        // console.log('categoryData', categoryData)
        // { value: 'one', label: 'One' }
        // setInterestList(
        //   response.data.map((data) => {
        //     return { ...data, name: data.name }
        //   }),
        // )
      }
    })();
  }, [roleType]);

  // const submit = (data) => {
  //   // console.log('field data', data)
  //   handleSave()
  // }

  const handleSave = async (values) => {
    const {
      first_name,
      last_name,
      default_date,
      gender,
      medical_registration_number,
      medical_registration_council,
      medical_registration_year,
      specialization,
      mobile_number,
      role,
      password,
    } = values;
    console.log("____values", values);
    var payload = {
      first_name: first_name,
      last_name: last_name,
      dob: moment(default_date).format("MM-DD-YYYY"), // set proper formate
      gender: gender.value,
      medical_registration_number: medical_registration_number,
      medical_registration_council: medical_registration_council,
      medical_registration_year: medical_registration_year,
      specialization: specialization._id,
      mobile_number: Number(mobile_number),
      password: password,
      role: role.value,
    };
    console.log("___payload", payload);
    const { response, error } = await addhsp(payload, token);
    console.log("response, error", response, error.response);
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
      // onSuccess();
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
    <Col md={12} lg={12} xl={12} className="AddDoctorForm pr-0">
      <Card>
        <CardBody>
          {/* <div className="card__title">
            <h5 className="bold-text">
              {t('forms.from_validation.vertical_form_validate')}
            </h5>
            <h5 className="subhead">Errors are under fields</h5>
          </div> */}
          <form className="form" onSubmit={handleSubmit(handleSave)}>
            <div className="form__form-group col-md-6 pl-0">
              <span className="form__form-group-label">First Name</span>
              <div className="form__form-group-field">
                <Field
                  name="first_name"
                  component={renderField}
                  type="text"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="form__form-group col-md-6">
              <span className="form__form-group-label">Last Name</span>
              <div className="form__form-group-field">
                <Field
                  name="last_name"
                  component={renderField}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="form__form-group col-md-4 pl-0">
              <span className="form__form-group-label">Gender</span>
              <div className="form__form-group-field">
                <Field
                  name="gender"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Non-binary", label: "Non-binary" },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group col-md-4 ">
              <span className="form__form-group-label">Role</span>
              <div className="form__form-group-field">
                <Field
                  name="role"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: "Doctor", label: "Doctor" },
                    { value: "alliedHSP", label: "alliedHSP" },
                  ]}
                  onChange={(event) => {
                    SetroleType(event.label);
                    // console.log("___event", event)
                  }}
                />
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Specialization</span>
              <div className="form__form-group-field">
                <Field
                  name="specialization"
                  component={renderSelectField}
                  type="text"
                  options={specialization_data}
                />
              </div>
            </div>

            <div className="form__form-group col-md-4 pl-0">
              <span className="form__form-group-label">
                Medical Registration Number
              </span>
              <div className="form__form-group-field">
                <Field
                  name="medical_registration_number"
                  component={renderField}
                  type="text"
                  placeholder="Medical Registration Number"
                />
              </div>
            </div>
            <div className="form__form-group col-md-4 ">
              <span className="form__form-group-label">
                Medical Registration Council
              </span>
              <div className="form__form-group-field">
                <Field
                  name="medical_registration_council"
                  component={renderField}
                  type="text"
                  placeholder="Medical Registration Council"
                />
              </div>
            </div>
            <div className="form__form-group col-md-4 ">
              <span className="form__form-group-label">
                Medical Registration Year
              </span>
              <div className="form__form-group-field">
                <Field
                  name="medical_registration_year"
                  component={renderField}
                  type="text"
                  placeholder="Medical Registration Year"
                />
              </div>
            </div>
            <div className="form__form-group col-md-4 pl-0">
              <span className="form__form-group-label">Date of Birth</span>
              <div className="form__form-group-field">
                <Field
                  name="default_date"
                  component={renderDatePickerField}
                  placeholder="yyyy-mm-dd"
                />
                <div className="form__form-group-icon">
                  <CalendarBlankIcon />
                </div>
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Mobile Number</span>
              <div className="form__form-group-field">
                <Field
                  name="mobile_number"
                  component={renderField}
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
            <div className="form__form-group col-md-4">
              <span className="form__form-group-label">Password</span>
              <div className="form__form-group-field">
                <Field
                  name="password"
                  component={renderField}
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className={`form__form-group-button${
                    isPasswordShown ? " active" : ""
                  }`}
                  tabIndex="-1"
                  onClick={() => showPassword()}
                >
                  <EyeIcon />
                </button>
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button
                color="primary"
                // type="submit"
              >
                Submit
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
