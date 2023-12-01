import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { semuaJobs } from "../Data/index";

const ComapnyDetailPage = () => {
  return (
    <div className="jobs min-vh-100 content">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col>
            <Card className="p-3 border border-0 shadow-sm">
              <Row>
                <Col md={3}>
                  <img
                    src="https://placekitten.com/200/200"
                    alt=""
                    className=" rounded"
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col md={9}>
                  <h2 className="text-kowdeen">PT. Lorem Ipsum</h2>
                  <h6 className="text-secondary">
                    <FontAwesomeIcon icon={faLocationDot} /> Jakarta
                  </h6>
                  <h6 className="text-secondary">
                    <FontAwesomeIcon icon={faPhone} /> 0812-1234-1234
                  </h6>
                  <h6 className="text-secondary">
                    <FontAwesomeIcon icon={faEnvelope} /> LoremIpsum@gmail.com
                  </h6>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis officia maxime, alias distinctio iste eos quae
                    dolore ex suscipit! Ea corrupti earum doloremque enim
                    aspernatur iste et dignissimos a dicta!
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center my-5">
            <h1 className="text-kowdeen fw-bold">Jobs</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {semuaJobs.map((kelas) => (
            <Col key={kelas.id} md={3} className="mb-4">
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

export default ComapnyDetailPage;
