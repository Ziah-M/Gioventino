import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/ImgTheme";
import Heading from "../../Components/Heading";
import { TestimonialCard } from "../../Components/Card";
import { Container, Row, Col } from "react-bootstrap";

const Testimonials = () => {
  return (
    <ThemedContainer bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <Container fluid style={{ height:'100vh', display:'grid', alignItems:'center', justifyItems:'center' }}>
        <Container fluid>
        <Row>
          <Col xs={12}>
          <Heading
        topHeading="What our customers have said"
        bottomHeading="Testimonials"
      />
          </Col>
        </Row>

        <Row>
          <Col xs={6} className="d-flex justify-content-center">
            <TestimonialCard />
          </Col>
          <Col xs={6} className="d-flex justify-content-center">
            <TestimonialCard />
          </Col>
        </Row>
        </Container>
      </Container>
    </ThemedContainer>
  );
};

export default Testimonials;
