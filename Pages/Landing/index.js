import React from 'react'
import { Col as UnstyledCol, Row as UnstyledRow } from 'react-bootstrap'
import { Link as UnstyledLink } from 'react-scroll'
import styled from 'styled-components'
import Button from '../../Components/Buttons/StyledButton'
import { ThemedContainer } from '../../Themes/AnimatedImgTheme'

const Landing = () => (
  <Box>
    <ThemedContainer
      bgImg="https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      height="calc(100vh + 50px)"
      style={{
        position: 'absolute',
        top: -50,
      }}
    >
      <Content />
    </ThemedContainer>
  </Box>
)

const Content = ({
  topHeading = 'Welcome to',
  middleHeading = "Gioventino's",
  bottomHeading = 'Authentic Sydney Pizza',
}) => (
  <Wrapper id="top">
    <Row>
      <Col xs={12}>
        <Heading>{topHeading}</Heading>
      </Col>
      <Col xs={12}>
        <BrandName>{middleHeading}</BrandName>
      </Col>
      <Col xs={12}>
        <Tagline>{bottomHeading}</Tagline>
      </Col>
      <Col
        xs={12}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '15px',
        }}
      />
    </Row>
    <Row noGutters>
      <Col xs={6}>
        <Link to="spy-reservation" smooth duration={1000}>
          <StyledButton>BOOK TABLE -{`>`}</StyledButton>
        </Link>
      </Col>
      <Col xs={6}>
        <Link to="spy-menu" smooth duration={1000}>
          <StyledButton>VIEW MENU -{`>`}</StyledButton>
        </Link>
      </Col>
    </Row>
  </Wrapper>
)

const Box = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  position: relative;
`

const Row = styled(UnstyledRow)`
  margin: 0;
`

const Col = styled(UnstyledCol)`
  margin: 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-height: 100vh;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
`

const Tagline = styled.h3`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  color: #ffffff;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  line-height: 27px;
  text-transform: uppercase;
  font-weight: normal;
  position: relative;
  display: block;
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 0 0;
`

const Heading = styled.h2`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  font-family: 'Allura', cursive;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }

  font-weight: normal;
  line-height: 1;
  color: ${(props) => props.theme.primaryAccent};
  margin: 0 0 0 0;
  padding: 0;
`

const BrandName = styled.h1`
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
  color: #ffffff;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 400px) {
    font-size: 45px;
  }
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  display: block;
  font-family: 'Montserrat', sans-serif;
  margin: 1% 0 2% 0;
`

const StyledButton = styled(Button)`
  margin: 0 10px;
  min-width: 150px;
`

const Link = styled(UnstyledLink)``

export default Landing
