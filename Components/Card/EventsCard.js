import React from "react";
import { Card } from "react-bootstrap";
import { Link as UnstyledLink } from "react-scroll";
import styled from "styled-components";
import { ButtonAlt as Button } from "../Buttons/StyledButton";

const bgColor = "#deb150";

// NOTE --- USING OUTLINE IN THIS ONE
// FOR THE BORDER IN THE DATE OVERLAY
// INSTEAD OF A BORDER COMPONENT
// OR AN <INNER> COMPONENT

const EventsCard = (props) => {
  const {
    imageUrl = "https://images.pexels.com/photos/16408/pexels-photo.jpg?cs=srgb&dl=bar-drinks-party-champagne-16408.jpg&fm=jpg",
    title = "WINE TASTING",
    text = "Lorem ipsum placeholder text",
    month = "April",
    date = "9",
  } = props;
  return (
    <StyledCard>
      <ImgWrapper>
        <StyledCardImg src={imageUrl} />
        <Date>
          <Border />
          <b>
            {month}
            <br />
            {date}
          </b>
        </Date>
      </ImgWrapper>
      <Body>
        <StyledCardBody>
          <StyledSubtitle>{title}</StyledSubtitle>
          <StyledText>{text}</StyledText>
          <Link to="spy-reservation" smooth duration={1000}>
            <Button style={{ marginBottom: "20px" }}>
              <b>BOOK TICKET -{`>`}</b>
            </Button>
          </Link>
        </StyledCardBody>
      </Body>
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
  width: 300px;
  height: 400px;
  border: none;

  @media (max-width: 450px) {
    transform: scale(0.8);
  }
`;

const Body = styled.div`
  height: 40%;
  width: 100%;
  padding: 5%;
  position: relative;
`;

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  height: 100%;
`;

const StyledCardImg = styled(Card.Img)`
  width: 100%;
  height: 100%;
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

const ImgWrapper = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
`;

const Date = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  background: #deb150;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Border = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid black;
  z-index: 5;
  transform: scale(0.9);
`;

const Link = styled(UnstyledLink)``;

export default EventsCard;
