import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import TestimonialCard from "../Card/TestimonialCard";
import "./sliderOverride.css";

const DEFUALT_TESTIMONIALS = ["", "", "", ""];

const TestimonialSlider = ({ testimonials = DEFUALT_TESTIMONIALS }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode:true,
   
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>
      <Container fluid className="p-0" style={{ width: "80vw" }}>
        <Row noGutters>
          <Col xs={12}>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} />
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TestimonialSlider;
