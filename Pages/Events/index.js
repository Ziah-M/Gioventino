import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { EventsCard } from '../../Components/Card'
import Heading from '../../Components/Heading'
import { ThemedContainer } from '../../Themes/ImgTheme'

const Events = () => (
  <ThemedContainer bgImg="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
    <Container
      fluid
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '100%',
        width: '100%',
        padding: 0,
        margin: 0,
      }}
    >
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Heading topHeading="Our exciting" bottomHeading="Upcoming events" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col
          sm={9}
          md={5}
          className="d-flex justify-content-center"
          style={{ margin: '0 20px 20px 0 ' }}
        >
          <EventsCard />
        </Col>
        <Col
          sm={9}
          md={5}
          className="d-flex justify-content-center"
          style={{ margin: '0 20px 20px 0 ' }}
        >
          <EventsCard />
        </Col>
      </Row>
    </Container>
  </ThemedContainer>
)

export default Events
