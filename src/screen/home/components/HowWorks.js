import React from "react";
import g from "../../../assets/img/illustrations/G.png";
import ModalBox from "../../../components/Modal/ModalBox";
import RequestDemoReduxForm from "../reduxForm/RequestDemoReduxForm";
import video from "../../../assets/video/video-1.mp4";
const HowWorks = () => {

  return (
    <>
      <section class="pt-5 pt-md-7 hw">
        <div class="container pb-0 pt-40">
          <div class="row align-items-center pl-50 pr-50">
            {/* Content  */}
            <div class="col-12 col-md-6">
              <h2 class="fw-400 mb-30">How it works</h2>
              <h3 class="fs-lg text-muted mb-5 mb-30">
                Get up and running in minutes to start uploading your
                construction plans
              </h3>
              <h4>
                Upload your plans and select simply select schedule, costs, or
                both
              </h4>
            </div>

            {/* Button == Request a demo */}
            <div class="col-12 col-md-6">
              <div class="w-md-130" style={{ minHeight: 400 }}>
                <div class="device-combo device-combo-iphonex-macbook">
                  <ModalBox
                    title="Request a demo"
                    btn="Request a demo"
                    // content={<FormEmailJs />}
                    // content={
                    //   <RequestDemoReduxForm
                    //     onSubmitPress={() => alert("test")}
                    //   />
                    // }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section class="py-6 py-md-8 testimo">
        <div class="container pt-80 pb-100 pb-xs-30">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h2>TESTIMONIAL</h2>
              <h3>
                Listen to find out more about how our platform impacts your
                projects
              </h3>
              <div class="row justify-content-center">
                <video width="400" controls>
                  <source
                    src={video}
                    class="row justify-content-center"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPE */}
      <div class="position-relative mt-n8 testimonial">
        <div class="shape shape-bottom shape-fluid-x text-gray-200">
          <svg
            viewBox="0 0 2880 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
              fill="currentColor"
            />
          </svg>{" "}
        </div>
      </div>

      {/* <section class="pt-8 pt-md-11 bg-gradient-light-white">
        <div class="container">
          <div class="row justify-content-center"></div>
        </div>
      </section> */}

      {/* Support Let us help you*/}
      <section class="pt-12 pt-md-13 bg-gray-200 support pt-150 pb-xs-40">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-5 col-lg-6 order-md-2">
              <img src={g} alt="..." class="img-fluid mb-6 mb-md-0" />
            </div>
            <div class="col-12 col-md-7 col-lg-6 order-md-1 pl-60 pr-30 pl-xs-30">
              <h2 className="">
                Support
                <br />
                <span class="text-primary"></span>
              </h2>

              <p class="fs-lg text-gray-700 mb-6">
                We can help you with all your construction scheduling and
                take-off costing projects
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HowWorks;
