import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { Link as UnstyledLink, animateScroll as scroll } from "react-scroll";

const TasteNavbar = () => {
  return (
    <Navbar
      style={{
        background: "rgba(0,0,0,0.9)",
        color: "white",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "9000"
      }}
    >
      <Navbar.Brand />
      <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-50}
        duration={700}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={700}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="offer"
        spy={true}
        smooth={true}
        offset={-50}
        duration={700}
      >
        Offer
      </Link>
      <Link
        activeClass="active"
        to="menu"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        Menu
      </Link>
      <Link
        activeClass="active"
        to="gallery"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        Gallery
      </Link>
      <Link
        activeClass="active"
        to="reservations"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        Reservations
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        Contact
      </Link>
    </Navbar>
  );
};

const Link = styled(UnstyledLink)`
  color: white;
  margin: 0 auto;
  &:hover {
    color: green !important;
    cursor: pointer !important;
  }

  &.active {
    background-color: blue !important;
    color: red !important;
  }
`;

export default TasteNavbar;
