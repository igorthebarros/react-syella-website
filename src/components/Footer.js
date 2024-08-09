import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa'
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className="align-items-center">
                <Col md={4}></Col>
                    <Col md={4} className="text-center rights-statement">
                        <p>&copy; 2024 Frajola's IT Company. All rights reserved.</p>
                    </Col>
                    
                    <Col md={4} className="social-links-column">
                        <div className="social-links">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram /> Instagram
                            </a>
                            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
                                <FaBehance /> Behance
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer