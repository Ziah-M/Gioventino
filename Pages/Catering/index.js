import React from 'react'
import styled from 'styled-components'
import { CateringCard } from '../../Components/Card'
import CateringSlider from '../../Components/Slider/CateringSlider'

// TODO --- HEADING GOES INSIDE THE CATERING CARD

const Catering = () => (
  <Wrapper>
    <CateringSlider />
    <CateringCard />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
  max-width: 100%;
  width: 100%;
  position: relative;
`

export default Catering
