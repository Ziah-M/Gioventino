import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { GalleryCard } from "../../Components/Card";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import ProductCategorySelector from "../../Components/ProductSelector";

const PRODUCT_CATEGORIES = [
  "All",
  "Snacks",
  "Desert",
  "Dinner",
  "Breakfast",
  "Lunch",
];

const DEFAULT_PRODUCTS = [
  {
    img:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heading: "Burrito",
    subheading: "Lunch",
  },
  {
    img:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heading: "Smashed Avo",
    subheading: "Breakfast",
  },
  {
    img:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    heading: "Chicken Fried Rice",
    subheading: "Dinner",
  },
  {
    img:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    heading: "Bacon Burger & Chips",
    subheading: "Lunch",
  },
  {
    img:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    heading: "Potato Wedge Salad",
    subheading: "Dinner",
  },
  {
    img:
      "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    heading: "Grass Fed Steak",
    subheading: "Dinner",
  },
  {
    img:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heading: "Pepperoni Pizza",
    subheading: "Dinner",
  },
  {
    img:
      "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heading: "Supreme Pizza",
    subheading: "Dinner",
  },
];

const Gallery = () => {
  return (
    <ThemedContainer>
      <Container fluid style={{ minHeight: "100vh", }}>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Heading
              topHeading="Your next favourite dish"
              bottomHeading="Gallery"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <ProductCategorySelector categories={PRODUCT_CATEGORIES} />
          </Col>
        </Row>
        <Row>
          <CardGroup>
          {DEFAULT_PRODUCTS.map((item) => (
            <Col xs={6} sm={4} md={3}>
              <GalleryCard
                imageUrl={item.img}
                heading={item.heading}
                subheading={item.subheading}
              />
              </Col>
          ))}
          </CardGroup>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default Gallery;
