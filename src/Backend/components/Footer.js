import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <>
      <Container
        fluid={true}
        style={{
          backgroundColor: "#d4d4d4",
        //   top: "100vh",
        //   position: "absolute",
          paddingTop: 15,
          textAlign: "center",
        }}
      >
        <Row>
          <Col md={12} className="pt-10 pb-10">
            <h5>© 2021 P3D. All Rights Reserved.</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
