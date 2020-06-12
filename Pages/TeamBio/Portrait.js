import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Portrait = ({ image = DEFAULT_IMAGE }) => (
  <Container fluid>
    <Row noGutters>
      <Col xs={12} className="d-flex justify-content-center">
        <PortraitImage src={image} />
      </Col>
    </Row>
  </Container>
);

const PortraitImage = styled.img`
  height: 45vw;
  width: 30vw;
  margin-top: 3vw;
`;

export default Portrait;
