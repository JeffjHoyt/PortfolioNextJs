import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";

const Resume = () => {
  return (
    <>
      <Head>
        <title>About Me</title>

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
        className="aboutMe"
        style={{
          paddingTop: "10vh",
          paddingRight: "10px",
          paddingLeft: "10px",
          width: "100% !important",
          backgroundColor: "#FFFFFF",
          color: "black",
          paddingBottom: "20vh",
        }}
      >
        <Row>
          <Col
            className="aboutMeDescription text-center"
            style={{ marginBottom: "20px" }}
          >
            <h1>Technical Skills</h1>
          </Col>
          <Row styleName="d-flex space-evenly" style={{ gap: "10px" }}>
            <Col>
              <img
                src="https://i.imgur.com/dZh40Fq.jpg"
                alt="Adobe xd icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/IwTc6MT.jpg"
                alt="React icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/fjo9SQZ.jpg"
                alt="API and API's icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/xQPDfpc.jpg"
                alt="bootstrap icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/48ZPgH9.jpg"
                alt="css icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/axc620c.jpg"
                alt="github icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/e2aOBGM.jpg"
                alt="git icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/FUHuYfV.jpg"
                alt="html icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/9wXoHCE.jpg"
                alt="javascript icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/AiEVaAN.jpg"
                alt="responsive web design icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
            <Col>
              <img
                src="https://i.imgur.com/ZVwkIy6.jpg"
                alt="sitecore icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              ></img>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col
            className="aboutMeDescription text-center"
            style={{ marginBottom: "20px", marginTop: "100px" }}
          >
            <h1>Experience</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>
              <span style={{ fontWeight: "bold" }}>Web Developer</span> | Blue
              Yonder | 09/2022 - Current
            </h4>
            <ul>
              <li></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>
              <span style={{ fontWeight: "bold" }}>Finance Manager</span> |
              Ourisman Automotive | 11/2017 - 1/2022
            </h4>
            <ul>
              <li>
                Exceeded company goals by 33% by maintaining a $2,000 PVR along
                with company high on customer satisfaction index by maintaining
                a score above 95% from 2017 to 2020
              </li>
              <li>
                Tasked with finalizing deals, organizing customers within a
                database / CRM software, and using problem solving skills to
                ensure clean cash flow for internal stakeholders.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>
              <span style={{ fontWeight: "bold" }}>
                Manager, Web Developer, and Digital Content Creator
              </span>{" "}
              | Ourisman Automotive | 04/2012 - 11/2017
            </h4>
            <ul>
              <li>
                Led my dealership to be the #1 Kia dealership in the region from
                April 2012 to November 2017.
              </li>
              <li>
                Tasked with meeting organizational goals within monthly and
                yearly deadlines along with hiring, training, and mentoring new
                sales consultants.
              </li>
              <li>
                Implemented a sales mentoring program which increased our saless
                from an average of 40 to 100 new car monthly sales.
              </li>
              <li>
                Utilized web analytics to identify inefficiencies within our
                online sales process which led to an increase of our e-commerce
                closing percentage from 8% to 15%.
              </li>
              <li>
                Additionally tasked with creating marketing content (both
                Digital mock-ups and translating designs into usable code) for
                website banners/advertisements as well as for digital marketing
                campaigns
              </li>
              <li>
                Communicated with stakeholders to turn ideas into digital
                marketing content
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>
              <span style={{ fontWeight: "bold" }}>
                Lead E-commerce Consultant
              </span>{" "}
              | Ourisman Automotive | 05/2011 - 04/2012.
            </h4>
            <ul>
              <li>
                Improved online sales by reinforcing the use of technology with
                the use of CRM tools which led to a personal closing rate of 20%
                (exceeding company goals by 100%)
              </li>
              <li>
                Achieved "Salesman of the year" award in my first year on the
                position
              </li>
              <li>
                Tasked with handling a portion of our e-commerce department by
                handling individual customer requests.
              </li>
              <li>
                Incorporated digital media content in email campaigns with
                unique landing pages in order to successfully monitor and
                improve digital content and website conversaion rates.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
