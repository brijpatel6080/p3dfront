import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from "@coreui/react";


import usersData from "./UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = [
  "ProjectName",
  "Processed",
  "Score",
  "Review",
  "Completed",
  "Schedule",
  "Cost",
];

const Projects = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Products
             
            </CCardHeader>

            <CRow className="pl-20 pr-20 pt-20">
              <CCol col="12" sm="12" md="12" xl className="mb-3 mb-xl-0">
                <h6>Report Status</h6>
              </CCol>
            </CRow>
            {/* Buttons  */}
            <CRow className="pl-20 pr-20">
              <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <CButton block variant="outline" color="info" className="active">
                  Submitted (7)
                </CButton>
              </CCol>
              <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <CButton block variant="outline" color="info">
                  Processed (7)
                </CButton>
              </CCol>
              <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <CButton block variant="outline" color="info">
                  Completed (2)
                </CButton>
              </CCol>
              <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <CButton block variant="outline" color="info">
                  Schedules (5)
                </CButton>
              </CCol>
              <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <CButton block variant="outline" color="info">
                  Costs (5)
                </CButton>
              </CCol>
            </CRow>
            {/* Table  */}
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Projects;
