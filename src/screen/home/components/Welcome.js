import React from "react";
import { Col, Container, Row } from "reactstrap";
import building from "../../../assets/img/illustrations/illustration-13.jpg";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal';

const Welcome = () => {
  return (
    <>
    {/* Welcome Section */}
      <section id="welcome" className="pt-4 pt-md-11 pt-40 pb-30">
        <div className="container">
          <div className="row align-items-center">
          <Fade bottom>
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={building}
                className="img-fluid building pt-xs-80 p-xs-30"
                alt="..."
                data-aos-delay="100"
              />
            </div>
            </Fade>
            <Fade bottom>
            <div className="col-12 col-md-7 col-lg-6 order-md-1 " data-aos="fade-up">
              <h1 className="display-4 text-center text-md-start mb-20 pr-20" 
              // style={{fontFamily: 'HKGroteskPro-Italic'}}
              >
                Welcome to <span className="text-primary">Predection3d </span>
                {/* <br />  */}
                A.I Construction Scheduling & Estimating Software .
              </h1>
              <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8 mb-40">
                Upload your Construction plans or BIM files and get your
                complete construction schedule and take-off estimate in minutes
              </p>
              <div className="text-center">
                <a
                  className="btn btn-primary lift"
                >
                  Request a demo
                </a>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* Get your construction ... */}
      <section className="py-6 py-md-8  pt-50 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="getTitle ">Get your construction schedule and estimates in seconds!</h2>
            </div>
          </div>
        </div>
      </section>
      {/* 3 Easy Steps .. */}
      <section className="py-8 py-md-11  pt-80 pb-90 easySteps pt-xs-40 pb-xs-40 pl-xs-20 pr-xs-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="titleEasy mb-xs-40">
                3 Easy Steps
              </h2>
            </div>
          </div>

          <div className="row">
          <Fade bottom>
            <div className="col-12 col-md-4 mb-xs-50" data-aos="fade-up">
              <div className="icon text-primary mb-3">
                
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="assets/img/illustrations/svg-1.svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z"
                      fill="#335EEA"
                    />
                    <path
                      d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z"
                      fill="#335EEA"
                      opacity=".3"
                    />
                  </g>
                </svg>{" "}
                <h1 className="mt-5">Step -1</h1>
              </div>

              <p className="text-muted mb-6 mb-md-0" >
                Upload Construction Plans Upload your AutoCAD, BIM, or PDFs to
                enable our AI and machine learning engine to optimize your
              </p>
            </div>
            </Fade><Fade bottom>
            <div className="col-12 col-md-4 mb-xs-50" data-aos="fade-up" data-aos-delay="50">
              <div className="icon text-primary mb-3">
                
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z"
                      fill="#335EEA"
                    />
                    <path
                      d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z"
                      fill="#335EEA"
                      opacity=".3"
                    />
                  </g>
                </svg>{" "}
                <h1 className="mt-5">Step -2</h1>
              </div>
              <p className="text-muted mb-6 mb-md-0">
                Click “Get Schedule” Our AI and machine learning engine will
                optimize your schedule for fastest and most in-expensive way to
                build
              </p>
            </div>
            </Fade><Fade bottom>
            <div
              className="col-12 col-md-4 mb-xs-50"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon text-primary mb-3">
                
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
                <h1 className="mt-5">Step -3</h1>
              </div>

              <p className="text-muted mb-6 mb-md-0" >
                Click “Get Take-Off Estimate” Our AI and machine learning engine
                will price out your entire construction costs in second
              </p>
            </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
