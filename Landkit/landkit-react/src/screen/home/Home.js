import React from "react";
import { Col, Container, Row } from "reactstrap";
import About from "./components/About";
import Brands from "./components/Brands";
import GetStarted from "./components/GetStarted";
import HowWorks from "./components/HowWorks";
import VideoSec from "./components/VideoSec";
import Welcome from "./components/Welcome";
import "./css/custom.css";

const Home = () => {
  return (
    <>
    
      <Welcome />     {/* Welcome to Predection3d */}
      <Brands />      {/* if you can book a plane ticket online  */}
      <About />       {/* Our Scheduling & Estimating Software */}
      <VideoSec />    {/* Construction Schedule / Local Cost Estimates / Bi-Monthly Cost Alerts == &&== Watch our video to see how fast */}
      <HowWorks />    {/* How it works / TESTIMONIAL / Support Let us help you.*/}
      <GetStarted />  {/* Get Landkit and save your time. */}
    </>
  );
};

export default Home;
