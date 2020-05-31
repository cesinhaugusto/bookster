import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          className="navbar navbar-expand-lg navbar-dark bg-dark static-top"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/" className="navbar-brand">
              Bookster
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleNavbar}
              className="navbar-toggler"
            />
            <Collapse
              className="collapse navbar-collapse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav ml-auto">
                <NavItem className="nav-item">
                  <NavLink tag={Link} className="nav-link" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink tag={Link} className="nav-link" to="/bookstore">
                    Bookstore
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink tag={Link} className="nav-link" to="/cart">
                    My cart
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
