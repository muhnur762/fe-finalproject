import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import Hero from "../assets/Hero.png";
import { jobsTerbaru } from "../Data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage w-200 min-vh-100">
      <header className="w-100 min-vh-100 d-flex align-items-center justify-content-center home">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 fw-bold">
                Temukan <br /> <span>Lowongan Pekerjaan</span> <br /> Bersama
                Kami!
              </h1>
              <p className="mb-4">
                Kowdeen adalah sebuah website yang membantu pencari kerja
                menemukan pekerjaan yang sesuai dengan kriteria mereka. Website
                ini menyediakan berbagai lowongan pekerjaan dari berbagai
                perusahaan dan industri.
              </p>
              <a
                href="#sidejob"
                className="btn btn-kowdeen btn-lg rounded-1 me-2">
                Temukan Segera !
              </a>
            </Col>

            <Col lg="6">
              <img src={Hero} alt="hero" className="w-100" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100" id="sidejob">
        <Container className="py-5">
          <Row className="mt-4">
            <h1 className="text-center fe-bold">Lowongan Pekerjaan</h1>
            <p className="text-center">
              Temukan Pekerjaan Impian anda dengan pengalaman yang menarik !
            </p>
          </Row>
          <Row className="justify-content-center">
            {jobsTerbaru.map((kelas) => (
              <Col md={3} key={kelas.id}>
                <Card className="border-0 shadow-sm mb-4">
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
                    <h5 className="mb-5">{kelas.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center">
                      <p className="= m-0 text-primary fw-bold">
                        {kelas.price}
                      </p>
                      <a className="btn btn-kowdeen" href="/jobs/1">
                        Lihat
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <Link
                to="/jobs"
                className="btn btn-kowdeen btn-lg rounded-1 me-2">
                Lihat Pekerjaan
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
