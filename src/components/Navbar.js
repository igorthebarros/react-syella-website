import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        // <Navbar bg='dark' variant='dark' fixed='top'>
        //     <Container>
        //         <Navbar.Brand as={Link} to='/'>Syella Dick Co.</Navbar.Brand>
        //         <Nav className='ml-auto'>
        //             <Nav.Link as={Link} to='/whoami'>Quem sou eu?</Nav.Link>
        //             <Nav.Link as={Link} to='/photoshoot'>Trabalhos</Nav.Link>
        //             <Nav.Link as={Link} to='/contactMe'>Contato</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <Nav.Link>Contact Me</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/submit">
                    <Nav.Link>Submit Form</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown title="Photos" id="photos-nav-dropdown">
                        <LinkContainer to="/projects/photos/job1">
                            <NavDropdown.Item>Job 1</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/projects/photos/job2">
                            <NavDropdown.Item>Job 2</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/projects/photos/job3">
                            <NavDropdown.Item>Job 3</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <NavDropdown title="Social Media" id="socialmedia-nav-dropdown">
                        <LinkContainer to="/projects/socialmedia/job1">
                            <NavDropdown.Item>Job 1</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/projects/socialmedia/job2">
                            <NavDropdown.Item>Job 2</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/projects/socialmedia/job3">
                            <NavDropdown.Item>Job 3</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </NavDropdown>
                <LinkContainer to="/whoami">
                    <Nav.Link>Who Am I</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavigationBar