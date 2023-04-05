import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

// note

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container fluid className="">
      <Row>
        <Col>
          <Navbar
            bg="dark"
            variant="dark"
            className="navBar"
            style={{
              paddingLeft: "10vw",
              position: "fixed",
              top: "0",
              width: "100%",
              zIndex: "100",
              marginBottom: "60px",
              backgroundColor: "#2C3D55 !important",
            }}
          >
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="">
                  <Link href="#about" style={{ color: "white" }}>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="">
                  {" "}
                  <Link style={{ color: "white" }} href="#resume">
                    About
                  </Link>
                </Nav.Link>

                <Nav.Link href="">
                  {" "}
                  <Link style={{ color: "white" }} href="#projects">
                    Projects
                  </Link>
                </Nav.Link>
                <Nav.Link href="">
                  {" "}
                  <Link href="#contact" style={{ color: "white" }}>
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>

      <Component {...pageProps} />
    </Container>
  );
}
