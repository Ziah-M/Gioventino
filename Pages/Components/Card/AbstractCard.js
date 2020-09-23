import React from "react";
import styled from "styled-components";

const AbstractCard = (props) => {
  return (
    <Card className={props.className}>
      <Border />
      <Inner>{props.children}</Inner>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(0.9);
  z-index: 1000;
  pointer-events: none;

  ${Card}.border-black & {
    border: 1px solid black;
  }
`;

const Inner = styled.div`
  width: inheirt;
  height: inherit;
  background: inherit;
`;

export default AbstractCard;
