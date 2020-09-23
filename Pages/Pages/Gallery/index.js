import React, { useState } from "react";
import { CardGroup as UnstyledCardGroup } from "react-bootstrap";
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
      <Wrapper id="gallery">
        <Heading
          topHeading="Your next favourite dish"
          bottomHeading="Gallery"
        />
        <Categories>
          <ProductCategorySelector
            categories={categories}
            setCategory={setSelectedCategory}
          />
        </Categories>
        <WrapperPictures>
          <PicturesSection>
            {filteredProducts.map((item, index) => (
              <Picture key={`gallery-picture-${index}`}>
                <GalleryCard
                  imageUrl={item.imgUrl}
                  heading={item.name}
                  subheading={item.category}
                  className={`${index > 3 ? "excess" : ""}`}
                />
              </Picture>
            ))}
          </PicturesSection>
        </WrapperPictures>
      </Wrapper>
    </ThemedContainer>
  );
};

const CardGroup = styled(UnstyledCardGroup)`
  margin: 0px 25px;
`;

const Categories = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 5vw;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const WrapperPictures = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

const PicturesSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  align-content: center;
  justify-items: center;
  height: 600px;
  @media (max-width: 850px) {
    height: 900px;
  }
  @media (max-width: 650px) {
    flex-direction: row;
    height: auto;
    justify-content: center;
    align-items: start;
    justify-items: center;
  }
`;

const Picture = styled.div`
  margin: 10px;
`;

export default Gallery;
