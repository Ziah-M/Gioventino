import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Catering from "./Pages/Catering";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Footer from "./Pages/Footer";
import Gallery from "./Pages/Gallery";
import Landing from "./Pages/Landing";
import Menu from "./Pages/Menu";
import Offer from "./Pages/Offer";
import Popular from "./Pages/Popular";
import TeamBio from "./Pages/TeamBio";
import Testimonials from "./Pages/Testimonials";
import styled, { ThemeProvider } from "styled-components";
import { ThemedContainer } from "./Themes/ImgTheme";

const theme = {
  primaryAccent: "#deb150",
  darkText: "white",
  lightText: "black",
  dark: "black"
};

const App = () => {
  return (
    //TODO -- maxWidth is a temporary fix to width overflowing the viewport
    <GlobalStyles style={{ maxWidth: "98.7vw", overflow: "hidden" }}>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <Landing />
        <About />
        <Offer />
        <Menu />
        <Popular />
        <Booking />
        <TeamBio />
        <Testimonials />
        <Catering />
        <Gallery />
        <Events />
        <Contact />
        <Footer />
      </ThemeProvider>
    </GlobalStyles>
  );
};

const GlobalStyles = styled.div`
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  margin: 0;
  background-image: url(https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
`;

export default App;
