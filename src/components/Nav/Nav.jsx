import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";

import './styles.css';

const Nav = () => {
  return (
    <Navbar
      className="interior__nav"
      alignLinks="right"
      brand={
        <a className="interior__brand-logo" href="/">
          THIS INTERIOR
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <a className="sidenav-close interior__cross" href>

        <i class="material-icons ">close</i>
      </a>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">Collection</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Contact</NavItem>
    </Navbar>
  );
};

export default Nav;
