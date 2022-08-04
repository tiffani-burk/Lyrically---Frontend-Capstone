
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

export const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" dark>
     <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/allsongs/">All Songs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/setlists">Setlists</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/import">Add Cover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/create">Add Original</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

