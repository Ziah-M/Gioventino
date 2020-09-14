import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { SpecialCard } from "../../Components/Card";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/ImgTheme";

const Offer = () => {
  return (
    <ThemedContainer bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <Wrapper id="offer">
        <Heading
          topHeading="Todays special offer"
          bottomHeading="Chef Special"
        />
        <Row style={{display:'flex', flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
          <Col style={{ padding: "0", height:'100%' }} className="d-none d-sm-block">
            <Img src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          </Col>
          <Col
            className="d-flex align-items-center"
            sm={8}
            md={6}
            lg={5}
            xl={4}
          >
            <SpecialCard />
          </Col>
          <Col style={{ padding: "0" }} className="d-none d-lg-block">
            <Img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </Col>
        </Row>
      </Wrapper>
    </ThemedContainer>
  );
};

const Img = styled(Image)`
  max-width: 100%;
  min-width: 100% !important;
  width:auto;
  height:auto;
  padding: 0 !important;
  margin: 0 !important;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  padding:5vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export default Offer;
