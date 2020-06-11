import React from "react";
import { Card } from "react-bootstrap";
import styled, { css } from "styled-components";
import { ButtonAlt as Button } from "../Buttons/StyledButton";

const bgColor = "#deb150";

// NOTE --- USING OUTLINE IN THIS ONE
// FOR THE BORDER IN THE DATE OVERLAY
// INSTEAD OF A BORDER COMPONENT
// OR AN <INNER> COMPONENT

const EventsCard = props => {
  const {
    imageUrl = "https://images.pexels.com/photos/16408/pexels-photo.jpg?cs=srgb&dl=bar-drinks-party-champagne-16408.jpg&fm=jpg",
    title = "WINE TASTING",
    text = "Lorem ipsum placeholder text",
    price = "April 9"
  } = props;
  return (
    <StyledCard>
      <StyledCardImg src={imageUrl} />
      <StyledCardBody>
        <DateOverlay>
          <DateSpan>
            <b>{price}</b>
          </DateSpan>
        </DateOverlay>
        <StyledSubtitle>{title}</StyledSubtitle>
        <StyledText>{text}</StyledText>
        <Button>
          <b>BOOK TICKET -></b>
        </Button>
      </StyledCardBody>
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
  border: 2px solid #303035;
`;

// BOOTSTRAP STYLES
const StyledCard = styled(Card)`
  background-color: ${bgColor};
  position: relative;
`;

const StyledCardBody = styled(Card.Body)`
  display: grid;
  position: relative;
  z-index: 1;
  justify-items: center;

  /* To prevent overflowing the border */
  padding: 10%; 
`;

const StyledCardImg = styled(Card.Img)`
  width: 100%;
  height: 60%;
`;

const StyledSubtitle = styled(Card.Subtitle)`
  text-align: center;
  margin-top: 2%;
  text-transform: uppercase;
  color: black;
`;

const StyledText = styled(Card.Text)`
  color: black;
`;

const DateOverlay = styled.div`
  position: absolute;
  color: white;
  background-color: ${props => props.theme.primaryAccent};
  width: 30%;
  height: 20%;
  text-align: center;
  top: -30%;
  display: grid;
  justify-items: center;
  align-content: center;
`;

const DateSpan = styled.div`
  outline: 1px solid black;
  color: black;
  padding: 5px;
  font-size: 0.5em;
`;

export default EventsCard;
