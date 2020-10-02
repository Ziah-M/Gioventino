import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../../Components/Heading'
import TestimonialSlider from '../../Components/Slider/TestimonialSlider'
import { ThemedContainer } from '../../Themes/ImgTheme'

const Testimonials = () => (
  <ThemedContainer bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
    <Container
      fluid
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '100%',
        width: '100%',
        padding: 0,
        margin: 0,
      }}
    >
      <Row>
        <Col xs={12}>
          <Heading
            topHeading="What our customers have said"
            bottomHeading="Testimonials"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <TestimonialSlider />
        </Col>
      </Row>
    </Container>
  </ThemedContainer>
)

export default Testimonials
