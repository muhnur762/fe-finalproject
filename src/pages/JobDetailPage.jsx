import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faMoneyBill,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { semuaJobs } from "../Data/index";

const JobDetailPage = () => {
  return (
    <div className="jobs min-vh-100 content">
      <Container>
        <Row>
          {/* ambil 1 data berdasarkan id */}
          {semuaJobs.map((kelas) => (
            <Col key={kelas.id} md={12} className="mb-4">
              <div className="position-relative">
                <img
                  src={kelas.image}
                  alt={kelas.title}
                  className="w-100 rounded-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
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
              <h3 className="mb-4">{kelas.title}</h3>
              <p className=" fw-bold">
                <FontAwesomeIcon icon={faMoneyBill} /> PT. Lorem Ipsum
              </p>
              <p className=" fw-bold">
                <FontAwesomeIcon icon={faMoneyBill} /> {kelas.price}
              </p>
              <p className=" fw-bold">
                <FontAwesomeIcon icon={faLocationDot} /> Jakarta
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia reiciendis assumenda tempore! Nisi, nemo. Delectus
                veritatis quos omnis voluptas similique ratione nam et
                reiciendis veniam, illum obcaecati quibusdam doloribus eos?
              </p>
              <button className="btn btn-kowdeen rounded-1">{kelas.buy}</button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default JobDetailPage;
