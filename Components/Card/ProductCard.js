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

        <InnerContainer fluid>
          <Row noGutters>
            <ColCentered xs={12}>
              <StyledSubtitle>
                {title}
                <br />
                ~~~~~~~
              </StyledSubtitle>
            </ColCentered>
          </Row>

          <Row>
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
          </Row>

          <Row>
            <ColCentered xs={12}>
              <StyledButton>
                <b>ORDER NOW -></b>
              </StyledButton>
            </ColCentered>
          </Row>
        </InnerContainer>
      </StyledCardBody>
      <StyledBorder />
    </StyledCard>
  );
};

const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  height: 100%;
`;

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
  display: flex;
  justify-content: center;
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
  font-size: 70%;
  width: 120px;
  min-width: 60%;
  min-height: 45px;

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
  min-width: 50px;
  width: 10%;
  height: 5%;
  min-height: 25px;
  text-align: center;
  top: -6%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;

export default ProductCard;
