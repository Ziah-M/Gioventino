import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import TestimonialCard from "../Card/TestimonialCard";

const DEFUALT_TESTIMONIALS = ["", "", "", ""];

const TestimonialSlider = ({ testimonials = DEFUALT_TESTIMONIALS }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true
  };

  return (
    <>
      <Container fluid className="p-0" style={{ width: "60vw" }}>
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <Col className="p-5">
              <TestimonialCard testimonial={testimonial} />
            </Col>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default TestimonialSlider;
