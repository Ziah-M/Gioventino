import React from "react";
import styled, { css } from "styled-components";

const DarkOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  height: auto;
  margin: 0;
  padding: 0;
  z-index: 2;

  ${props =>
    css`
      min-height: ${props.height};
      background: rgba(0, 0, 0, ${props.transparency || 0.6});
    `}
`;

export default DarkOverlay;
