import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemedContainer } from "../../Themes/DarkTheme";
import HeadingSection from "./HeadingSection";
import Slider from "./Slider";
import BioSection from "./BioSection";
import Portrait from "./Portrait";

const TeamBio = () => {
  return (
    <ThemedContainer>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <Row>
          <HeadingSection />
        </Row>

        <Row className="d-flex justify-content-center mt-3">
          <Col xs={12}>
            <Slider />
          </Col>
        </Row>

        <Row
          noGutters
          className="d-flex justify-content-center align-items-center"
        >
          <Col
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Portrait />
          </Col>
          <Col xs={6} className="d-flex flex-column justify-content-center">
            <BioSection />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default TeamBio;
