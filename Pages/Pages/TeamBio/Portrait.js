import React from "react";
import styled from "styled-components";

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Portrait = ({ image = DEFAULT_IMAGE }) => <PortraitImage src={image} />;

const PortraitImage = styled.img`
  margin: 5vh 0;
  height: 60vh;
  width: 50vh;
  max-width: 100%;
`;

export default Portrait;
