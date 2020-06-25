import React from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { GalleryCard } from "../../Components/Card";
import {
  Container,
  Row,
  Col,
  CardGroup as UnstyledCardGroup
} from "react-bootstrap";
import ProductCategorySelector from "../../Components/ProductSelector";

const PRODUCT_CATEGORIES = [
  "All",
  "Snacks",
  "Desert",
  "Dinner",
  "Breakfast",
  "Lunch"
];

const DEFAULT_PRODUCTS = [
  {
    img:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heading: "Burrito",
    subheading: "Lunch"
  },
  {
    img:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heading: "Smashed Avo",
    subheading: "Breakfast"
  },
  {
    img:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    heading: "Chicken Fried Rice",
    subheading: "Dinner"
  },
  {
    img:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    heading: "Bacon Burger & Chips",
    subheading: "Lunch"
  },
  {
    img:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    heading: "Potato Wedge Salad",
    subheading: "Dinner"
  },
  {
    img:
      "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    heading: "Grass Fed Steak",
    subheading: "Dinner"
  },
  {
    img:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heading: "Pepperoni Pizza",
    subheading: "Dinner"
  },
  {
    img:
      "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heading: "Supreme Pizza",
    subheading: "Dinner"
  }
];

const Gallery = () => {
  return (
    <ThemedContainer>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Heading
              topHeading="Your next favourite dish"
              bottomHeading="Gallery"
            />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center"
            style={{ margin: "15px 0" }}
          >
            <ProductCategorySelector categories={PRODUCT_CATEGORIES} />
          </Col>
        </Row>
        <Row>
          {DEFAULT_PRODUCTS.map(item => (
            <Col lg={3} md={4} sm={6} xs={12}>
              <GalleryCard
                imageUrl={item.img}
                heading={item.headings}
                subheading={item.subheading}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </ThemedContainer>
  );
};

const CardGroup = styled(UnstyledCardGroup)`
  margin: 0px 25px;
`;

export default Gallery;
