import React, { useState } from "react";
import styled from "styled-components";
import { getChefs } from "../../Data";
import { ThemedContainer } from "../../Themes/DarkTheme";
import BioSection from "./BioSection";
import HeadingSection from "./HeadingSection";
import Slider from "./Slider";

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
  padding: 0 10vw;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export default TeamBio;
