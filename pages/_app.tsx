import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

// note

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Jeff Hoyt Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Jeff Hoyt Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jeffhoyt" />
        <meta name="twitter:creator" content="@jeffhoyt" />
        <meta name="twitter:title" content="Jeff Hoyt Portfolio" />
        <meta name="twitter:description" content="Jeff Hoyt Portfolio" />
        <meta name="twitter:image" content="https://i.imgur.com/WZjCS4G.jpg" />
        <meta
          property="og:url"
          content="https://jeffjhoyt.github.io/PortfolioNextJs/"
        />
        <meta property="og:title" content="Jeff Hoyt Portfolio" />
        <meta property="og:description" content="Jeff Hoyt Portfolio" />
        <meta property="og:image" content="https://i.imgur.com/WZjCS4G.jpg" />
        <meta
          property="og:image:secure_url"
          content="https://i.imgur.com/WZjCS4G.jpg"
        />
        <meta property="og:image:alt" content="Jeff Hoyt Portfolio" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jeff Hoyt Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
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
                // hello
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
    </>
  );
}
