import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import TestimonialCard from "../Card/TestimonialCard";
import "./sliderOverride.css";

const DEFUALT_TESTIMONIALS = ["", "", "", ""];

const TestimonialSlider = ({ testimonials = DEFUALT_TESTIMONIALS }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <Container fluid className="p-0" style={{ width: "80vw" }}>
        <Row noGutters>
          <Col xs={12}>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <Col className="p-0 m-0" index={index}>
                  <TestimonialCard testimonial={testimonial} />
                </Col>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TestimonialSlider;
