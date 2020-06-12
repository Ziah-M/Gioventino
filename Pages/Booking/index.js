import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { ButtonDark as Button } from "../../Components/Buttons/StyledButton";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/DarkTheme";

const Booking = () => {
  return (
    <ThemedContainer>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Heading topHeading="Reserve a table" bottomHeading="Reservation" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <OpeningHours>Mon - Sun: 11AM - 10PM</OpeningHours>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <StyledCard>
              <StyledCardBody>
                <StyledInnerContainer>
                  <StyledForm>
                    <Form.Row>
                      <Col xs={12} sm={6} md={4}>
                        <Control placeholder="Name" />
                      </Col>
                      <Col xs={12} sm={6} md={4}>
                        <Control placeholder="Email" />
                      </Col>
                      <Col xs={12} sm={6} md={4}>
                        <Control placeholder="Phone" />
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={12} sm={6} md={4}>
                        <Control placeholder="No. of guests" />
                      </Col>
                      <Col xs={12} sm={6} md={4}>
                        <Control placeholder="YY-MM-DD" />
                      </Col>
                      <Col xs={12} sm={6} md={4}>
                        <Control placeholder="Please select - dropdown" />
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={12} sm={6} md={4}>
                        <Control placeholder="Message" />
                      </Col>
                      <Col xs={12} sm={6} md={4} />
                      <Col xs={12} sm={6} md={4} />
                    </Form.Row>
                    <Form.Row
                      style={{ dispaly: "flex", justifyContent: "center" }}
                    >
                      <Button style={{ margin: "0 0 0 0" }}>
                        BOOK TABLE ->
                      </Button>
                    </Form.Row>
                  </StyledForm>
                </StyledInnerContainer>
              </StyledCardBody>
            </StyledCard>
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

//NOTE !important overwrites bootstrap active classes

const Control = styled(Form.Control)`
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  color: ${props => props.theme.lightText};
  border-bottom: 2px solid ${props => props.theme.lightText} !important;
  margin: 0 5px 5px 0;
`;

const StyledInnerContainer = styled(Container)`
  background: ${props => props.theme.primaryAccent};
`;

const StyledCard = styled(Card)`
  padding: 10px;
  background: ${props => props.theme.primaryAccent};
`;

const StyledCardBody = styled(Card.Body)`
  border: 2px solid ${props => props.theme.darkText};
`;

const StyledForm = styled(Form)`
  background: ${props => props.theme.primaryAccent};
  padding-bottom: 50px;
  border-bottom: 2px solid ${props => props.theme.lightText};
`;

const OpeningHours = styled.div`
  margin-bottom: 40px;
  font-size: 1.2em;
`;

export default Booking;
