import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemedContainer } from "../../Themes/DarkTheme";
import HeadingSection from "./HeadingSection";
import Slider from "./Slider";
import BioSection from "./BioSection";
import Portrait from "./Portrait";
import {getChefs} from '../../Data'

const TeamBio = () => {
  const [chef, setChef] = useState(getChefs()[0])
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
          <HeadingSection />
        </Row>

        <Row className="d-flex justify-content-center mt-3">
          <Col xs={12}>
            <Slider setSelectedChef={setChef}/>
          </Col>
        </Row>

        <Row
          noGutters
          className="d-flex justify-content-center align-items-center"
        >
          <Col
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Portrait image={chef.imgUrl}/>
          </Col>
          <Col xs={6} className="d-flex flex-column justify-content-center">
            <BioSection chef={chef}/>
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default TeamBio;
