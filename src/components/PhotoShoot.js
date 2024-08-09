import React, { useState } from 'react'
import { Card, Row, Col, Container, Modal, Button, ModalTitle } from 'react-bootstrap'
import { useUserChoice } from '../context/UserChoiceContext'
import '../css/PhotoShoot.css'

const PhotoShoot = () => {

    // Hard-coded data
    const photoShootData = {
        wedding: [
            { title: 'Wedding 1', description: 'Description', principal_photo: `${process.env.PUBLIC_URL}/wedding/wedding1.1.jpg`, 
                all_photos:[
                    `${process.env.PUBLIC_URL}/wedding/wedding1.1.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.2.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.3.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.4.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.5.jpg`]},
            { title: 'Wedding 2', description: 'Description',  principal_photo: `${process.env.PUBLIC_URL}/wedding/wedding1.2.jpg`, 
                all_photos:[
                    `${process.env.PUBLIC_URL}/wedding/wedding1.1.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.2.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.3.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.4.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.5.jpg`]},
            { title: 'Wedding 3', description: 'Description', principal_photo: `${process.env.PUBLIC_URL}/wedding/wedding1.3.jpg`, 
                all_photos:[
                    `${process.env.PUBLIC_URL}/wedding/wedding1.1.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.2.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.3.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.4.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.5.jpg`]},
            { title: 'Wedding 4', description: 'Description',  principal_photo: `${process.env.PUBLIC_URL}/wedding/wedding1.4.jpg`, 
                all_photos:[
                    `${process.env.PUBLIC_URL}/wedding/wedding1.1.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.2.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.3.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.4.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.5.jpg`]},
            { title: 'Wedding 5', description: 'Description',  principal_photo: `${process.env.PUBLIC_URL}/wedding/wedding1.5.jpg`, 
                all_photos:[
                    `${process.env.PUBLIC_URL}/wedding/wedding1.1.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.2.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.3.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.4.jpg`,
                    `${process.env.PUBLIC_URL}/wedding/wedding1.5.jpg`]},
        ],
        birthday: [
            { title: 'Birthday 1', description: 'Description', img: ''},
            { title: 'Birthday 2', description: 'Description', img: ''},
            { title: 'Birthday 3', description: 'Description', img: ''},
        ],
        others: [
            { title: 'Others 1', description: 'Description', img: ''},
            { title: 'Others 2', description: 'Description', img: ''},
            { title: 'Others 3', description: 'Description', img: ''},
        ],
        default: [
            { title: 'Photo shoot 1', description: 'Description', img: 'default1.jpg' },
            { title: 'Photo shoot 2', description: 'Description', img: 'default2.jpg' },
            { title: 'Photo shoot 3', description: 'Description', img: 'default3.jpg' },
        ]
    }

    // Select PhotoShoot based on user's choice
    const { choice } = useUserChoice()
    const photoShootChooseByUser = photoShootData[choice] || photoShootData.default

    // Show PhotoShoot exibition modal after user have selected
    const [showModal, setShowModal] = useState(false)
    const [selectedPhotoShoot, setSelectedPhotoshoot] = useState(null)

    // Select single photo, after modal is opened, and show a bigger sized photo
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleCardClick = (photoshoot) => {
        setSelectedPhotoshoot(photoshoot)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedPhotoshoot(null)
    }

    const handleImageClick = (image) => {
        setZoomedImage(image);
    };

    const handleCloseZoomedImage = () => {
        setZoomedImage(null);
    };

    return (
        <Container className='mt-5'>
            <Row>
                {photoShootChooseByUser.map((ps, index) => (
                    <Col md={4} key={index} className='mb-4'>
                        <Card className='photo-card' onClick={() => handleCardClick(ps)}>
                            <Card.Img variant='top' src={ps.principal_photo} />
                            <Card.Body>
                                <Card.Title>{ps.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {selectedPhotoShoot && (
                <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
                    <Modal.Header closeButton>
                        <ModalTitle>{selectedPhotoShoot.title}</ModalTitle>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                {selectedPhotoShoot.all_photos.map((photo, index) => (
                                    <Col md={4} key={index} className='mb-4'>
                                        <img src={photo} alt={`Photos ${index + 1}`}
                                         className='img-fluid' onClick={() => handleImageClick(photo)} />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleCloseModal}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

            {zoomedImage && (
                <Modal show={true} onHide={handleCloseZoomedImage} size="lg" centered>
                    <Modal.Body className="zoomed-image-modal">
                        <img src={zoomedImage} alt="Zoomed" className="img-fluid" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseZoomedImage}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    )
}

export default PhotoShoot;
