import React from "react";
import { Card, Col as UnstyledCol, Row as UnstyledRow } from "react-bootstrap";
import styled from "styled-components";
import Button from "../Buttons/StyledButton";
import { Link as UnstyledLink } from "react-scroll";

const bgColor = "rgb(32,33,39)";

const SpecialCard = (props) => {
  const {
    title = "ITALIAN PIZZA",
    text = "The Chef's delicious Italian Pizza made with the finest ingredients imported directly from Italy.",
    oldPrice = "$40",
    newPrice = "$20",
    discount = "20%",
  } = props;
  return (
    <StyledCard>
      <StyledCardBody>
        <Row>
          <Title>{title}</Title>
        </Row>
        <Row>
          <Col xs={12}>
            <Discount>
              <b>{discount} OFF</b>
            </Discount>
          </Col>
          <Col>
            <OldPrice>{oldPrice}</OldPrice>
            <DiscountPrice>{newPrice}</DiscountPrice>
          </Col>
        </Row>
        <Row>
          <StyledText>{text}</StyledText>
        </Row>
        <Row>
        <Link to="spy-reservation" smooth duration={1000}>
          <Button>
            <b>ORDER NOW -></b>
          </Button>
          </Link>
        </Row>
        <VectorArt src="https://cdn.pixabay.com/photo/2012/04/13/10/52/pizza-31799_960_720.png" />
      </StyledCardBody>
    </StyledCard>
  );
};

// BOOTSTRAP STYLES

const VectorArt = styled.img`
  position: absolute;
  opacity: 0.3;
  left: 7%;
  bottom: 7%;
  width: 75px;
  height: 75px;
`;

const Col = styled(UnstyledCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled(UnstyledRow)`
  margin: 20px;
`;

const StyledText = styled(Card.Text)`
  color: #a19fa0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin: 0 20px;
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

const Discount = styled.div`
  color: black;
  background: ${(props) => props.theme.primaryAccent};
  height: 30px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Card.Title)`
  color: white;
  text-transform: uppercase;
  margin: 20px 0px;
  font-size: 2em;
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  float: left;
  color: #919191;
  font-size: 30px;
  font-weight: 400;
  padding: 10px 0 20px 0;
  margin: 0 15px 0 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const DiscountPrice = styled.div`
  float: right;
  color: ${(props) => props.theme.primaryAccent};
  font-size: 30px;
  font-weight: 400;
  padding: 10px 0 20px 0;
  margin: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const Link = styled(UnstyledLink)``;

export default SpecialCard;
