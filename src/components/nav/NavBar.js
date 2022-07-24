
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
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
              <NavLink href="/import">Import</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/create">Create</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

