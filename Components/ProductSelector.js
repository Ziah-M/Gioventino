import React, { useState } from "react";
import styled, { css } from "styled-components";
import { getProductCategories } from "../Data";

const ProductCategoryFilter = ({
  categories = getProductCategories(),
  setCategory = (f) => f,
}) => {
  const [selected, setSelected] = useState(categories[2]);

  const handleClick = (category) => {
    setSelected(category);
    setCategory(category);
  };
  return (
    <StyledContainer>
      {categories.map((category, index) => (
        <StyledButton
          onClick={() => handleClick(category)}
          isSelected={category === selected}
          key={`product-filter-component-${index}`}
        >
          {category}
        </StyledButton>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width:100%;
  user-select: none;
`;

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0px 1px;
  color: white;
  border: none;
  padding: 3px 4px;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  font-size: 12px;
  width: 74px;

  @media (max-width: 413px) {
    font-size: 10px;
    width: 60px;
  }

  @media (min-width: 900px) {
    font-size: 20px;
    width: 150px;
    padding: 18px 24px;
    margin: 0 3px;
  }

  @media (min-width: 600px) {
    font-size: 15px;
    width: 100px;
    padding: 9px 12px;
    margin: 0 3px;
  }

  border: none !important;
  outline: none !important;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  ${(props) =>
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
