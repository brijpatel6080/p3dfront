import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import DataReactTable from "./DataReactTable";
import CreateTableData from "./CreateData";
import { getDoctorsList } from "../../utils/api/APIServices";
import { useSelector } from "react-redux";
import moment from "moment";
import Notification from "../Blogs/Modal/Notification";

const ViewTable = () => {
  const { t } = useTranslation("common");
  const [interestList, setInterestList] = useState([]);
  // const doctors = useSelector((state) => state.user.doctors);
  const token = useSelector((state) => state.user.token);

  async function loadInterest() {
    // setShowLoader(true)
    const { response, error } = await getDoctorsList(token);
    // setShowLoader(false)
    console.log("Doctor Response", { response, error });
    if (error) {
      console.log(error);
    }
    if (response && response.status) {
      const data = response.data.map((interest) => {
        const {
          _id,
          role,
          about,
          avatar,
          dob,
          email,
          first_name,
          last_name,
          full_address,
          full_name,
          gender,
          mobile_number,
          rating,
          speciality,
          total_experience,
          isMobileVerified,
          isCompleteBasicProfile,
          isProfileComplete,
          sub_specialities,
          consultation_fee,
          blog_interests,
          is_approved_by_admin,
          work_experiences,
          banks_info,
          location_details,
          medicals,
          degrees,
        } = interest;
        var name = "";
        if (speciality) {
          name = speciality.name;
        }
        var degree = "";
        if (degrees) {
          degree = degrees.degree;
        }
        // console.log("speciality", speciality)
        // const { name } = speciality;
        return {
          id: _id,
          speciality: name,
          degrees: degree,
          role,
          about,
          avatar,
          dob,
          email,
          doctorName: first_name,
          last_name,
          full_address,
          full_name,
          gender,
          mobile: mobile_number,
          rating,
          total_experience,
          isMobileVerified,
          isCompleteBasicProfile,
          isProfileComplete,
          sub_specialities,
          consultation_fee,
          blog_interests,
          is_approved_by_admin,
          work_experiences,
          banks_info,
          location_details,
          medicals,
          // imageUrl:
          //   'http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png',
          // name: name,
          // createdDate: moment(createdAt).format('MM-DD-YYYY'),
          // updatedDate: moment(updatedAt).format('MM-DD-YYYY'),
        };
      });
      console.log("Blog Response data", { data });

      setInterestList(data);
    }
  }

  useEffect(() => {
    loadInterest();
  }, []);

  const RenderTable = () => {
    if (interestList.length == 0) return null;
    const reactTableData = CreateTableData(interestList);
    return <DataReactTable reactTableData={reactTableData} />;
  };

  return (
    <Container className="doctorsList">
      <Notification />
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("tables.doctors_data_table.title")}</h3>
          {/* <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3> */}
        </Col>
      </Row>
      <Row>
        {/* <DataReactTable reactTableData={reactTableData} /> */}
        <RenderTable />
      </Row>
    </Container>
  );
};

export default ViewTable;
