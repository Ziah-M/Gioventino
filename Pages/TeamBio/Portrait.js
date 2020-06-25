import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Portrait = ({ image = DEFAULT_IMAGE }) => (
        <PortraitImage src={image} />
);

const PortraitImage = styled.img`
 max-height:100%;
 max-width:100%;
`;

export default Portrait;
