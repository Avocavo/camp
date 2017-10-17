import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Lead Machine</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#/signup" onClick={this.toggle}>Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/myprofile" onClick={this.toggle}>My Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/pro" onClick={this.toggle}>Are you a Pro?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/faq" onClick={this.toggle}>FAQ</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
