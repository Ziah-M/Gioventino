import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import SocialButtons from "../../Components/SocialButtons";

const BioSection = ({chef}) => {
  return (
    <Container fluid>
      <Row>
        <HeadingCol xs={12}>
          <Name>{chef.name}</Name>
        </HeadingCol>
      </Row>
      <Row>
        <SubheadingCol xs={12}>
          <Position>{chef.position}</Position>
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
        <SocialCol xs={12}>
          <SocialButtons />
        </SocialCol>
      </Row>
    </Container>
  );
};

const Name = styled.h1`
  color: #deb150;
`;

const Position = styled.h3`
  color: #deb150;
`;

const HeadingCol = styled(Col)`
  margin: 0px 0 10px 0;
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
