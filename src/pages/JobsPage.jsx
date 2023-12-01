import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { semuaJobs } from "../Data/index";

const JobsPage = () => {
  return (
    <div className="jobs min-vh-100 content">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col>
            <h1 className="fw-bold text-center">Jobs</h1>
            <p className="text-center">
              Temukan Pekerjaan Impian anda dengan pengalaman yang menarik !
            </p>
          </Col>
        </Row>
        <Row>
          {semuaJobs.map((kelas) => (
            <Col key={kelas.id} md={4} className="mb-4">
              <Card className="border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src={kelas.image}
                    alt={kelas.title}
                    className="w-100 rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <Card.Body>
                  <div className="star my-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className={kelas.star1}
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={kelas.star2}
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={kelas.star3}
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={kelas.star4}
                      style={{ color: "gold" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalf}
                      className={kelas.star5}
                      style={{ color: "gold" }}
                    />
                  </div>
                  <p>PT. Lorem Ipsum</p>
                  <h5 className="mb-4">{kelas.title}</h5>
                  <div className=" d-flex justify-content-between align-items-center">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    {/* <Button className="btn btn-kowdeen rounded-1">
                  {kelas.buy}
                </Button> */}
                    <a className="btn btn-kowdeen" href="/jobs/1">
                      Lihat
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default JobsPage;
