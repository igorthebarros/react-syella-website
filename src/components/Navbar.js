import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <Navbar bg='dark' variant='dark' fixed='top'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Syella Dick Pinheiro</Navbar.Brand>
                <Nav className='ml-auto'>
                    <Nav.Link as={Link} to='/contactMe'>Contato</Nav.Link>
                    <Nav.Link as={Link} to='/photoshoot'>Ensaios Fotográficos </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;