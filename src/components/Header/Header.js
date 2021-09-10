import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../../assets/img/logo.jpg";
import { Col, Container, Row } from "reactstrap";
import { FaWindowClose, FaRegWindowClose, FaAngleDown } from "react-icons/fa";
import ModalBox, { ModalBoxPri } from "../Modal/ModalBox";
import SignIn from "../SignIn";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Styles.Wrapper className="pl-xs-0 pr-xs-0  pt-40">
      {/* <CSSReset /> */}

      <Navbar.Wrapper>
        <Container>
          <Row>
            {/* logo */}
            <Col md={2} sm={2}>
            <Link to="/Home" className="navbar-brand float-l">
                <img src={logo} className="navbar-brand-img" alt="..." />
              </Link>
              <HamburgerButton.Wrapper
                className="ml-auto"
                onClick={() => toggleDrawer(true)}
              >
                <HamburgerButton.Lines />
              </HamburgerButton.Wrapper>
            </Col>
            {/* Navigation */}
            <Col md={10} sm={9}>
              <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
                {openDrawer == true && (
                  <a
                    className="cloneBtn"
                    onClick={() => {
                      toggleDrawer(false);
                    }}
                  >
                    <FaRegWindowClose />
                  </a>
                )}
                <Navbar.Item>Products</Navbar.Item>
                <Navbar.Item>How It Works</Navbar.Item>
                <Navbar.Item>Benefits</Navbar.Item>
                <Navbar.Item>Integrations</Navbar.Item>

                <Navbar.Item className="dropdown">
                  About
                  <div class="dropdown-content">
                    <a className="submenu" href="#">
                      Settings
                      <FaAngleDown className="float-r" />
                      <div class="dropdown-menu">
                        {/* <Link to="/Dashboard" exact class="dropdown-item" >
                          Dashboard
                        </Link> */}
                        <Link class="dropdown-item" href="">
                          General
                        </Link>
                        <Link class="dropdown-item" href="">
                          Security
                        </Link>
                        <Link class="dropdown-item" href="">
                          Notifications
                        </Link>
                        <Link class="dropdown-item" href="">
                          Plans &amp; Payment
                        </Link>
                        <Link class="dropdown-item" href="">
                          Users
                        </Link>
                      </div>
                    </a>
                  </div>
                </Navbar.Item>
                {/* <a class="btn btn-primary lift ml-auto singIn">Sign in</a> */}
                {/* Sign In Button  */}
                <ModalBoxPri
                  btn="Sign in"
                  // title="Sign In"
                  content={<SignIn  />}
                  modalClass="ml-auto singIn"
                />
              </Navbar.Items>
            </Col>
          </Row>
        </Container>
      </Navbar.Wrapper>
    </Styles.Wrapper>
  );
};

const Styles = {
  Wrapper: styled.main`
    display: flex;
    // background-color: #eeeeee;
    // height: 100vh;
  `,
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;

    // 40em == 640px
    @media only screen and (max-width: 900px) {
      position: fixed;
      width: 100vw;
      top: 0;
      z-index: 11;
      box-shadow: 0px 3px 7px 0px #00000036;
    }
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0px;

    @media only screen and (max-width: 900px) {
      position: fixed;
      right: 0;
      top: 0;

      height: 100%;

      flex-direction: column;

      background-color: white;
      padding: 1rem 2rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 10px 1.5rem;
    cursor: pointer;
    color: #506690;
    font-weight: 600;
    @media only screen and (max-width: 900px) {
      padding: 1rem 0;
    }
  `,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 2rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 900px) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: black;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
};

// const CSSReset = createGlobalStyle`
//   *,
//   *::before,
//   *::after {
//     margin: 0;
//     padding: 0;
//     box-sizing: inherit;
//   }

export default Header;
