import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CateringCard } from "../../Components/Card";
import CateringSlider from "../../Components/Slider/CateringSlider";

// TODO --- HEADING GOES INSIDE THE CATERING CARD

const Catering = () => {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", position: "relative" }}
        >
          <CateringSlider />
          <Col lg={6} md={8} sm={10} xs={11}>
            <CateringCard />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Catering;
