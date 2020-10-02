import React from 'react'
import { Container } from 'react-bootstrap'

const Map = () => (
  <Container fluid style={{ height: '100%', width: '100%' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6626.529025283813!2d151.22106485059595!3d-33.85707335716038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1594495827592!5m2!1sen!2sau"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{ border: 'none' }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
      title="map"
    />
  </Container>
)

export default Map
