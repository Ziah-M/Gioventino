import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { EventsCard } from "../../Components/Card";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/ImgTheme";

const Events = () => {
  return (
    <ThemedContainer bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
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
            <Heading
              topHeading="Our exciting"
              bottomHeading="Upcoming events"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="d-flex justify-content-center">
            <EventsCard />
          </Col>
          <Col xs={6} className="d-flex justify-content-center">
            <EventsCard />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default Events;
