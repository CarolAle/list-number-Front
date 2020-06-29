import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

export default props => (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)