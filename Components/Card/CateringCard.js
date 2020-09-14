import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import Heading from "../Heading";
import Button from "../Buttons/StyledButton";

const bgColor = "rgb(32,33,39)";

const CateringCard = (props) => {
  const {
    text = "The Chef's delicious Italian Pizza made with the finest ingredients imported directly from Italy.",
  } = props;
  return (
    <StyledCard>
      <StyledCardBody>
        <Row style={{margin:'20px 0px'}}>
          <Col>
            <Heading
              topHeading="Your big day"
              bottomHeading="Catering Service"
            />
          </Col>
        </Row>
        <Row style={{margin:'20px 0px'}}>
          <Col>
            <StyledText>{text}</StyledText>
          </Col>
        </Row>
        <Row style={{margin:'20px 0px'}}>
          <Col>
            <Button>
              <b>ORDER NOW -></b>
            </Button>
          </Col>
        </Row>
      </StyledCardBody>
    </StyledCard>
  );
};

// BOOTSTRAP STYLES
const StyledContainer = styled(Container)``;

const StyledText = styled(Card.Text)`
  color: #a19fa0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin: 0 20px;
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
  flex-direction:column;
  justify-content: center;
  align-items:center;
  background-color: #18191e;
`;



export default CateringCard;
