import React from "react";
import styled, { css } from "styled-components";
import Button from "../Buttons/StyledButton";
import { Row, Col, Container, Card } from "react-bootstrap";

const ProductCard = props => {
  const { imageUrl, title = "ITALIAN PIZZA", text, price } = props;
  return (
    <StyledCard>
      <StyledCardImg src={imageUrl} />
      <StyledCardBody>
        <PriceOverlay>
          <b>{price}</b>
        </PriceOverlay>

        <Row>
          <ColCentered xs={12}>
            <StyledSubtitle>
              {title}
              <br />
              ~~~~~~~
            </StyledSubtitle>
          </ColCentered>

          <ColCentered xs={12}>
            <StyledText>
              <Row noGutters>
                <Col xs={12} style={{ textAlign: "center" }}>
                  {text
                    .split(",")
                    .map((word, index) =>
                      index === 0 || index === 1 ? word + "," : null
                    )}
                </Col>
              </Row>
              <Row noGutters>
                <Col xs={12} style={{ textAlign: "center" }}>
                  {text
                    .split(",")
                    .map((word, index) =>
                      index === 2 || index === 3 ? word + "," : null
                    )}
                </Col>
              </Row>
              <Row noGutters>
                <Col xs={12} style={{ textAlign: "center" }}>
                  {text
                    .split(",")
                    .map((word, index) =>
                      index === 4 || index === 5 ? word + "," : null
                    )}
                </Col>
              </Row>
              <Row noGutters>
                <Col xs={12} style={{ textAlign: "center" }}>
                  {text
                    .split(",")
                    .map((word, index) =>
                      index === 6 || index === 7 ? word + "," : null
                    )}
                </Col>
              </Row>
            </StyledText>
          </ColCentered>

          <ColCentered xs={12}>
            <StyledButton>
              <b>ORDER NOW -></b>
            </StyledButton>
          </ColCentered>
        </Row>
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

const ColCentered = styled(Col)`
  display: grid;
  justify-items: center;
`;

// BOOTSTRAP STYLES
const StyledCard = styled(Card)`
  background-color: ${props => props.theme.primaryAccent};
  border: none !important;
  width: 30vw;
`;

const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const StyledCardImg = styled(Card.Img)`
  width: 30vw;
  height: 25vw;
`;

const StyledSubtitle = styled(Card.Subtitle)`
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-size: 125%;
`;

const StyledText = styled(Card.Text)`
  color: black;
  padding: 5%;
  font-size: 100%;
  text-align: center;
`;

const StyledButton = styled(Button)`
  border: 2px solid black;
  color: black;
  padding: 2% 4%;
  margin: 0 0 5% 0;
  font-size: 80%;

  &:hover {
    color: white !important;
    background-color: black;
    border: 2px solid black !important;
    ${css`
      transition: 400ms ease-in-out background;
      transition: 400ms ease color;
    `}
  }
`;

const PriceOverlay = styled.div`
  position: absolute;
  color: white;
  background-color: black;
  min-width: 35px;
  width: 5%;
  height: 5%;
  min-height: 25px;
  text-align: center;
  top: -9%;
`;

export default ProductCard;
