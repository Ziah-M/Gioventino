import React from "react";
import styled, { css } from "styled-components";
import DarkOverlay from "./DarkOverlay";

const texture = `https://images.pexels.com/photos/966927/pexels-photo-966927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

const ThemedContainer = (props) => {
  const height = props.height || "100vh"; // Optional height property
  return (
    <BgContainer {...props}>
      <DarkOverlay transparency={0.8} height={height}>
        {props.children}
      </DarkOverlay>
    </BgContainer>
  );
};

export default ThemedContainer;

const BgContainer = styled.div`
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  background-image: url(${texture});
  color: white;

  ${(props) =>
    css`
      background-image: url("${texture}");
    `}
`;

export { ThemedContainer };

