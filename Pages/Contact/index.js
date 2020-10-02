import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import ContactCard from '../../Components/Card/ContactCard'
import { ThemedContainer } from '../../Themes/DarkTheme'
import Map from './Map'

const Contact = () => (
  <ThemedContainer>
    <Container
      id="contact"
      fluid
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '100%',
        width: '100%',
        padding: 0,
        margin: 0,
      }}
    >
      <InnerContainer>
        <ContactCard />
        <Wrapper>
          <Map />
        </Wrapper>
      </InnerContainer>
    </Container>
  </ThemedContainer>
)

// TODO -- OUTLINE
const InnerContainer = styled(Container)`
  border: 5px solid rgb(24, 25, 30);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  @media (max-width: 450px) {
    transform: scale(0.8);
  }
`

const Wrapper = styled.div`
  height: 500px;
  @media (max-width: 780px) {
    display: none;
  }
`

export default Contact
