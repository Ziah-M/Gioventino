import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemedContainer } from "../../Themes/DarkTheme";
import HeadingSection from "./HeadingSection";
import ImageSection from "./ImageSection";
import BioSection from "./BioSection";

const TeamBio = () => {
  return (
    <ThemedContainer>
      <Container fluid>
        <Row>
          <HeadingSection />
        </Row>

        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col xs={6} className="d-flex justify-content-center">
            <ImageSection />
          </Col>

          <Col xs={6} className="d-flex justify-content-center">
            <BioSection />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default TeamBio;
