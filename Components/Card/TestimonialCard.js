import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const TEXT = `
  Taste was the best pizza I've ever eaten!
`

const DEFAULT_IMAGE =
  'https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg'

const TestimonialCard = (props) => {
  const {
    name = 'John Doe',
    position = 'MD, doctor',
    text = TEXT,
    imageUrl = DEFAULT_IMAGE,
  } = props
  return (
    <Wrapper>
      <Outer>
        <Inner>
          <Row>
            <Image src={imageUrl} />
            <Col>
              <StyledName>{name}</StyledName>
              <StyledPosition>{position}</StyledPosition>
            </Col>
          </Row>
          <StyledText>{text}</StyledText>
        </Inner>
      </Outer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 300px;
  height: 300px;

  @media (max-width: 450px) {
    transform: scale(0.7);
  }
`

const Col = styled.div``

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`

// BOOTSTRAP STYLES
const StyledText = styled(Card.Text)`
  color: #a19fa0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin: 40px 20px 20px 20px;
`

const StyledName = styled(Card.Subtitle)`
  color: #fcfcfc;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
`

const StyledPosition = styled(Card.Text)`
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #a19fa0;
  font-size: 0.8em;
  margin-bottom: 30px;
`

const Image = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
`

const Outer = styled.div`
  width: inherit;
  height: inherit;
  background-color: #202127;
  box-shadow: 0px 2px 48px 9px rgba(0, 0, 0, 0.43);
`

const Inner = styled.div`
  width: inherit;
  height: inherit;
  transform: scale(0.9);
  background-color: #18191e;
  border: 2px solid #33343c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export default TestimonialCard
