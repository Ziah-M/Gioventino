import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/ImgTheme";

import Button from "../../Components/Buttons/StyledButton";
import { Container, Row, Col } from "react-bootstrap";

const Landing = () => {
  return (
    <ThemedContainer bgImg="https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
      <Content />
    </ThemedContainer>
  );
};

const Content = ({
  topHeading = "Welcome to",
  middleHeading = "TASTE",
  bottomHeading = "Sydney's best Pizza"
}) => {
  return (
    <Wrapper>
      <Row>
        <Col xs={12}>
          <Heading>{topHeading}</Heading>
        </Col>
        <Col xs={12}>
          <BrandName>{middleHeading}</BrandName>
        </Col>
        <Col xs={12}>
          <Tagline>{bottomHeading}</Tagline>
        </Col>
        <Col
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px"
          }}
        >
          <StyledButton>BOOK TABLE -></StyledButton>
          <StyledButton>VIEW MENU -></StyledButton>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//TODO
const PageDivide = styled.div`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  font-weight: normal;
  display: block;
  margin: 0 0 5px 0;
`;

//TODO
const Tagline = styled.h3`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  color: #ffffff;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
  font-weight: normal;
  position: relative;
  display: block;
  font-family: "Montserrat", sans-serif;
  margin: 0 0 0 0;
`;

const Heading = styled.h2`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  font-family: "Allura", cursive;
  font-size: 60px;
  font-weight: normal;
  line-height: 1;
  color: ${props => props.theme.primaryAccent};
  margin: 0 0 0 0;
  padding: 0;
`;

const BrandName = styled.h1`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  color: #ffffff;
  font-size: 70px;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  display: block;
  font-family: "Montserrat", sans-serif;
  margin: 1% 0 2% 0;
`;

const StyledButton = styled(Button)`
  margin: 20% 1%;
`;

export default Landing;
