import React from "react";
import { Nav, Navbar as UnstyledNavbar } from "react-bootstrap";
import { Link as UnstyledLink } from "react-scroll";
import styled from "styled-components";

const TasteNavbar = () => {
  return (
    <Navbar expand="md">
      <Navbar.Brand />

      <Link
        activeClass="active"
        to="spy-home"
        spy={true}
        smooth={true}
        offset={-50}
        duration={700}
      >
        Home
      </Link>

      <UnstyledNavbar.Collapse>
        <Link
          activeClass="active"
          to="spy-about"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="spy-menu"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Menu
        </Link>
        <Link
          activeClass="active"
          to="spy-special"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Chef Special
        </Link>
        <Link
          activeClass="active"
          to="spy-gallery"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Gallery
        </Link>
        <Link
          activeClass="active"
          to="spy-booking"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Events
        </Link>
        <Link
          activeClass="active"
          to="spy-contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Contact
        </Link>
      </UnstyledNavbar.Collapse>
    </Navbar>
  );
};

const Link = styled(UnstyledLink)`
  color: white;
  margin: 0 auto;
  padding: 5px 15px;
  user-select: none;

  transition: all 0.6s ease-in;

  &:hover {
    color: green !important;
    cursor: pointer !important;
  }

  &.active {
    /* background-color: #1c2331 !important; */
    background-color: white !important;
    opacity: 0.6;
    /* color: white !important; */
    color: black !important;
  }
`;

const Navbar = styled(UnstyledNavbar)`
  /* background:rgba(255,255,255,0.2); */
  background-color: #1c2331 !important;
  opacity: 0.5;
  color: white;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9000;
`;

const NavLink = styled(Nav.Link)``;

export default TasteNavbar;
