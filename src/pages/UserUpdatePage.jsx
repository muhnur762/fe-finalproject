import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
import { ArrowLeftShort } from "react-bootstrap-icons";

const UserUpdatePage = () => {
  return (
    <Container className="content min-vh-100">
      <Row className="d-flex justify-content-center">
        <Col xs={0} md={9} className="">
          <Card className="shadow-sm h-100 border-0">
            <Card.Header className="border-0 bg-kowdeen text-light">
              <Card.Link href="/user">
                <ArrowLeftShort size={23} className="text-light" />
              </Card.Link>
              Edit Profile
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Profile
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="file" placeholder="Nama Depan" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Nama Depan
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="Nama Depan" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Nama Belakang
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="Nama Belakang" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Telepon
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="Telepon" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button className=" btn btn-kowdeen" type="submit">
                      simpan
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserUpdatePage;
