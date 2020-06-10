import styled, { css } from "styled-components";

import React from "react";

const texture = `https://images.pexels.com/photos/966927/pexels-photo-966927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

const ThemedContainer = props => {
  return (
    <BgContainer {...props}>
      <DarkOverlay>{props.children}</DarkOverlay>
    </BgContainer>
  );
};

export default ThemedContainer;

const DarkOverlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  margin: 0;
  padding: 0;
  z-index: 2;
`;

const BgContainer = styled.div`
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-image: url(${texture});
  color: white;

  ${props =>
    css`
background-image: url("${texture}");
`}
`;

export { ThemedContainer };
