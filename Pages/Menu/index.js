import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuCard from "../../Components/Card/MenuCard";
import Heading from "../../Components/Heading";
import ProductMenu from "../../Components/ProductMenu";
import ProductCategorySelector from "../../Components/ProductSelector";
import { getProductCategories } from "../../Data";
import { ThemedContainer } from "../../Themes/DarkTheme";

const DEFAULT_IMAGE_URL =
  "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Menu = ({ productCategories = getProductCategories() }) => {
  const [selectedCategory, setSelectedCategory] = useState("Dinner");

  return (
    <ThemedContainer>
      <Container
        id="menu"
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "120vh",
        }}
      >
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Heading topHeading="Delicious Meals" bottomHeading="Menu" />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "10vh", padding:0, margin:0 }}
          >
            <ProductCategorySelector
              categories={productCategories}
              setCategory={setSelectedCategory}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: 0 }} md={5} className="d-none d-md-block">
            <MenuCard imageUrl={DEFAULT_IMAGE_URL} />
          </Col>
          <Col className="" md={7} sm={12}>
            <ProductMenu selectedCategory={selectedCategory} />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default Menu;
