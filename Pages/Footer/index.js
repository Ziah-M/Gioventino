import React from "react";
import styled from "styled-components";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/ImgTheme";
import {
  Container,
  Row as UnstyledRow,
  Col,
  InputGroup as UnstyledInputGroup,
  FormControl
} from "react-bootstrap";
import SocialButtons from "../../Components/SocialButtons";

const Footer = () => {
  return (
    <ThemedContainer
      height="75vh"
      bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <UnstyledRow
        style={{
          height: "75vh",
          padding: "15vh 0"
        }}
      >
        <Col
          xs={12}
          className="d-flex flex-column justify-content-between align-items-center"
        >
          <Row>
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center"
            >
              <Heading
                topHeading="Be the first to know"
                bottomHeading="Subscribe"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <Text>
                Subscribe to our Newsletter to
                <br />
                get exciting offers and be the first to hear about upcoming
                events
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <InputGroup>
                <Control placeholder="Email" />
                <InputGroup.Prepend>
                  <InputIcon>@</InputIcon>
                </InputGroup.Prepend>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <SocialButtons />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <Copywrite>&copy; 2020 All Rights Reserved</Copywrite>
            </Col>
          </Row>
        </Col>
      </UnstyledRow>
    </ThemedContainer>
  );
};

const InputGroup = styled(UnstyledInputGroup)`
  border: 1px solid white;
  width: 50vw;
  max-width: 500px;
`;

const Control = styled(FormControl)`
  color: black;
  background: transparent;
`;

const InputIcon = styled(InputGroup.Text)`
  color: black;
  background-color: #deb150;
`;

const Row = styled(UnstyledRow)``;

const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.darkText};
`;

const Copywrite = styled.p`
  color: white;
`;

export default Footer;
