import React from "react";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
import "./sliderOverride.css";

// Slider for a scrolling collection of background images

const DEFUALT_IMAGES = [
  "https://images.pexels.com/photos/1114427/pexels-photo-1114427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/1741285/pexels-photo-1741285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/265940/pexels-photo-265940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4344545/pexels-photo-4344545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const CateringSlider = ({ testimonials = DEFUALT_IMAGES }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    focusOnSelect: false,
    touchMove: false,
    pauseOnHover: false,
  };

  return (
    <>
      <StyledContainer fluid className="p-0">
        <Slider {...settings} className="slider">
          {testimonials.map((imageSrc, index) => (
            <Col className="p-0" index={index}>
              <CateringSliderImg src={imageSrc} />
            </Col>
          ))}
        </Slider>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled(Container)`
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

const CateringSliderImg = styled.img`
  height: 100vh;
`;

export default CateringSlider;
