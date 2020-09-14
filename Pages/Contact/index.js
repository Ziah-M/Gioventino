import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ContactCard from "../../Components/Card/ContactCard";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Map from "./Map";

const Contact = () => {
  return (
    <ThemedContainer>
      <Container
        id="contact"
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Row style={{ height: "100%", width: "100vw" }}>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <InnerContainer fluid>
              <Row>
                <Col xs={12} sm={9} md={6}>
                  <ContactCard />
                </Col>
                <Col className="d-none d-md-block">
                  <Map />
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
  padding: 20px;
`;

export default Contact;
