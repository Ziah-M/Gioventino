import React from "react";
import styled from "styled-components";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/ImgTheme";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <ThemedContainer height='75vh' bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <Container fluid style={{ paddingTop:'100px' }}>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Heading
              topHeading="Be the first to know"
              bottomHeading="Subscribe"
            />
          </Col>
        </Row>
        <Row>
        <Col xs={12} className="d-flex justify-content-center">
            <Text>
              Subscribe to our Newsletter to
              <br />
              get exciting offers and be the first to hear about upcoming events
            </Text>
          </Col>
        </Row>
        <Row>
        <Col xs={12} className="d-flex justify-content-center">
            <input type="text" />
          </Col>
        </Row>
        <Row>
        <Col xs={12} className="d-flex justify-content-center">
            <SocialButtons />
          </Col>
        </Row>
        <Row>
        <Col xs={12} className="d-flex justify-content-center">
            <Copywrite />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

const Text=styled.p`
text-align:center;
color:${props => props.theme.darkText};
`

const SocialButtons = () => {
  return <div>Social Buttons here</div>;
};

const Copywrite = () => {
  return <p>(C). 2020. All Rights Reserved.</p>;
};

export default Footer;
