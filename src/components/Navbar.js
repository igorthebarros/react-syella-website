import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useUserChoice } from '../context/UserChoiceContext'
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

const NavigationBar = () => {
    const { setChoice } = useUserChoice()
    const navigate = useNavigate()

    const handleSelect = (choice) => {
        setChoice(choice)
        navigate('/photoshoot');
    }

    return (
        <Navbar className="custom-navbar" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand className="me-auto" href="/">Syella Pinheiro Co.</Navbar.Brand>

            <Nav className="ml-auto">
                
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <NavDropdown title="Fotografia" id="photos-nav-dropdown">
                    <LinkContainer to="/photoshoot/">
                        <NavDropdown.Item onClick={() => handleSelect('wedding')}>
                            Casamentos</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/photoshoot/">
                        <NavDropdown.Item onClick={() => handleSelect('birthday')}>
                            Aniversários</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/photoshoot/">
                        <NavDropdown.Item onClick={() => handleSelect('others')}>
                            Ensaios Pessoais</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>


                <LinkContainer to="/socialmedia">
                    <Nav.Link>Social Media</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavigationBar