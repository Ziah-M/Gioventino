import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "../../Components/Card/ContactCard";

const Contact = () => {
  return (
    <ThemedContainer>
      <Container fluid style={{ height: "100vh" }}>
        <Row style={{ height: "100%" }}>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <InnerContainer>
              <Row>
                <Col onMouseDown={12} sm={6}>
                  <ContactCard />
                </Col>
                <Col className="d-none d-md-block">
                  Map component will go here
                </Col>
              </Row>
            </InnerContainer>
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

// TODO -- OUTLINE
const InnerContainer = styled(Container)`
  outline: 5px solid rgb(24, 25, 30);
  margin: 10px;
`;

export default Contact;
