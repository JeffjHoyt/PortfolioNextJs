import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { Inter } from "@next/font/google";
import Script from "next/script";
import Head from "next/head";
import About from "../components/About";

const about = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ gap: "20px" }}>
            <About />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default about;
