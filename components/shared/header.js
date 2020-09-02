import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';


const BsNavLink = props => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const LoginButton = () => {
  return(
    <span className="nav-link port-navbar-link clickable">Login</span>
  )
}

const LogoutButton = () => {
  return(
    <span className="nav-link port-navbar-link clickable">Logout</span>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <Link href="/">
            <a className="navbar-brand port-navbar-brand">Štěpánka Lucinová</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="CV"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blog" title="Blog"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios"/>
            </NavItem>
          </Nav>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <LoginButton />
            </NavItem>
            <NavItem className="port-navbar-item">
              <LogoutButton />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;