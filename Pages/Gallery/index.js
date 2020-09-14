import React,{useState} from "react";
import styled from "styled-components";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { GalleryCard } from "../../Components/Card";
import {
  Container,
  Row,
  Col,
  CardGroup as UnstyledCardGroup,
} from "react-bootstrap";
import ProductCategorySelector from "../../Components/ProductSelector";
import { getProducts, getProductCategories } from "../../Data";

const PRODUCT_CATEGORIES = [
  "All",
  "Snacks",
  "Desert",
  "Dinner",
  "Breakfast",
  "Lunch",
];

const DEFAULT_PRODUCTS = [];

const Gallery = ({
  products = getProducts(),
  categories = getProductCategories(),
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Dinner')
  const filteredProducts=products.filter(product => product.category===selectedCategory)
  return (
    <ThemedContainer>
      <Container
        id="gallery"
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          minHeight: "100vh",
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
            <ProductCategorySelector categories={categories} setCategory={setSelectedCategory} />
          </Col>
        </Row>
        <Row>
          {filteredProducts.map((item) => (
            <Col lg={3} md={4} sm={6} xs={12}>
              <GalleryCard
                imageUrl={item.imgUrl}
                heading={item.name}
                subheading={item.category}
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
