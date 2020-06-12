import React from "react";
import styled, { css } from "styled-components";
import DarkOverlay from "./DarkOverlay"


const ThemedContainer = props => {
  const height = props.height || "100vh"; // Optional height property
  return (
    <BgContainer {...props} height={height}>
      <DarkOverlay height={height} transparency={0.6}>{props.children}</DarkOverlay>
    </BgContainer>
  );
};

export default ThemedContainer;

const BgContainer = styled.div`
  background-image: url("https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: auto;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.lightText};

  ${props =>
    css`
background-image: url("${props.bgImg}");
min-height:${props.height};
`}
`;

export { ThemedContainer };
