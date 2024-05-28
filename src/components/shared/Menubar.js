"use client";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Menubar = () => {
  const expand = "lg"; // Choose the desired breakpoint

  return (
    <div className="bg-blue-950 py-2">
      <Container >
        <Navbar expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#" className="text-white font-semibold">
              Ecom
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex mx-auto" style={{ width: "400px" }}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
                <Nav className="ms-auto gap-2">
                  <Button variant="outline-light">
                    <Nav.Link href="#action1" className="text-white">
                      Store
                    </Nav.Link>
                  </Button>
                  <Button variant="outline-light">
                    <Nav.Link href="#action2" className="text-white">
                      Account
                    </Nav.Link>
                  </Button>

                  <Button>
                    Pc Builder
                    {/* <Nav.Link href="#action2" className='text-white border'>Pc Builder</Nav.Link> */}
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Menubar;
