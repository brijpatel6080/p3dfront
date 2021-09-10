import React from "react";
import a from "../../../assets/img/illustrations/illustration-11.jpg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <section
        id="about"
        class="pt-8 pt-md-11 bg-gradient-light-white pt-100 pb-60 pt-xs-40 pl-xs-15 pr-xs-15"
      >
        <div class="container">
          <div class="row align-items-center">
            {/* About Content  */}
            <div
              class="col-12 col-md-7 col-lg-6 pl-60 pl-xs-20"
              data-aos="fade-right"
            >
              <Fade left>
                <div>
                  <h2>Our Scheduling & Estimating Software</h2>
                  <p class="fs-lg text-muted mb-6 mb-30">
                    Automated A.I. Construction Scheduling & Estimating Software
                  </p>
                  <div class="d-flex mb-30">
                    <div class="icon text-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z" />
                          <path
                            d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z"
                            fill="#335EEA"
                          />
                          <path
                            d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z"
                            fill="#335EEA"
                            opacity=".3"
                          />
                        </g>
                      </svg>{" "}
                    </div>
                    <div class="ms-5">
                      <h4 class="mb-1">
                        Automated A.I. Construction Scheduling & Estimating
                        Software
                      </h4>
                      <p class="text-muted mb-6">
                        Automated A.I. Construction Scheduling & Estimating
                        Software
                      </p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="icon text-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z" />
                          <path
                            d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                            fill="#335EEA"
                          />
                          <rect
                            fill="#335EEA"
                            opacity=".3"
                            transform="rotate(15 12 12)"
                            x="11"
                            y="4"
                            width="2"
                            height="16"
                            rx="1"
                          />
                        </g>
                      </svg>{" "}
                    </div>

                    <div class="ms-5">
                      <h4 class="mb-1">
                        Automated A.I. Construction Scheduling & Estimating
                        Software
                      </h4>

                      <p class="text-muted mb-6 mb-md-0">
                        Automated A.I. Construction Scheduling & Estimating
                        Software
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            {/* About Image  */}
            <div class="col-12 col-md-5 col-lg-6 pt-xs-30">
              <Fade right>
                <div
                  class="w-md-150 w-lg-130 position-relative"
                  data-aos="fade-left"
                >
                  <div class="shape shape-fluid-y shape-blur-4 text-gray-200"></div>
                  <div class="img-skewed img-skewed-start">
                    <img src={a} alt="..." style={{ width: "100%" }} />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
