import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Label } from "reactstrap";
import { Button } from "reactstrap";
import logo from "../../assets/img/logo.jpg";
import Modal from "react-modal";
import "../assets/css/Radio.css";
import { FaXbox, FaXing } from "react-icons/fa";
import ImageUpload from "image-upload-react";
//important for getting nice style.
import "image-upload-react/dist/index.css";

// Modal Box Style 
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    background: "rgb(23 23 41)",
  },
};

const Header = () => {
  // Dropdown Menu Start

  // Dropdown Menu End

  // Image Upload Start
  const [imageSrc, setImageSrc] = useState();

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  // Image Upload End

  var url = window.location.href;
  var filename = url.split("/").pop().split("#")[0].split("?")[0];
  // console.log("path_", filename);

  //   Modal Box Start

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //   Modal Box End

  return (
    <>
      <Container className="header bg pt-15" fluid={true}>
        <Row>
          <Col md={10}>
            <Link to="/Home" className="navbar-brand float-l">
              {/* <img src={logo} className="navbar-brand-img ml-20" alt="..." /> */}
              <img src={logo} className="dashboardIcon footer-brand ml-20" alt="..." />
            </Link>
          </Col>
          <Col md={2} className="display-f">
            <button onClick={openModal} className="btn btn-primary products">
              New Product
            </button>

            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h4
                className="text-center text-white"
                ref={(_subtitle) => (subtitle = _subtitle)}
              >
                Project Setup
              </h4>
              <button className="closeBtn" onClick={closeModal}>
                &#10005; &nbsp; Cancel
              </button>
              <div className="formSec">
                <form>
                  <input
                    className="inputText mb-30"
                    type="text"
                    placeholder="Project Name"
                  />
                  <Container>
                    <Row className="mb-30">
                      <Col md={12} className="pb-15">
                        <lable>What is the labor type for this project?</lable>{" "}
                      </Col>
                      {/* checked */}
                      <RadioBox
                        name="laborProject"
                        title="Standard Union"
                        id="tool-1"
                      />
                      <RadioBox
                        name="laborProject"
                        title="Residential"
                        id="tool-2"
                      />
                      <RadioBox
                        name="laborProject"
                        title="Open Shop"
                        id="tool-3"
                      />
                      <RadioBox
                        name="laborProject"
                        title="Facility Maintenance"
                        id="tool-4"
                      />
                      <RadioBox
                        name="laborProject"
                        title="Repair & Remodeling."
                        id="tool-5"
                      />
                    </Row>
                    <Row className="mb-30">
                      <Col md={12} className="pb-15">
                        <lable>What is the type of this project?</lable>{" "}
                      </Col>
                      {/* checked */}
                      <RadioBox
                        name="typeProject"
                        title="Residential"
                        id="project-1"
                      />
                      <RadioBox
                        name="typeProject"
                        title="Commercial"
                        id="project-2"
                      />
                      <RadioBox
                        name="typeProject"
                        title="Industrial"
                        id="project-3"
                      />
                    </Row>
                    <Row className="mb-50">
                      <Col md={12} className="pb-15">
                        <lable>Project files</lable>{" "}
                      </Col>
                      <Col md={12}>
                        <ImageUpload
                          handleImageSelect={handleImageSelect}
                          imageSrc={imageSrc}
                          setImageSrc={setImageSrc}
                          style={{
                            width: "100%",
                            height: 250,
                            background: "#2d2d5d",
                            marginTop: 0,
                          }}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <Button
                          className="btn btn-primary width-100"
                          variant="primary"
                          size="lg"
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </form>
              </div>
            </Modal>

            {/* <button type="button" className="btn btn-primary">New Product</button> */}
            {/* <Link className="navbar-profile">DS</Link> */}

            <div className="dropdown">
              <button className="navbar-profile">
              DS
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content mt-0">
                <a href="#">Profile</a>
                <a href="#">Logout</a>
              </div>
            </div>


          </Col>
        </Row>
        <Row className="pt-0">
          <Col md={12}>
            <h1 className="page-title">{filename}</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const RadioBox = (props) => {
  const { name, title, id } = props;
  return (
    <>
      {/* <Col md={3}> */}
      {/* id="tool-1"  =  for="tool-1"  */}
      <input className="checkbox-tools" type="radio" name={name} id={id} />
      <label className="for-checkbox-tools" for={id}>
        <i className="uil uil-line-alt"></i>
        {title}
      </label>
      {/* </Col> */}
    </>
  );
};

export default Header;
