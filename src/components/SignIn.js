import React from 'react'
import bg from '../assets/img/photos/photo-1.jpg'
import { useHistory } from "react-router-dom";





const SignIn = () => {

  let history = useHistory();  
  console.log("history=", history)

const handleSubmit = () => {
  history.push('/admin/');
}

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
                  style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
                >
                  {/* <img
                    src={bg}
                    alt="..."
                    class="img-fluid"
                  /> */}

                  <div class="shape shape-end shape-fluid-y text-white d-none d-md-block">
                  
                  </div>
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

                    <form onSubmit={handleSubmit} class="mb-6 mb-30">
                      <div class="form-group">
                        <label
                          class="visually-hidden"
                          for="modalSigninHorizontalEmail"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="modalSigninHorizontalEmail"
                          placeholder="Your email"
                        />
                      </div>

                      <div class="form-group mb-5">
                        <label
                          class="visually-hidden"
                          for="modalSigninHorizontalPassword"
                        >
                          Enter your password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="modalSigninHorizontalPassword"
                          placeholder="Enter your password"
                        />
                      </div>

                      <button class="btn w-100 btn-primary mt-20" type="submit">
                        Sign in
                      </button>
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
