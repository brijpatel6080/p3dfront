import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import "../Specialities.css";
import VerticalForm from "../components/EditSubSpecialitiesReduxForm";
import showResults from "../components/Show";
const EditSubSpecialities = ({ data, onSuccess }) => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">
            {t("tables.editsubSpecialities.title")}
          </h3>
          {/* <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3> */}
        </Col>
      </Row>
      {/* <Row>
        <Form isHorizontal />
        <Form isHorizontal isAboveError />
      </Row> */}
      <Row>
        <VerticalForm
          onSuccess={onSuccess}
          data={data}
          onSubmit={showResults}
        />
      </Row>
    </Container>
  );
};

export default EditSubSpecialities;
