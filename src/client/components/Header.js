import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = (props) => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Demo Application</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/" >
          Home
          </NavItem>
          <NavItem eventKey={2} href="/myReduxForm">
          My redux-form
          </NavItem>
          <NavItem eventKey={2} href="/address">
          Location Search
          </NavItem>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;
