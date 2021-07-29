import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import "../Specialities.css";
import VerticalForm from "../components/EditSpecialitiesReduxForm";
import showResults from "../components/Show";
import Notification from "../../Blogs/Modal/Notification";
const EditSpecialities = ({location, data, onSuccess}) => {
  // { data, onSuccess, item  }
  const { t } = useTranslation("common");

  // console.log("item==", props.location.state)
  let item = location.state
  // console.log("item==", item)

  return (
    <Container>
      <Notification />
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("tables.editSpecialities.title")}</h3>
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
          item={item}
        />
      </Row>
    </Container>
  );
};

export default EditSpecialities;
