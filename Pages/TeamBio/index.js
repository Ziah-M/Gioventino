import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemedContainer } from "../../Themes/DarkTheme";
import HeadingSection from "./HeadingSection";
import ImageSection from "./ImageSection";
import BioSection from "./BioSection";

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

        <Row>
          <Col xs={6} className="d-flex justify-content-center">
            <ImageSection />
          </Col>

          <Col xs={6}>
            <BioSection />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default TeamBio;
