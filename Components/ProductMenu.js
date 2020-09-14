import React from "react";
import styled, { css } from "styled-components";
import { Col, Row, Container } from "react-bootstrap";

import {getProducts, getProductCategories} from '../Data'

const ProductMenu = ({ products = getProducts(), selectedCategory='Dinner' }) => {
  const filteredProducts=products.filter(product => product.category===selectedCategory)
  return (
    <Container fluid>
      {filteredProducts.map(
        (product, index) =>
          index < 4 && (
            <StyledRow>
              <Col xs={3}>
                <StyledCardImg src={product.imgUrl} />
              </Col>
              <Col style={{ marginLeft: "5%" }}>
                <Row>
                  <ProduceItemHeading>
                    {product.name} &nbsp; &nbsp; ${product.price}
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
