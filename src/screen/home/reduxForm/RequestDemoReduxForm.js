import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Field, reduxForm } from "redux-form";
import { Col, Container, Label, Row } from "reactstrap";
import DropdownList from "react-widgets/DropdownList";
import { FaWindowClose, FaRegWindowClose, FaEye } from "react-icons/fa";
import emailjs, { init } from "emailjs-com";
import Zoom from "react-reveal/Zoom";

// import "react-widgets/scss/react-widgets"

const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const maxLength10 = maxLength(10);
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue13 = minValue(13);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooYoung = (value) =>
  value && value < 13
    ? "You do not meet the minimum age requirement!"
    : undefined;
const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;
const string = (value) =>
  value && /[^a-zA-Z]/i.test(value) ? "Only String Characters" : undefined;
const other = (value) =>
  value == "Other" ? "Please enter company type" : undefined;
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

// For Email Send

// //   componentDidMount() {
// //     init("user_usnPurn5Q12tZZp2vhAJM");
// //   }

const RequestDemoReduxForm = (props) => {

  const url = "";

  const [isRegister, setIsRegister] = useState(true);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [emailid, setemailid] = useState("");
  const [password, setpassword] = useState("");
  const [FormValid, setFormValid] = useState("");
  const [selected, setSelected] = useState(false);

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    // console.log("event__", event.target.value)
  };

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  useEffect(() => {
    init("user_usnPurn5Q12tZZp2vhAJM");
  });
  const { handleSubmit, pristine, reset, submitting, onSubmitPress } = props;

  
  const sendMail = (data) => {
    console.log("____data", data);

    // return false
    // const { firstName, lastName, email, subject, message , formErrors} = this.state;
    const {
      address,
      company,
      companyType,
      email,
      firstName,
      industryType,
      lastName,
      mobile,
    } = data;

    var templateParams = {
      // to_name: firstName,
      from_name: firstName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      address: address,
      company: company,
      companyType: companyType,
      industryType: industryType,
      // reply_to: "reply_to",
    };

    var serviceId = "service_34eiy1t";
    var templateId = "template_tu9cdy4";
    var dataIs = {
      Firstname: firstName,
      Lastname: lastName,
      Email: email,
      Company: company,
      Companytype: companyType,
      Phoneno: mobile,
      Address: address,
      Industrytype: industryType,
    };
    // onSubmitPress();
    // http://54.169.56.66:7000/employee/add 
    fetch("http://13.229.201.66:7000/employee/add", {
      method: "post",
      body: JSON.stringify(dataIs),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success == false) {
          // alert(response.msg);
          // alert("validation")

          // const ValidForm =()=> response.msg;
          setFormValid(response.msg);  
        } else {
          alert("Registration Successfully");
          setIsRegister(false);  // after registration redirect to login modal
          setemailid(email);
          onSubmitPress(); // for close modal
        }
        // console.log("response", JSON.stringify(response));
        // if(JSON.stringify(response) == "succesfully add"){
        //   alert("1")
        // }

        // if (!response.errors || !response.code) {
        //   setIsRegister(false);
        //   setemailid(email);
        // }
      })
      .catch((err) => {
        setIsRegister(false);
        setemailid(email);
        // alert("server error");
        console.log("response err", err);
      });

    // setIsRegister(false);
  };
  const login = () => {
    console.log("request", {
      Email: emailid,
      Password: password,
    });
    fetch("http://13.229.201.66:7000/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Email: emailid,
        Password: password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success == true) {
          // window.reload();
          // setIsRegister(false);
          // window.location = '/Dashboard'
          alert("Login Successfully");
          onSubmitPress(); // for close modal
        } else {
          alert(response.msg);
        }
        console.log("response", response);
      })
      .catch((err) => {
        alert("server error");
        console.log("response err", err);
      });
  };
  if (!isRegister) {

    
    return (
      // <form onSubmit={handleSubmit(sendMail)}>


      <form onSubmit={login}>
        <Container className="requestForm">
          <Row>
            <Col>{/* <h5 className="formValid">{FormValid}</h5>{" "} */}</Col>
          </Row>
          <Row>
            <Col className="pb-15" md={12}>
              {/* <Field
                name="email"
                type="email"
                component={renderField}
                label="Email*"
                validate={(email, required)}
                warn={aol}
                input={{ disabled: true }}
              /> */}
              <Label>Email*</Label>
              <input className="" type="email" value={emailid} disabled />
            </Col>
            <Col className="pb-15" md={12}>
              <div className="form__form-group-field password">
                <Label>Password*</Label>
                <input
                  className=""
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                />
                {/* password */}
                {/* <Field
                  name="password"
                  type="password"
                  label="Password*"
                  component={renderField}
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                /> */}
                {/* <button
                  type="button"
                  className={`form__form-group-button${
                    isPasswordShown ? " active" : ""
                  }`}
                  tabIndex="-1"
                  onClick={() => showPassword()}
                >
                  <FaEye />
                </button> */}
              </div>
            </Col>

            <Col className="pb-15 pt-20 text-center" md={12}>
              <button
                className="btn btn-primary pl-40 pr-40 mr-15"
                // type="submit"
                type="button"
                disabled={submitting}
                onClick={login}
              >
                Submit
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    
    
    );

    
  } else {
    return (
          // Request a Demo Form (Modal Box)

      <form onSubmit={handleSubmit(sendMail)}>
        <Container className="requestForm">
          <Row>
            <Col>
              <Col>{/* <h5 className="formValid">{FormValid}</h5>{" "} */}</Col>
            </Col>
          </Row>
          <Row>
            <Col className="pb-15" md={6}>
              <Field
                name="firstName"
                type="text"
                component={renderField}
                label="First Name*"
                validate={[required, minLength2]}
                warn={string}
              />
            </Col>
            <Col className="pb-15" md={6}>
              <Field
                className="form-control"
                name="lastName"
                type="text"
                component={renderField}
                label="Last Name*"
                validate={[required, minLength2]}
                warn={string}
              />
            </Col>
            <Col className="pb-15" md={6}>
              <Field
                name="email"
                type="email"
                component={renderField}
                label="Email*"
                validate={(email, required)}
                warn={aol}
              />
              {FormValid == "email already registered." ? (
                <span className="formValid">Email already registered.</span>
              ) : null}
            </Col>
            <Col className="pb-15" md={6}>
              <Field
                name="mobile"
                type="number"
                component={renderField}
                label="Mobile number"
                validate={[required, phoneNumber, maxLength10]}
              />

              {FormValid == "Phone no already registered." ? (
                <span className="formValid">Phone no already registered.</span>
              ) : null}
            </Col>
            <Col className="pb-15" md={12}>
              <Field
                name="company"
                type="text"
                component={renderField}
                label="Company Name*"
                validate={[required, minLength2]}
                warn={alphaNumeric}
              />
            </Col>
            <Col className="pb-15" md={12}>
              <Field
                className="form-control"
                name="address"
                type="text"
                component={renderField}
                label="Address"
              />
            </Col>

            <Col className="pb-15" md={6}>
              <Row>
                <Col md={12}>
                  <label>Company Type*</label>
                  <div>
                  
                      <Field
                        name="companyType"
                        component="select"
                        onChange={changeSelectOptionHandler}
                      >
                        <option value="" disabled>
                          Select..
                        </option>
                        <option value="General Contractor">
                          General Contractor
                        </option>
                        <option value="Sub Contractor">Sub Contractor</option>
                        <option value="Architect">Architect</option>
                        <option value="Design firm">Design firm</option>
                        <option value="Other">Other</option>
                      </Field>

                  </div>
                </Col>
                {selected == "Other" ? <Other name="companyType" /> : null}
              </Row>
            </Col>
            <Col className="pb-15" md={6}>
              <label>Industry Type*</label>
              <div>
                <Field name="industryType" component="select">
                  <option value="" disabled>
                    Select..
                  </option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Municipal">Municipal</option>
                </Field>
              </div>
            </Col>

            <Col className="pb-15 pt-20 text-center" md={12}>
              <button
                className="btn btn-primary pl-40 pr-40 mr-15"
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
              <button
                className="btn btn-outline-secondary border1 clear"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    );
  }
};

const Other = (props) => {
  const { name } = props;
  return (
    <Col className="pb-15 otherDorp" md={12}>
      <Zoom>
        {/* <Label>Other*</Label> */}
        {/* <input type="text" name={name} placeholder="Company Type" required /> */}
        <Field
          className="form-control"
          name={name}
          type="text"
          component={renderField}
          label="Other*"
          validate={[required, minLength2]}
          warn={alphaNumeric, other}
        />
      </Zoom>
    </Col>
  );
};

export default reduxForm({
  form: "fieldLevelValidation", // a unique identifier for this form
})(RequestDemoReduxForm);
