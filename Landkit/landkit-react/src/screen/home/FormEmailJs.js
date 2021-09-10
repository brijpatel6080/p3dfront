import React, { Component, useState } from "react";
import emailjs, { init } from "emailjs-com";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });
  return valid;
};
class FormEmailJs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      subject: null,
      message: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }
  handleSubmit = (e) => {
    const { firstName, lastName, email, subject, message } = this.state;
    let formErrors = { ...this.state.formErrors };
    //  formErrors?.firstName == " " ? "Required" : ""

    console.log("formErrors ", formErrors);
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        message: ${this.state.message}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      // if (!values.Title) {
      //   errors.Title = "Title field shouldn’t be empty";
      // } else if (/[0-9-*-+]+/g.test(values.Title)) {
      //   errors.Title = "Invalid name given. ";
      // }

      case "firstName":
        formErrors.firstName = /[0-9-*-+]+/g.test(value)
          ? "Invalid name given. "
          : value.length < 3
          ? "minimum 3 characaters required"
          : formErrors.firstName == null || ""
          ? "Required"
          : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "subject":
        formErrors.subject = value.length < 3 ? "Please Select Subject" : "";
        break;
      case "message":
        formErrors.message =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  // sendMail = () => {
  //   const { firstName, lastName, email, subject, message , formErrors} = this.state;
  //   if (formValid(this.state)) {
  //   }

  //   // if(firstName === null){
  //   //   alert("Enter FN");
  //   // }
  //   else {
  //     var templateParams = {
  //       // to_name: firstName,
  //       from_name: firstName,
  //       firstName: firstName,
  //       lastName: lastName,
  //       email: email,
  //       message: message,
  //       // reply_to: "reply_to",
  //       subject: subject,
  //     };

  //     var serviceId = "service_34eiy1t";
  //     var templateId = "template_tu9cdy4";
  //     // var serviceId = "service_7cj6qlo"
  //     // var templateId = "template_nf6npz1"
  //     emailjs.send(serviceId, templateId, templateParams).then(
  //       (response) => {
  //         this.setState({
  //           firstName: "",
  //           lastName: "",
  //           email: "",
  //           message: "",
  //           subject: "",
  //         });
  //         alert("Message send successfully.. ");
  //         //  console.log('SUCCESS!', response.status, response.text);
  //       },
  //       (err) => {
  //         console.log("FAILED...", err);
  //         alert("Message could not send... ");
  //       }
  //     );
  //   }
  // };
  // componentDidMount() {
  //   init("user_usnPurn5Q12tZZp2vhAJM");
  // }

  render() {
    const { formErrors, firstName, lastName, email, subject, message } =
      this.state;
    return (
      <>
        <div className="wrapper">
          <div className="form-wrapper">
            <form class="contact-form" onSubmit={this.handleSubmit} noValidate>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="firstName">
                      First Name*
                    </label>
                    <input
                      value={firstName}
                      className={
                        formErrors.firstName.length > 0
                          ? "form-control error"
                          : "form-control"
                      }
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.firstName.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.firstName}
                      </span>
                    )}
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="lastName">
                      Last Name*
                    </label>
                    <input
                      className="form-control"
                      value={lastName}
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="email">
                      Email*
                    </label>
                    <input
                      class="form-control"
                      id="email"
                      type="email"
                      placeholder="name@address.com"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="lastName">
                      Mobile No.*
                    </label>
                    <input
                      className="form-control"
                      // value={companyName}
                      placeholder="Mobile Number"
                      type="text"
                      name="mobile"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="lastName">
                      Company Name*
                    </label>
                    <input
                      className="form-control"
                      // value={companyName}
                      placeholder="Company Name"
                      type="text"
                      name="companyName"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label" for="lastName">
                      Company Type*
                    </label>
                    <input
                      className="form-control"
                      // value={companyName}
                      placeholder="GC, SC, Architect, Design firm, other"
                      type="text"
                      name="companyType"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-label" for="lastName">
                      Address
                    </label>
                    <input
                      className="form-control"
                      // value={companyName}
                      placeholder="Address"
                      type="text"
                      name="address"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-label" for="email">
                      {" "}
                      Industry Type
                    </label>
                    <select
                      class="dropdown-item-custom"
                      id="builder_type_cloned_-0e481f9e-34b4-43f5-9b48-c5ad93d7552a"
                      required=""
                      class="hs-input invalid error is-placeholder"
                      name="builder_type_cloned_"
                      data-reactid=".hbspt-forms-0.1:$5.$builder_type_cloned_.0"
                    >
                      <option
                        value=""
                        disabled=""
                        selected=""
                        data-reactid=".hbspt-forms-0.1:$5.$builder_type_cloned_.0.0"
                      >
                        Please Select
                      </option>
                      <option
                        value=""
                        data-reactid=".hbspt-forms-0.1:$5.$builder_type_cloned_.0.0"
                      >
                        Res
                      </option>
                      <option
                        value=""
                        data-reactid=".hbspt-forms-0.1:$5.$builder_type_cloned_.0.0"
                      >
                        Comm
                      </option>
                      <option
                        value=""
                        data-reactid=".hbspt-forms-0.1:$5.$builder_type_cloned_.0.0"
                      >
                        indus
                      </option>
                      <option
                        value=""
                        data-reactid=".hbspt-forms-0.1:$5.$builder_type_cloned_.0.0"
                      >
                        municiapl
                      </option>
                    </select>
                  </div>
                </div>

                <div class="comment-submit-btn text-center">
                  <button
                    onClick={this.sendMail}
                    class="btn w-100 btn-primary mt-20"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default FormEmailJs;
