import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const bgColor = '#deb150'
const bgColorUpper = '#202127'
const bgColorHover = '#18191E'
const borderColor = '#4C4C51'

const AboutCard = ({ text = 'PLACEHOLDER', children, className }) => (
  <StyledCard className={className}>
    <StyledCardBodyUpper>
      <StyledCardIcon>{children}</StyledCardIcon>
    </StyledCardBodyUpper>
    <StyledCardBodyLower>
      <StyledText>
        <b>{text}</b>
      </StyledText>
    </StyledCardBodyLower>
    <StyledBorder />
  </StyledCard>
)

// THIS ELEMENT IS PURELY STYLISTIC
const StyledBorder = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;
  height: 92%;
  width: 92%;
  border: 2px solid ${borderColor};
  pointer-events: none;
`

const StyledCardIcon = styled(Card.Text)`
  font-size: 2em;
  text-align: center;
`

// BOOTSTRAP STYLES
const StyledCard = styled(Card)`
  min-width: 150px;
  min-height: 200px;
  width: 180px;
  height: 180px;
  @media (max-width: 400px) {
    width: 150px;
    height: 150px;
  }

  &.d-sm-hide {
    @media (max-width: 600px) {
      display: none;
    }
  }

  position: relative;
  border: none !important;
  user-select: none;
`

const StyledCardBodyUpper = styled(Card.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${bgColorUpper};
  color: white;
`

const StyledCardBodyLower = styled(Card.Body)`
  display: flex;
  max-height: 40%;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: ${bgColor};

  &:hover {
    background-color: ${bgColorHover};
    color: ${bgColor};
  }
`

const StyledText = styled(Card.Text)`
  font-size: 1em;
  text-align: center;
  text-transform: uppercase;
`

export default AboutCard
