import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavbarComponents = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        bg="white"
        data-bs-theme="light"
        className="shadow">
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            Kow
            <span style={{ color: "#3A8B91" }} className="">
              Deen
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/company">Company</Nav.Link>
              <Nav.Link href="/jobaplication">Job Application</Nav.Link>
              <Nav.Link href="/jobs">Job</Nav.Link>
            </Nav>
            <Nav className="d-flex grid gap-2 justyfy-content-center">
              <Nav.Link href="/register" className="text-center">
                Register
              </Nav.Link>
              <Nav.Link className="btn-login" href="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
