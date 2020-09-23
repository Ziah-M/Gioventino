import React from "react";
import styled, { ThemeProvider } from "styled-components";
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

const theme = {
  primaryAccent: "#deb150",
  darkText: "white",
  lightText: "black",
  dark: "black",
};

const App = () => {
  return (
    //TODO -- maxWidth is a temporary fix to width overflowing the viewport
    <GlobalStyles style={{ width: "100%", maxWidth: "100%" }}>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        <Navbar />
        <div id="spy-home">
          <Landing />
        </div>
        <div id="spy-about">
          <About />
        </div>
        <div id="spy-menu">
          <Menu />
          <Popular />
        </div>
        <div id="spy-special">
          <Offer />
          <TeamBio />
        </div>
        <div id="spy-gallery">
          <Gallery />
        </div>
        <div id="spy-booking">
          <Catering />
          <Events />
          <Testimonials />
          <div id="spy-reservation">
            <Booking />
          </div>
        </div>
        <div id="spy-contact">
          <Contact />
          <Footer />
        </div>
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
