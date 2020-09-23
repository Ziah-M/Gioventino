import React from "react";
import { Card } from "react-bootstrap";
import { Link as UnstyledLink } from "react-scroll";
import styled from "styled-components";
import Button from "../Buttons/StyledButton";
import Heading from "../Heading";

const TEXT = `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur maiores dolorum earum ipsa eveniet ipsam voluptate mollitia architecto. Eveniet, laborum.
`;

const TestimonialCard = ({ text = TEXT }) => {
  return (
    <Wrapper>
      <Outer>
        <Inner>
          <Heading topHeading="Your big day" bottomHeading="Catering Service" />

          <StyledText>{text}</StyledText>
          <Link to="spy-reservation" smooth duration={500}>
            <Button>
              <b>ORDER NOW -></b>
            </Button>
          </Link>
        </Inner>
      </Outer>
    </Wrapper>
  );
};

const StyledText = styled(Card.Text)`
  color: #a19fa0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin: 0 20px;
`;

const Wrapper = styled.div`
  width: 320px;
  height: 500px;
`;

const Outer = styled.div`
  width: inherit;
  height: inherit;
  background-color: #202127;
  box-shadow: 0px 2px 48px 9px rgba(0, 0, 0, 0.43);
`;

const Inner = styled.div`
  width: inherit;
  height: inherit;
  transform: scale(0.9);
  background-color: #18191e;
  border: 2px solid #33343c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Link = styled(UnstyledLink)``;

export default TestimonialCard;
