import React from "react";
import styled, { css } from "styled-components";
import { Col, Row, Container } from "react-bootstrap";

const DEFAULT_PRODUCTS = [
  {
    title: "ITALIAN PIZZA",
    ingredients: "Tomato, Milk, Pizza, Pepperoni, Basil, Olives",
    price: "$20",
    imageUrl:
      "https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    title: "PEPPERONI PIZZA",
    ingredients: "Pepperoni, Cheese, Sauce, Pizza, Oregano",
    price: "$15",
    imageUrl:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    title: "SUPREME PIZZA",
    ingredients: "Onion, Jalapenos, Pizza Sauce, Tomatoes, Cheese",
    price: "$20",
    imageUrl:
      "https://images.pexels.com/photos/3053082/pexels-photo-3053082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    title: "SUPREME PIZZA",
    ingredients: "Onion, Jalapenos, Pizza Sauce, Tomatoes, Cheese",
    price: "$20",
    imageUrl:
      "https://images.pexels.com/photos/3053082/pexels-photo-3053082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

const ProductMenu = ({ products = DEFAULT_PRODUCTS }) => {
  return (
    <Container fluid>
      {products.map(
        (product, index) =>
          index < 4 && (
            <StyledRow>
              <Col xs={3}>
                <StyledCardImg src={product.imageUrl} />
              </Col>
              <Col style={{ marginLeft: "5%" }}>
                <Row>
                  <ProduceItemHeading>
                    {product.title} &nbsp; &nbsp; {product.price}
                  </ProduceItemHeading>
                </Row>
                <Row>{product.ingredients}</Row>
              </Col>
            </StyledRow>
          )
      )}
    </Container>
  );
};

const ProduceItemHeading = styled.span`
  color: #deb150;
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const StyledRow = styled(Row)`
  border-bottom: 2px dotted grey;
  padding: 8% 0px;
  display: flex;
  align-items: center;
`;

export default ProductMenu;
