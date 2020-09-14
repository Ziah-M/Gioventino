import React, { useState } from "react";
import {
  CardGroup as UnstyledCardGroup
} from "react-bootstrap";
import styled from "styled-components";
import { GalleryCard } from "../../Components/Card";
import Heading from "../../Components/Heading";
import ProductCategorySelector from "../../Components/ProductSelector";
import { getProductCategories, getProducts } from "../../Data";
import { ThemedContainer } from "../../Themes/DarkTheme";

const PRODUCT_CATEGORIES = [
  "All",
  "Snacks",
  "Desert",
  "Dinner",
  "Breakfast",
  "Lunch",
];

const DEFAULT_PRODUCTS = [];

const Gallery = ({
  products = getProducts(),
  categories = getProductCategories(),
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Dinner");
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <ThemedContainer>
      <Wrapper>
        <Heading
          topHeading="Your next favourite dish"
          bottomHeading="Gallery"
        />
        <ProductCategorySelector
          categories={categories}
          setCategory={setSelectedCategory}
        />
        <PicturesSection>
          {filteredProducts.map((item) => (
            <Picture>
              <GalleryCard
                imageUrl={item.imgUrl}
                heading={item.name}
                subheading={item.category}
              />
            </Picture>
          ))}
        </PicturesSection>
      </Wrapper>
    </ThemedContainer>
  );
};

const CardGroup = styled(UnstyledCardGroup)`
  margin: 0px 25px;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const PicturesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  min-height: 600px;
`;

const Picture = styled.div`
  margin: 10px;
`;

export default Gallery;
