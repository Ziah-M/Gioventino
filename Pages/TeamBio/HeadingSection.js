import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../../Components/Heading";

const HeadingSection = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <Heading topHeading="Meet the team" bottomHeading="Expert Chefs" />
    </Container>
  );
};

export default HeadingSection;
