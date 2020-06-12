import React from "react";
import styled from "styled-components";
import MenuCard from "../../Components/Card/MenuCard";
import { ThemedContainer } from "../../Themes/DarkTheme";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import ProductCategorySelector from "../../Components/ProductSelector";
import ProductMenu from "../../Components/ProductMenu";

const ProductCategories = ["Snacks", "Desert", "Dinner", "Breakfast", "Lunch"];

const DEFAULT_IMAGE_URL =
  "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Menu = () => {
  return (
    <ThemedContainer>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
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
            style={{ minHeight: "10vh" }}
          >
            <ProductCategorySelector categories={ProductCategories} />
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: 0 }} md={5} className="d-none d-md-block">
            <MenuCard imageUrl={DEFAULT_IMAGE_URL} />
          </Col>
          <Col className="" md={7} sm={12}>
            <ProductMenu />
          </Col>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default Menu;
