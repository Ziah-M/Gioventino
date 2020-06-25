import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import TeamBioSlider from "../../Components/Slider/TeamSlider";

const Slider = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={6} className="d-flex justify-content-center">
          <TeamBioSlider />
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
