import React from "react";
import { Card, Container } from "react-bootstrap";
import styled from "styled-components";

const bgColor = "rgb(32,33,39)";
const TEXT = `
  Taste was the best pizza I've ever eaten!
`;

const DEFAULT_IMAGE =
  "https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg";

const TestimonialCard = props => {
  const {
    name = "John Doe",
    position = "MD, doctor",
    text = TEXT,
    imageUrl = DEFAULT_IMAGE
  } = props;
  return (
    <StyledContainer>
      <StyledCard>
        <StyledCardImg src={imageUrl} />
        <StyledCardBody>
          <StyledText>{text}</StyledText>
          <StyledName>{name}</StyledName>
          <StyledPosition>{position}</StyledPosition>
        </StyledCardBody>
      </StyledCard>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding: 50px;
`;

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
  /* padding plus width of StyledCardBody */
  min-width: 240px;

  /* Styles for positioning IMG on card */
  position: relative;
  background-color: #202127;
  box-shadow: 0px 2px 48px 9px rgba(0, 0, 0, 0.43);
`;

const StyledCardBody = styled(Card.Body)`
  border: 2px solid #33343c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #18191e;
  min-width: 200px;
`;

const StyledCardImg = styled(Card.Img)`
  border-radius: 50%;
  height: 75px;
  width: 75px;

  /* Styles for positioning on card */
  position: absolute;
  top: -37px;
  left: 35%;
`;

export default TestimonialCard;
