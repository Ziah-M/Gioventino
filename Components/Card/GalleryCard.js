import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'

const bgColor = '${props => props.theme.primaryAccent}'

// IMPLEMENTATION:
// Container has bg Image
// Card is default set to display none
// on hover Card displays, with it's relevant styles

// second idea ... on hover could CHANGE THE Z-INDEX OF THE CONTAINER COMPONENT!

// TODO -- implementing transition (ease) with styled components

const GalleryCard = (props) => {
  const [show, setShow] = useState(false)
  const {
    imageUrl = 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    heading = 'Burrito',
    subheading = 'Lunch',
  } = props
  return (
    <StyledContainer
      fluid
      imageurl={imageUrl}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={props.className}
    >
      <StyledCard show={show ? 'true' : 'false'}>
        <StyledCardBody>
          <PseudoButton>+</PseudoButton>
          <StyledTitle>{heading}</StyledTitle>
          <StyledSubtitle>{subheading}</StyledSubtitle>
        </StyledCardBody>
      </StyledCard>
    </StyledContainer>
  )
}

// TODO - TEMPORARY JUST FOR TESTING PURPOSES
const WIDTH_AND_HEIGHT = '250px'

const StyledContainer = styled(Container)`
  max-width: ${WIDTH_AND_HEIGHT};
  max-height: ${WIDTH_AND_HEIGHT};
  height: ${WIDTH_AND_HEIGHT};
  width: ${WIDTH_AND_HEIGHT};
  padding: 0px;
  user-select: none;

  @media (max-width: 600px) {
    &.excess {
      display: none;
    }
  }

  background-size: cover;

  ${(props) =>
    css`
      background-image: url(${props.imageurl});
    `}
`

const StyledTitle = styled(Card.Title)`
  color: white;
  margin: 0;
  font-size: 2em;
  text-align: center;
  user-select: none;
`

const PseudoButton = styled.div`
  color: white;
  font-size: 1.5em;
  margin: 0;
  background-color: ${bgColor};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

// BOOTSTRAP STYLES
const StyledCard = styled(Card)`
  background: transparent;
  height: 100%;
  width: 100%;
  display: none;
  padding: 10%;
  margin: 0px;
  transition: 400ms ease;
  transition-property: display;
  user-select: none;

  ${(props) =>
    props.show === 'true' &&
    css`
      display: block;
    `}
`

const StyledCardBody = styled(Card.Body)`
  display: grid;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  outline: 10px solid ${(props) => props.theme.primaryAccent};
  position: relative;
  z-index: 1;
  justify-items: center;
  align-items: center;
  user-select: none;
`

const StyledSubtitle = styled(Card.Subtitle)`
  text-align: center;
  font-size: 1em;
  text-transform: uppercase;
  margin: 0;
  color: white;
  user-select: none;
`

export default GalleryCard
