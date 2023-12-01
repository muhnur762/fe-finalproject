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

const JobsAplicationPage = () => {
  return (
    <div className="jobs min-vh-100 content">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col>
            <h1 className="fw-bold">Hi, Lorem Ipsum</h1>
            <p>Lihat Lamaranmu!, untuk awal pekerjaan mu</p>
          </Col>
        </Row>
        <Row>
          {semuaJobs.map((kelas) => (
            <Col key={kelas.id} md={12} className="mb-4">
              <Card className="p-3 border-2 bg-transparent">
                <Row>
                  <Col md={4}>
                    <div className="position-relative">
                      <img
                        src={kelas.image}
                        alt={kelas.title}
                        className="w-100 rounded"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col md={5}>
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

                    <div className="">
                      <p className="m-0 fw-bold">
                        <FontAwesomeIcon icon={faMoneyBill} /> {kelas.price}
                      </p>
                      <p className="mt-2 fw-bold">
                        {" "}
                        <FontAwesomeIcon icon={faLocationDot} /> Jakarta
                      </p>
                    </div>
                  </Col>
                  <Col
                    md={3}
                    className="d-flex justify-content-center align-items-center ">
                    <div>
                      <a className="btn btn-outline-secondary" href="/jobs/1">
                        Dalam Proses
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

export default JobsAplicationPage;
