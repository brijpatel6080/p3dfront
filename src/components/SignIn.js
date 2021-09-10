import React, { useState } from "react";
import bg from "../assets/img/photos/photo-1.jpg";
import { useHistory, Redirect } from "react-router-dom";

import { Field, reduxForm } from "redux-form";
import { Col, Container, Label, Row } from "reactstrap";

const SignIn = (props) => {
  const [emailid, setemailid] = useState("");
  const [password, setpassword] = useState("");
 
  const {  pristine, reset, submitting, onSubmitPress } = props;

  let history = useHistory();
  // console.log("history=", history);

  // const handleSubmit = () => {
  //   alert("Login Successfully");
  //   history.push('/admin/');
  // };

  const onChangeEmail = (e) => {
    const emailid = e.target.value;
    setemailid(emailid);
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

          alert("Login Successfully");
          history.push('/admin/');
          // <Redirect  to="/admin/" />
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

  return (
    <>
      {/* <div
        class="modal fade"
        id="modalSigninHorizontal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalSigninHorizontalTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        > */}
      <div class="modal-content">
        <div class="card card-row">
          <div class="row gx-0">
            <div
              class="col-12 col-md-6 bg-cover card-img-start"
              style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
            >
              {/* <img
                    src={bg}
                    alt="..."
                    class="img-fluid"
                  /> */}

              <div class="shape shape-end shape-fluid-y text-white d-none d-md-block"></div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card-body pt-70 pb-70 pl-40 pr-40">
                <h2
                  class="mb-0 fw-bold text-center mb-10"
                  id="modalSigninHorizontalTitle"
                >
                  Sign In
                </h2>

                <p class="mb-6 text-center text-muted mb-30">
                  Simplify your workflow in minutes.
                </p>
                {/* onSubmit={handleSubmit(login)} */}

                <form onSubmit={login}>
                  <Container className="requestForm">
                    <Row>
                      <Col>
                        {/* <h5 className="formValid">{FormValid}</h5>{" "} */}
                      </Col>
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
                // input={{ disabled: true }}
              /> */}

                        <Label>Email*</Label>
                        <input
                          className=""
                          type="email"
                          value={emailid}
                          // disabled
                          onChange={onChangeEmail}
                        
                        />
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
                          type="submit"
                          // type="button"
                          disabled={submitting}
                          // onClick={login}
                        >
                          Submit
                        </button>
                        {/* <button
                          className="btn btn-outline-secondary"
                          type="button"
                          disabled={pristine || submitting}
                          onClick={reset}
                        >
                          Clear Values
                        </button> */}
                      </Col>
                    </Row>
                  </Container>
                </form>

                <p class="mb-0 fs-sm text-center text-muted">
                  Don't have an account yet? <a href="">Sign up</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div>
      </div> */}
    </>
  );
};

export default SignIn;
