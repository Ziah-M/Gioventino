import React, { useState } from 'react'
import {
  Col as UnstyledCol,
  Container,
  Row as UnstyledRow,
} from 'react-bootstrap'
import styled from 'styled-components'
import MenuCard from '../../Components/Card/MenuCard'
import Heading from '../../Components/Heading'
import ProductMenu from '../../Components/ProductMenu'
import ProductCategorySelector from '../../Components/ProductSelector'
import { getProductCategories } from '../../Data'
import { ThemedContainer } from '../../Themes/DarkTheme'

const DEFAULT_IMAGE_URL =
  'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

const Menu = ({ productCategories = getProductCategories() }) => {
  const [selectedCategory, setSelectedCategory] = useState('Dinner')

  return (
    <ThemedContainer>
      <Wrapper id="menu" fluid>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Heading topHeading="Delicious Meals" bottomHeading="Menu" />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '10vh', padding: 0, margin: 0 }}
          >
            <ProductCategorySelector
              categories={productCategories}
              setCategory={setSelectedCategory}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: 0 }} md={5} className="d-none d-md-block">
            <MenuCard imageUrl={DEFAULT_IMAGE_URL} />
          </Col>
          <Col className="" md={7} sm={12}>
            <ProductMenu selectedCategory={selectedCategory} />
          </Col>
        </Row>
      </Wrapper>
    </ThemedContainer>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 120vh;

  @media (max-width: 450px) {
    transform: scale(0.9);
  }
`

const Row = styled(UnstyledRow)`
  margin: 0;
`

const Col = styled(UnstyledCol)`
  margin: 0;
`

export default Menu
