import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";


const bgColor = "#deb150";
const bgColorUpper = "#202127";
const bgColorHover = "#18191E";
const borderColor = "#4C4C51";

const AboutCard = ({ text = "PLACEHOLDER", children }) => {
  return (
    <StyledCard>
      <StyledCardBodyUpper>
        <StyledCardIcon>{children}</StyledCardIcon>
      </StyledCardBodyUpper>
      <StyledCardBodyLower>
        <StyledText><b>{text}</b></StyledText>
      </StyledCardBodyLower>
      <StyledBorder />
    </StyledCard>
  );
};

// THIS ELEMENT IS PURELY STYLISTIC
const StyledBorder = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;
  height: 92%;
  width: 92%;
  border: 2px solid ${borderColor};
  pointer-events: none;
`;

const StyledCardIcon = styled(Card.Text)`
font-size:2.0em;
text-align:center;
`;

// BOOTSTRAP STYLES
const StyledCard = styled(Card)`
  min-width: 150px;
  min-height: 200px;
  width:180px;
  height:180px;
  position: relative;
  border: none !important;
`;

const StyledCardBodyUpper = styled(Card.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${bgColorUpper};
  color: white;
`;

const StyledCardBodyLower = styled(Card.Body)`
  display: flex;
  max-height:40%;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: ${bgColor};

  &:hover {
    background-color: ${bgColorHover};
    color: ${bgColor};
  }
`;

const StyledText = styled(Card.Text)`
font-size:1.0em;
text-align:center;
text-transform:uppercase;
`;

export default AboutCard;
