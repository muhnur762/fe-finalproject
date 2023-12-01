import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faMoneyBill,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { semuaJobs } from "../Data/index";

const CompanyPage = () => {
  return (
    <div className="jobs min-vh-100 content">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col>
            <h1 className="fw-bold">Company</h1>
            <p>Temukan Perusahaan impianmu!</p>
          </Col>
        </Row>
        <Row>
          {semuaJobs.map((kelas) => (
            <Col key={kelas.id} md={12} className="mb-4">
              <Card className="border-0 shadow-sm p-3">
                <Row>
                  <Col md={2}>
                    <div className="position-relative">
                      <img
                        src={kelas.image}
                        alt={kelas.title}
                        className="w-100 rounded"
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col md={7} className="d-flex align-items-center">
                    <div>
                      <h2 className="text-kowdeen">PT. Lorem Ipsum</h2>
                      <h5 className="text-secondary">
                        <FontAwesomeIcon icon={faLocationDot} /> Jakarta
                      </h5>
                    </div>
                  </Col>
                  <Col
                    md={3}
                    className="d-flex justify-content-end align-items-center ">
                    <div>
                      <a className="btn btn-kowdeen" href="/company/1">
                        Temukan Lowongan !
                      </a>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CompanyPage;
