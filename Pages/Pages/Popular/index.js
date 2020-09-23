import React from "react";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import { ProductCard } from "../../Components/Card";
import Heading from "../../Components/Heading";
import { ThemedContainer } from "../../Themes/ImgTheme";

const DEFAULT_PRODUCTS = [
  {
    title: "ITALIAN PIZZA",
    ingredients: "Tomato, Milk, Pizza, Pepperoni, Basil, Olives",
    price: "$20",
    imageUrl:
      "https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    title: "PEPPERONI PIZZA",
    ingredients: "Pepperoni, Cheese, Sauce, Pizza, Oregano",
    price: "$15",
    imageUrl:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    title: "SUPREME PIZZA",
    ingredients: "Onion, Jalapenos, Pizza Sauce, Tomatoes, Cheese",
    price: "$20",
    imageUrl:
      "https://images.pexels.com/photos/3053082/pexels-photo-3053082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const Popular = () => {
  return (
    <ThemedContainer bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "100vh",
          maxWidth: "100%",
          width: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Heading
              topHeading="Our customers favourites"
              bottomHeading="Popular dishes"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <CardDeck>
            {DEFAULT_PRODUCTS.map((item, index) => (
              <ProductCard
                title={item.title}
                text={item.ingredients}
                price={item.price}
                imageUrl={item.imageUrl}
                key={`product-popular-item-${index}`}
              />
            ))}
          </CardDeck>
        </Row>
      </Container>
    </ThemedContainer>
  );
};

export default Popular;
