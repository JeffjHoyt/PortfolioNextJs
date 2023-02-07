import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar bg="dark" variant="dark" className="navBar">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="">
                  <Link href="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="">
                  {" "}
                  <Link href="/about">About</Link>
                </Nav.Link>

                <Nav.Link href="">
                  {" "}
                  <Link href="/projects">Projects</Link>
                </Nav.Link>
                <Nav.Link href="">
                  {" "}
                  <Link href="/contact">Contact</Link>
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
