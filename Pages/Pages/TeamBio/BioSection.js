import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import SocialButtons from "../../Components/SocialButtons";

const BioSection = ({ chef }) => {
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
          <b>{chef.overview}</b>
        </TextOneCol>
      </Row>
      <Row>
        <TextTwoCol xs={12}>{chef.bio}</TextTwoCol>
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
