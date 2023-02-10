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
      <Row
        style={{
          gap: "20px",
          width: "100vw",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        }}
      >
        <Col
          style={{
            gap: "20px",
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          }}
        >
          <About />
        </Col>
      </Row>
    </>
  );
};

export default about;
