import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
import { getChefs } from "../../Data";
import "./sliderOverride.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
};

const TeamBioSlider = ({ chefs = getChefs(), setSelectedChef = (f) => f }) => {
  const [currentChef, setCurrentChef] = useState(getChefs()[0]);

  const handleClick = (chef) => {
    setCurrentChef(chef);
    setSelectedChef(chef);
  };

  return (
    <>
      <Container fluid className="p-0" style={{ width: "60vw" }}>
        <Slider {...settings}>
          {chefs.map((chef) => (
            <Col className="p-0">
              <ChefPortrait
                src={chef.imgUrl}
                alt="chef portrait"
                onClick={() => handleClick(chef)}
                className={chef.name === currentChef.name && "active"}
              />
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

  &.active {
    outline: 2px solid green;
  }
`;

export default TeamBioSlider;
