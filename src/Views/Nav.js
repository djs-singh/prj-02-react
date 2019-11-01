import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons'

function N(){
    let siteName = " कोरा कागज ";
    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" className = "bg-custom" sticky="top">
            <Navbar.Brand href="/home" className = "custom-nav-brand">{siteName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="/poems">Poems</Nav.Link>
                    <Nav.Link href="/stories">Stories</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/addAdmin">
                        <FontAwesomeIcon icon = {faAlignCenter} size = "lg"/>
                    </Nav.Link>
                    <Nav.Link href="https://www.fb.com/djs.singh" target= "_blank">
                        <FontAwesomeIcon icon = {faFacebook} size = "lg"/>
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/djs.singh" target= "_blank">
                        <FontAwesomeIcon icon = {faInstagram} size = "lg"/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default N;