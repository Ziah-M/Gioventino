import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

//TODO --- Find a better flourish for under header

const H2 = styled.h2`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  font-family: "Allura", cursive;
  font-size: 45px;
  font-weight: normal;
  line-height: 1;
  color: ${props => props.theme.primaryAccent};
  margin: 0;
  padding: 0;
`;

const H1 = styled.h1`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  color: #ffffff;
  font-size: 50px;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  display: block;
  font-family: "Montserrat", sans-serif;
  margin: 0;
`;
const Heading = ({ topHeading = "", bottomHeading = "" }) => {
  return (
    <StyledContainer fluid>
      <H2>{topHeading}</H2>
      <H1>{bottomHeading}</H1>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin: 0px 0px 0px 0px;
`;

export default Heading;
