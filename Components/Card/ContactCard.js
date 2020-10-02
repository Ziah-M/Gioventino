import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Heading from '../Heading'

const TestimonialCard = ({}) => (
  <Wrapper>
    <Outer>
      <Inner>
        <Row>
          <Col>
            <Heading topHeading="Details" bottomHeading="Contact Us" />
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledSubheading>Opening Hours</StyledSubheading>
            <StyledTextRow>
              <StyledText>Mon - Thu --- 10.00am to 10.00pm</StyledText>
            </StyledTextRow>
            <StyledTextRow>
              <StyledText>Fri - Sat --- 8am to 12pm</StyledText>
            </StyledTextRow>

            <StyledSubheading>Contact Info</StyledSubheading>
            <StyledTextRow>
              <StyledText>127 Fake Drive, Sydney, 2000</StyledText>
            </StyledTextRow>
            <StyledTextRow>
              <StyledText>02 9000 0000</StyledText>
            </StyledTextRow>
            <StyledTextRow>
              <StyledText>support@TasteRestaurants.com</StyledText>
            </StyledTextRow>
          </Col>
        </Row>
      </Inner>
    </Outer>
  </Wrapper>
)

// BOOTSTRAP STYLES
const StyledText = styled(Card.Text)`
  color: #a19fa0;

  font-family: 'Montserrat', sans-serif;
  margin: 0 20px;
`

const StyledTextRow = styled(Row)`
  margin: 10px 0;
`

const StyledSubheading = styled(Card.Subtitle)`
  color: ${(props) => props.theme.primaryAccent};
  text-transform: uppercase;
  margin: 20px 0;
`

const Wrapper = styled.div`
  width: 320px;
  height: 500px;
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
