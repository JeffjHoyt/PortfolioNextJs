import React from "react";
import { Container, Row, Col, Nav, Navbar, Card } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import data from "./ProjectList.json";

const Projects = () => {
  const projectData = data.projects;
  const projectsList = Object.keys(projectData).map((project) => {
    const projectValue = projectData[project];

    return (
      <Card
        as="a"
        className="hoverEffect"
        key={projectValue.id}
        onClick={() => window.open(projectValue.src, "_blank")}
        style={{
          paddingTop: "0",
          minWidth: "330px",
          overflowX: "hidden",
          overflowY: "hidden",
          backgroundColor: "white",
          maxWidth: "400px",
          cursor: "pointer",
          borderRadius: "10px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Card.Img
          variant="top"
          src={projectValue.image}
          alt={projectValue.alt}
          style={{
            marginTop: "0",
            overflow: "hidden",
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
            paddingTop: "0px",
          }}
        ></Card.Img>
        <Card.Body style={{ backgroundColor: "white" }}>
          <Card.Title style={{ backgroundColor: "white", color: "black" }}>
            {projectValue.name}
          </Card.Title>
          {console.log(projectValue.description)}
          <Card.Text style={{ backgroundColor: "white", color: "black" }}>
            {projectValue.description}
            <br></br>
            <br></br>
            <p style={{ fontWeight: "bold" }}>
              <span style={{ fontSize: "22px" }}>Tools: </span>
              {projectValue.tools}
            </p>
          </Card.Text>
          <Card.Link
            style={{ backgroundColor: "white" }}
            href={projectValue.src}
          >
            View Project
          </Card.Link>
        </Card.Body>
      </Card>
    );
  });
  return (
    <>
      <Head>
        <title>Projects</title>
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
        styleName="projects"
        id="projects"
        style={{
          backgroundColor: "#3E92CC",
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
      >
        <Row>
          <Col
            className="text-center"
            style={{ color: "black", paddingBottom: "5vh" }}
          >
            <div>
              <h1>Projects</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row
              style={{ gap: "50px", marginTop: "20px", marginBottom: "20px" }}
              className="justify-content-center"
            >
              {projectsList}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
