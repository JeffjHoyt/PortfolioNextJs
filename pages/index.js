import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Script from "next/script";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Jeff Hoyt Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      <Container fluid className="noPadding">
        <Row>
          <Col id="about">
            <About />
          </Col>
        </Row>
        <Row>
          <Col id="projects">
            <Projects />
          </Col>
        </Row>
        <Row>
          <Col id="resume">
            <Resume />
          </Col>
        </Row>
        <Row>
          <Col id="contact">
            <Contact />
          </Col>
        </Row>
      </Container>
    </>
  );
}
