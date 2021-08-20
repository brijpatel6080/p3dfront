import React from "react";
import { FaLongArrowAltRight, FaAngleRight } from 'react-icons/fa';

const GetStarted = () => {
  return (
    <>
    {/* Get started - -- Get Landkit and save your time.*/}
      <section class="py-8 py-md-11 bg-dark pt-100 pb-100 pt-xs-60 pb-xs-60">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center pl-30 pr-30">
              <span class="badge rounded-pill bg-gray-700-soft mb-4">
                <span class="h6 fw-bold text-uppercase">Get started</span>
              </span>

              <h1 class="display-4 text-white mb-20">
                Get Landkit and save your time.
              </h1>

              <p class="fs-lg text-muted mb-6 mb-md-8">
                Stop wasting time trying to do it the "right way" and build a
                site from scratch. Landkit is faster, easier, and you still have
                complete control.
              </p>

              <a
                href=""
                target="_blank"
                class="btn btn-success lift mt-40 buy"
              >
                Buy it now <FaLongArrowAltRight className="ml-10" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="position-relative">
        <div class="shape shape-bottom shape-fluid-x text-gray-200">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
              fill="currentColor"
            />
          </svg>{" "}
        </div>
      </div>
    </>
  );
};

export default GetStarted;
