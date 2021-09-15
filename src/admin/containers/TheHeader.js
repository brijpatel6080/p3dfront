import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../assets/css/Radio.css'
import ImageUpload from "image-upload-react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// routes config
import routes from "../routes";

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from "./index";

const TheHeader = () => {
  const [primary, setPrimary] = useState(false);
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };


  // Image Upload Start
  const [imageSrc, setImageSrc] = useState();

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  // Image Upload End


  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      {/* Current Page path  */}
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        {/* <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem> */}
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Projects</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/> */}

       {/* Modal Button  */}
        <CButton
          block variant="outline" color="info"
          onClick={() => setPrimary(!primary)}
          className="mr-15"
        >
          New Project
        </CButton>

        {/* Modal Box */}
        <CModal
          show={primary}
          onClose={() => setPrimary(!primary)}
          color="primary"
          className="projectFormModal"
        >
          
          <CModalHeader closeButton>
            <CModalTitle>Project Setup</CModalTitle>
          </CModalHeader>
          <CModalBody className="pb-60 pt-60">
            {/* Form  */}
            <div className="formSec">
              <form>
                <input
                  className="inputText mb-30"
                  type="text"
                  placeholder="Project Name"
                />
               
                  <CRow>
                    <CCol md="12" className="pb-15">
                      <lable>What is the labor type for this project?</lable>{" "}
                    </CCol>
                    <CCol md="12" className="pb-15">
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
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="12" className="pb-15">
                      <lable>What is the type of this project?</lable>{" "}
                    </CCol>
                    <CCol md="12" className="pb-15">
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
                    </CCol>
                  </CRow>
                  <CRow className="mb-15">
                    <CCol md="12" className="pb-15">
                      <lable>Project files</lable>{" "}
                    </CCol>
                    {/* Image Uploader  */}
                    <CCol md="12">
                      <ImageUpload
                        handleImageSelect={handleImageSelect}
                        imageSrc={imageSrc}
                        setImageSrc={setImageSrc}
                        style={{
                          width: "100%",
                          height: 250,
                          background: "#97cefb",
                          marginTop: 0,
                        }}
                      />
                      <p className="UploadImgText">Add files (zip, pdf, jpg or png)</p>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol md="12">
                      {/* <CButton
                        className="btn btn-primary width-100"
                        variant="primary"
                        size="lg"
                      >
                        Submit
                      </CButton> */}
                      <CButton block variant="outline" color="info" size="lg">Submit</CButton>
                    </CCol>
                  </CRow>
                {/* </CCard> */}
              </form>
            </div>
         
         
          </CModalBody>
          {/* <CModalFooter>
            <CButton color="primary" onClick={() => setPrimary(!primary)}>
              Do Something
            </CButton>{" "}
            <CButton color="secondary" onClick={() => setPrimary(!primary)}>
              Cancel
            </CButton>
          </CModalFooter> */}
        </CModal>

          {/* Profile Image */}
        <TheHeaderDropdown />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        {/* <Router
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        /> */}
        {/* <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink>
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink>
            <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink>
          </div> */}
      </CSubheader>
    </CHeader>
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

export default TheHeader;
