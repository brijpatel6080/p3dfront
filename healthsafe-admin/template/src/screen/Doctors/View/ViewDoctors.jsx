import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import './tabTable.css'


import { useSelector } from "react-redux";
import moment from "moment";
import Tabs from "./Tabs";

const ViewDoctors = (item) => {
  const { t } = useTranslation("common");


  const [interestList, setInterestList] = useState([]);
  const doctors = useSelector((state) => state.user.doctors);
  const userInfo = useSelector((state) => state.user);
  const token = userInfo.token;

  // console.log("doctor item===", item.location.item)
  let items = item.location.item

  return (
    <Container className="ViewDoctors">
      {/* <Row>
        <Col md={12}>
          <h3 className="page-title">{t("tables.doctors_data_table.title")}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row> */}
      <Row>
        <Col md={12}>
          <Tabs items={items} />
        </Col>
      </Row>
    </Container>
  );
};

export default ViewDoctors;
