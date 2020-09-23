import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamBioSlider from "../../Components/Slider/TeamSlider";

const Slider = ({ setSelectedChef = (f) => f }) => {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col xs={6} className="d-flex justify-content-center">
          <TeamBioSlider setSelectedChef={setSelectedChef} />
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
