import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import "./sliderOverride.css";
import {getChefs} from '../../Data'



const TeamBioSlider = ({ chefs = getChefs(), setSelectedChef=f=>f }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true
  };

  return (
    <>
      <Container fluid className="p-0" style={{ width: "60vw" }}>
        <Slider {...settings}>
          {chefs.map(chef => (
            <Col className="p-0">
              <ChefPortrait src={chef.imgUrl} alt="chef portrait" onClick={() => setSelectedChef(chef)}/>
            </Col>
          ))}
        </Slider>
      </Container>
    </>
  );
};

const ChefPortrait = styled.img`
  width: 20vw;
  height: 20vw;
`;

export default TeamBioSlider;
