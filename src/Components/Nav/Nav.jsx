import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import './styles.css';

const Nav = () => {
  return (
    <Navbar
    className="nav__ic"
      alignLinks="right"
      brand={
        <a className="brand-logo__ic" href="/">
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
     <a className="sidenav-close cross" href> <i class="material-icons ">close</i></a>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">Collection</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Contact</NavItem>
    </Navbar>
  );
};

export default Nav;
