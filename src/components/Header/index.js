import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap'

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar color="primary" light expand="md">
                <NavbarBrand href="/">Wag Dev</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/sobre/">Sobre</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contato/">Contato</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/wagnerjps">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Contatos
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="https://github.com/wagnerjps">GitHub</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="https://www.facebook.com/wagnerjps">Facebook</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="https://www.instagram.com/wagnerjps/">Instagram</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="/">Login</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>App em Bootstrap</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header