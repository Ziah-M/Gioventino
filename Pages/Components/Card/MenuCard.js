import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const bgColor = "black";

const MenuCard = (props) => {
  const { imageUrl } = props;
  return (
    <StyledCard>
      <StyledCardImg src={imageUrl} />
    </StyledCard>
  );
};

// THIS ELEMENT IS PURELY STYLISTIC
const StyledBorder = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;
  height: 92%;
  width: 92%;
  border: 1% solid #303035;
`;

// BOOTSTRAP STYLES
const StyledCard = styled(Card)`
  background-color: ${bgColor};
  position: relative;
  height: 100%;
  width: 100%;
  user-select: none;
`;

const StyledCardImg = styled(Card.Img)`
  width: 100%;
  height: 100%;
  user-select: none;
`;

export default MenuCard;
