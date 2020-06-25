import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";

const DEFAULT_CHEFS = [
  {
    imageUrl:
      "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/2494654/pexels-photo-2494654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/2494654/pexels-photo-2494654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

const TeamBioSlider = ({ chefs = DEFAULT_CHEFS }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false
  };

  return (
    <>
      <Container fluid className="p-0" style={{ width: "60vw" }}>
        <Slider {...settings}>
          {chefs.map(chef => (
            <Col className="p-0">
              <ChefPortrait src={chef.imageUrl} alt="chef portrait" />
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
