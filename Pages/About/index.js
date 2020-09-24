import {
  faCheck,
  faMotorcycle,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { AboutCard } from "../../Components/Card";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/DarkTheme";

//TODO - media query to hide right column (with image) on small screens

const TEXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries simply dummy text of the printing standard dummy text eve and typesetting`;
const SUBTITLE = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has.
`;

const sideImage =
  "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const About = () => {
  return (
    <ThemedContainer>
      <Wrapper id="about">
        <Row noGutters>
          <Col
            md={8}
            lg={7}
            sm={12}
            style={{
              overflow: "hidden",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              maxWidth: "100%",
              width: "100%",
              padding: 0,
              margin: 0,
            }}
          >
            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                <Heading
                  topHeading="Our story"
                  bottomHeading="About Gioventino's"
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                <SubHeading>{SUBTITLE}</SubHeading>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                <P>{TEXT}</P>
              </Col>
            </Row>

            <Row noGutters>
              <CardsContainer>
                <AboutCard text="Free Delivery">
                  <FontAwesomeIcon icon={faMotorcycle} />
                </AboutCard>
                <AboutCard text="Covid Safe">
                  <FontAwesomeIcon icon={faCheck} />
                </AboutCard>
                <AboutCard text="Fresh Ingredients" className="d-sm-hide">
                  <FontAwesomeIcon icon={faPizzaSlice} />
                </AboutCard>
              </CardsContainer>
            </Row>
          </Col>
          <Col className="d-none d-md-block p-0" md={4} lg={5}>
            <Img src={sideImage} />
          </Col>
        </Row>
      </Wrapper>
    </ThemedContainer>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: auto;
  @media (max-width: 450px) {
    transform: scale(0.9);
  }
`;

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const SubHeading = styled.h2`
  text-align: center;
  user-select: none;
  color: ${(props) => props.theme.primaryAccent};
  margin: 20px;
`;

const P = styled.p`
  text-align: center;
  user-select: none;
  margin: 20px 20px;
  color: ${(props) => props.theme.textDark};
`;

export default About;
