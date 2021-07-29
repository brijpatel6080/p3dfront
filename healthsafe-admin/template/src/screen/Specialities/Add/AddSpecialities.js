import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

import VerticalForm from "../components/AddSpecialitiesReduxForm";
import showResults from "../components/Show";
import "../Specialities.css";
import Notification from "../../Blogs/Modal/Notification";

const AddSpecialities = ({ onSuccess }) => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Notification />
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("tables.addSpecialities.title")}</h3>
          {/* <h3 className="page-subhead subhead">
            Use this elements, if you want to show some hints or additional
            information
          </h3> */}
        </Col>
      </Row>
      <Row className="mr-10">
        {/* <Form /> */}
        {/* <Form isAboveError /> */}
        <VerticalForm onSuccess={onSuccess} onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default AddSpecialities;
