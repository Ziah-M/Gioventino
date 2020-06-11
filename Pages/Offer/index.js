import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { SpecialCard } from "../../Components/Card";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/ImgTheme";

// TODO Decide if I want it to stretch the whole column or position it in the middle

const Offer = () => {
  return (
    <ThemedContainer bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Heading
              topHeading="Todays special offer"
              bottomHeading="Chef Special"
            />
          </Col>
        </Row>
        <Row>
          <Col style={{padding:'0'}} md={4} className="d-none d-md-block">
            <Img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          </Col>
          <Col className="d-flex align-items-center" sm={12} md={4}>
            <SpecialCard />
          </Col>
          <Col style={{padding:'0'}} md={4} className="d-none d-md-block">
            <Img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

const Img = styled(Image)`
  max-width: 100%;
  min-width:100% !important;
  height: 65vh;
  padding:0 !important;
  margin:0 !important;
`;

export default Offer;
