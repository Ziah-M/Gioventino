import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const ProductCategoryFilter = ({ categories = ["All"] }) => {
  const [selected, setSelected] = useState("All");
  return (
    <StyledContainer fluid>
      <Row className='Row' noGutters>
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
display:flex;
justify-content:center;
border:1px solid green;

    .row {
    border:1px solid blue;
  }
  .col {
margin:20px;
border:1px solid orange;
  }
`;

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 5px 15px;
  text-align: center;
  text-transform:uppercase;
  font-size:1.2em;

  ${props =>
    css`
      ${props.isSelected &&
        `
      background-color: ${props => props.theme.primaryAccent};
      color: black;
      `}
    `}
`;

export default ProductCategoryFilter;
