import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormControl, InputGroup as UnstyledInputGroup } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../../Components/Heading";
import SocialButtons from "../../Components/SocialButtons";
import { ThemedContainer } from "../../Themes/ImgTheme";

const Footer = () => {
  return (
    <ThemedContainer
      height="75vh"
      bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <Wrapper>
        <Heading topHeading="Be the first to know" bottomHeading="Subscribe" />
        <Text>
          Subscribe to our Newsletter to
          <br />
          get exciting offers and be the first to hear about upcoming events
        </Text>
        <InputGroup>
          <Control placeholder="Email" />
          <InputGroup.Prepend>
            <InputIcon>
              <FontAwesomeIcon icon={faLocationArrow} />
            </InputIcon>
          </InputGroup.Prepend>
        </InputGroup>
        <SocialButtonsGroup>
          <SocialButtons />
        </SocialButtonsGroup>
        <Copywrite>&copy; 2020 All Rights Reserved</Copywrite>
      </Wrapper>
    </ThemedContainer>
  );
};

const InputGroup = styled(UnstyledInputGroup)`
  border: 1px solid #a8a8a8 !important;
  outline: none !important;
  width: 50vw;
  max-width: 500px;
  margin: 20px 0;
`;

const Control = styled(FormControl)`
  color: #a8a8a8 !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  &::placeholder {
    color: #a8a8a8 !important;
  }
`;

const InputIcon = styled(InputGroup.Text)`
  color: black;
  background-color: #deb150;
  border: none !important;

  &:hover {
    color: #deb150;
    background-color: black;
  }
`;

const Text = styled.p`
  margin: 20px 0;
  text-align: center;
  max-width: 75vw;
  height: auto;
  color: ${(props) => props.theme.darkText};
`;

const Copywrite = styled.p`
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 75vh;
  padding: 10vh 10vw;
`;

const SocialButtonsGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
`;

export default Footer;
