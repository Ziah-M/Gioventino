import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const ProductCategoryFilter = ({ categories = ["All"] }) => {
  const [selected, setSelected] = useState(categories[0]);
  return (
    <StyledContainer fluid>
      <Row noGutters>
        {categories.map(category => (
          <Col>
            <StyledButton
              onClick={() => setSelected(category)}
              isSelected={category === selected}
            >
              {category}
            </StyledButton>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0px 0.25vw;
  color: white;
  border: none;
  padding: 0.75vw 2.25vw;
  text-align: center;
  text-transform: uppercase;
  font-size: 2vw;
  min-width: 15vw;
  max-width: 17vw;
  border: none !important;
  outline: none !important;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  ${props =>
    css`
      ${props.isSelected &&
        `
      background-color: #deb150;
      color: black;

      &:hover {
        background-color: #deb150;
      }
      `}
    `}
`;

export default ProductCategoryFilter;
