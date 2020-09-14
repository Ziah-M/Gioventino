import React from "react";
import { Navbar } from "react-bootstrap";
import { Link as UnstyledLink } from "react-scroll";
import styled from "styled-components";

const TasteNavbar = () => {
  return (
    <Navbar
      style={{
        background: "rgba(0,0,0,0.6)",
        color: "white",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "9000",
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
  padding: 5px 15px;

  &:hover {
    color: green !important;
    cursor: pointer !important;
  }

  &.active {
    background-color: slategrey !important;
    color: blue !important;
  }
`;

export default TasteNavbar;
