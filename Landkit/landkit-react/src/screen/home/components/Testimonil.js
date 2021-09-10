import React from "react";
import { Col, Container, Row } from "reactstrap";
import ModalBox from "../../../components/Modal/ModalBox";

import RequestDemoReduxForm from "../reduxForm/RequestDemoReduxForm";
// import FormEmailJs from "./FormEmailJs";


const Testimonil = () => {
  return (
    <Container className="">
      <Row>
        <Col md={12} className="text-center pt-150">
          {/* <h3 className="page-title">hello</h3> */}
          <ModalBox
            title="Request a demo"
            btn="Request a demo"
            // content={<FormEmailJs />}
            content={<RequestDemoReduxForm />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonil;
