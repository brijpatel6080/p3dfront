import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import logo from "../../../assets/img/logo.jpg";
import SideMenu from "../SideMenu";



const Projects = () => {

 

  return (
    <>
      <Container fluid={true}>
        <Row>
          <SideMenu />
          <Col md={9} className="pt-10">
            <h2 className="mb-15">Projects</h2>
            <h5>Report Status</h5>

            <Row className="pb-20">
              <Col md={12}>
                <button type="button" class="btn btn-outline-primary active btn-sm mr-15">
                  Submitted (7)
                </button>
                <button type="button" class="btn btn-outline-primary btn-sm mr-15">
                  Processed (7)
                </button>
                <button type="button" class="btn btn-outline-primary btn-sm mr-15">
                  Completed (2)
                </button>
                <button type="button" class="btn btn-outline-primary btn-sm mr-15">
                  Schedules (5)
                </button>
                <button type="button" class="btn btn-outline-primary btn-sm mr-15">
                  Costs (5)
                </button>
              </Col>
            </Row>
            <h6>Results displayed: 7 of 7</h6>
            <table class="table table-hover border">
              <thead>
                <tr>
                  <th scope="col">Project Name</th>
                  <th scope="col">Processed</th>
                  <th scope="col">Score</th>
                  <th scope="col">Review</th>
                  <th scope="col">Completed</th>
                  <th scope="col">Schedule</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>111 Main Street, Hattiesburb MS</td>
                  <td>Completed</td>
                  <td>73%</td>
                  <td>Yes</td>
                  <td></td>
                  <td>sched0002</td>
                  <td>sched00021</td>
                </tr>
                <tr>
                  <td>111 Main Street, Hattiesburb MS</td>
                  <td>Completed</td>
                  <td>100%</td>
                  <td>Yes</td>
                  <td></td>
                  <td>sched0002</td>
                  <td>sched00021</td>
                </tr>
                <tr>
                  <td>111 Main Street, Hattiesburb MS</td>
                  <td>Completed</td>
                  <td>73%</td>
                  <td>Yes</td>
                  <td></td>
                  <td>sched0002</td>
                  <td>sched00021</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
