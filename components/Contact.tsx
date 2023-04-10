import React, { useState } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

const Contact = () => {
  //
  return (
    <>
      <Head>
        <title>Contact Me</title>
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
      <Container
        fluid
        style={{
          paddingTop: "100px",
          backgroundColor: "#EE6C4D",
          paddingBottom: "40px",
        }}
      >
        <Row styleName="d-flex text-center">
          <Col styleName="d-flex text-center">
            <h1>Contact me</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginLeft: "25%" }}>
            <a href="https://www.linkedin.com/in/jeff-hoyt/" target="_blank">
              <img
                src="https://i.imgur.com/4rGthXG.png"
                alt="linkedin link"
                style={{ height: "100px", cursor: "pointer" }}
                className="hoverEffect"
              />
            </a>
          </Col>
          <Col>
            <a href="mailto:jeffjhoyt@gmail.com">
              <img
                src="https://i.imgur.com/MiOwWEL.png"
                alt="email link"
                style={{ height: "100px" }}
                className="hoverEffect"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
