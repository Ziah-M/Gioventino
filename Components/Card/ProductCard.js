import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import styled from "styled-components";
import UnstyledButton from "../Buttons/StyledButton";
import AbstractCard from "./AbstractCard";
import { Link as UnstyledLink } from "react-scroll";

const ProductCard = (props) => {
  const { imageUrl, title = "ITALIAN PIZZA", text, price } = props;
  return (
    <Card className="border-black">
      <StyledCardImg src={imageUrl} />
      <Inner>
        <Price>{price}</Price>
        <ContentWrapper>
          <TextArea>
            <Subtitle>
              {title}
              <br />
              ~~~~~~
            </Subtitle>
            <Text>{text}</Text>
            <Wrap>
          <Link to="spy-reservation" smooth duration={500}>
              <Button>Order Now -></Button>
              </Link>
            </Wrap>
          </TextArea>
        </ContentWrapper>
      </Inner>
    </Card>
  );
};

const Card = styled(AbstractCard)`
  height: 400px;
  width: 225px;
  margin: 30px;
`;

const Inner = styled.div`
  width: 100%;
  height: 55%;
  max-height: 55%;
  background: #deb150;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCardImg = styled.img`
  height: 45%;
  width: 100%;
  object-fit: cover;
`;

const Price = styled.div`
  width: 40px;
  height: 30px;
  font-size: 18px;
  position: absolute;
  background: black;
  opacity: 0.8;
  color: white;
  text-align: center;
  vertical-align: center;

  z-index: 3;

  //center
  top: -15px; // should be half of height
  left: 50%;
  transform: translate(-50%);
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  height: 100%;
  padding: 10% 6%;
`;

const TextArea = styled.div`
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled(BootstrapCard.Subtitle)`
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-size: 125%;
`;

const Text = styled(BootstrapCard.Text)`
  color: black;
  padding: 5%;
  font-size: 14px;
  text-align: center;
`;

const Button = styled(UnstyledButton)`
  border: 2px solid black;
  color: black;
  padding: 2% 4%;
  font-size: 70%;
  width: 120px;
  min-width: 60%;
  min-height: 45px;
  text-transform: uppercase;
  font-weight: 700;

  transition: 400ms ease-in-out background color;

  &:hover {
    color: white !important;
    background-color: black;
    border: 2px solid black !important;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Link = styled(UnstyledLink)``;


export default ProductCard;
