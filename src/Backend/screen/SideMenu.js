import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
const SideMenu = () => {
  return (
    <>
          <Col md={2} className="p-0 sideBar">
            <div className="sideMenu">
              <Link className="slideLink active" to="/Products" exact >Products</Link>
              <Link className="slideLink" exact>Dashboard 1</Link>
              <Link className="slideLink" exact>Dashboard 2</Link>
              <Link className="slideLink" exact>Dashboard 3</Link>
              <Link className="slideLink" exact>Dashboard 4</Link>
              <Link className="slideLink" exact>Dashboard 5</Link>
              <Link className="slideLink" exact>Dashboard 6</Link>
            </div>
          </Col>
    </>
  );
};

export default SideMenu;
