import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CateringCard } from "../../Components/Card";
import { ThemedContainer } from "../../Themes/ImgTheme";

// TODO --- HEADING GOES INSIDE THE CATERING CARD

const Catering = () => {
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
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <CateringCard />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default Catering;
