import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";

const BioSection = () => {
  return (
    <Container fluid>
      <Row>
        <HeadingCol xs={12}>
          <h1>John Dough</h1>
        </HeadingCol>
      </Row>
      <Row>
        <SubheadingCol xs={12}>
          <h2>Head Chef</h2>
        </SubheadingCol>
      </Row>
      <Row>
        <TextOneCol xs={12}>
          <b>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, temporibus! Minus repudiandae facere id iure?
          </b>
        </TextOneCol>
      </Row>
      <Row>
        <TextTwoCol xs={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          harum consequatur magnam, aut eum pariatur voluptatum unde suscipit
          est, sequi quibusdam similique sed perferendis aperiam, ipsam itaque.
          Quaerat rerum voluptatum eum adipisci voluptatem corporis cum, impedit
          architecto debitis illum magni!
        </TextTwoCol>
      </Row>
      <Row>
        <SocialCol xs={12}>TODO: Social Buttons</SocialCol>
      </Row>
    </Container>
  );
};

const HeadingCol = styled(Col)`
  margin: 20px 0 10px 0;
  text-align: center;
`;

const SubheadingCol = styled(Col)`
  margin: 0 0;
  text-align: center;
`;

const SocialCol = styled(Col)`
  margin: 15px 0;
  text-align: center;
`;

const TextOneCol = styled(Col)`
  margin: 15px 0;
  text-align: center;
`;

const TextTwoCol = styled(Col)`
  margin: 15px 0;
  text-align: center;
`;

export default BioSection;
