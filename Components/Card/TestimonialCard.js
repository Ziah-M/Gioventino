import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const bgColor = "rgb(32,33,39)";
const TEXT = `
  Taste was the best pizza I've ever eaten!
`;

const DEFAULT_IMAGE =
  "https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg";

const TestimonialCard = (props) => {
  const {
    name = "John Doe",
    position = "MD, doctor",
    text = TEXT,
    imageUrl = DEFAULT_IMAGE,
  } = props;
  return (
    <StyledCard>
      <StyledCardBody>
        <StyledCardImg src={imageUrl} />
        <StyledText>{text}</StyledText>
        <StyledName>{name}</StyledName>
        <StyledPosition>{position}</StyledPosition>
      </StyledCardBody>
    </StyledCard>
  );
};

// BOOTSTRAP STYLES
const StyledText = styled(Card.Text)`
  color: #a19fa0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin: 40px 20px 20px 20px;
`;

const StyledName = styled(Card.Subtitle)`
  color: #fcfcfc;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
`;

const StyledPosition = styled(Card.Text)`
  color: white;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #a19fa0;
  font-size: 0.8em;
  margin-bottom: 30px;
`;

const StyledCard = styled(Card)`
  background-color: ${bgColor};
  padding: 20px;

  /* Styles for positioning IMG on card */
  position: relative;
  display: grid;
  justify-items: center;

  background-color: #202127;
  box-shadow: 0px 2px 48px 9px rgba(0, 0, 0, 0.43);
`;

const StyledCardBody = styled(Card.Body)`
  border: 2px solid #33343c;
  display: grid;
  justify-items: center;
  background-color: #18191e;
`;

const StyledCardImg = styled(Card.Img)`
  max-width: 20%;
  border-radius: 50%;

  /* Styles for positioning on card */
  position: absolute;
  top: -13%;
`;

export default TestimonialCard;
