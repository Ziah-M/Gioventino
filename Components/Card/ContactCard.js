import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../Heading";

const bgColor = "rgb(32,33,39)";

// TODO --- Can add props for each of the contact info details
// including an array of opening hours (map to new line for each)

const ContactCard = (props) => {
  const {
    text = "The Chef's delicious Italian Pizza made with the finest ingredients imported directly from Italy.",
  } = props;
  return (
    <StyledCard>
      <StyledCardBody>
        <Row>
          <Col>
            <Heading topHeading="Details" bottomHeading="Contact Us" />
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledSubheading>Opening Hours</StyledSubheading>
            <StyledTextRow>
              <StyledText>Mon - Thu --- 10.00am to 10.00pm</StyledText>
            </StyledTextRow>
            <StyledTextRow>
              <StyledText>Fri - Sat --- 8am to 12pm</StyledText>
            </StyledTextRow>

            <StyledSubheading>Contact Info</StyledSubheading>
            <StyledTextRow>
              <StyledText>127 Fake Drive, Sydney, 2000</StyledText>
            </StyledTextRow>
            <StyledTextRow>
              <StyledText>02 9000 0000</StyledText>
            </StyledTextRow>
            <StyledTextRow>
              <StyledText>support@TasteRestaurants.com</StyledText>
            </StyledTextRow>
          </Col>
        </Row>
      </StyledCardBody>
    </StyledCard>
  );
};

// BOOTSTRAP STYLES
const StyledText = styled(Card.Text)`
  color: #a19fa0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin: 0 20px;
`;

const StyledTextRow = styled(Row)`
  border-bottom: 3px dotted dimgray;
  margin: 10px 0;
`;

const StyledSubheading = styled(Card.Subtitle)`
  color: ${(props) => props.theme.primaryAccent};
  text-transform: uppercase;
  margin: 20px 0;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #18191e;
`;

export default ContactCard;
