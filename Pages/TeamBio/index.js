import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemedContainer } from "../../Themes/DarkTheme";
import HeadingSection from "./HeadingSection";
import Slider from "./Slider";
import BioSection from "./BioSection";
import Portrait from "./Portrait";
import { getChefs } from "../../Data";
import styled from "styled-components";

const TeamBio = () => {
  const [chef, setChef] = useState(getChefs()[0]);
  return (
    <ThemedContainer>
      <Wrapper>
        <HeadingSection />
        <Slider setSelectedChef={setChef} />
        <BioSection chef={chef} />
      </Wrapper>
    </ThemedContainer>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding:0 10vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export default TeamBio;
