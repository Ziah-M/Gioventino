import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { getProducts } from "../Data";

const ProductMenu = ({
  products = getProducts(),
  selectedCategory = "Dinner",
}) => {
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <Container fluid>
      {filteredProducts.map(
        (product, index) =>
          index < 4 && (
            <StyledRow key={`product-menu-${index}`}>
              <Col xs={3}>
                <StyledCardImg src={product.imgUrl} />
              </Col>
              <Col style={{ marginLeft: "5%" }}>
                <Row>
                  <ProduceItemHeading>
                    {product.name} &nbsp;-> ${product.price}
                  </ProduceItemHeading>
                </Row>
                <Ingredients>{product.ingredients}</Ingredients>
              </Col>
            </StyledRow>
          )
      )}
    </Container>
  );
};

const ProduceItemHeading = styled.span`
  color: #deb150;
  margin-bottom: 5px;
  font-size: 22px;
`;

const Ingredients = styled(Row)`
  font-size: 12px;
`;

const StyledCardImg = styled.img`
  width: 75px;
  height: 75px;
  min-width: 12.5vw;
  min-height: 12.5vw;
  border-radius: 50%;
`;

const StyledRow = styled(Row)`
  border-bottom: 2px dotted grey;
  padding: 8% 0px;
  display: flex;
  align-items: center;
`;

export default ProductMenu;
