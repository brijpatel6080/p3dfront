import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";

import VerticalForm from "../components/AddSubSpecialitiesReduxForm";
import showResults from "../components/Show";
import "../Specialities.css";

const AddSubSpecialities = ({ onSuccess }) => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("tables.addsubSpecialities.title")}</h3>
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

export default AddSubSpecialities;
