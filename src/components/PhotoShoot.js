import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const PhotoShoot = () => {
    const photoShoots = [
        { title: 'Photo shoot 1', description: 'Description', img: ''},
        { title: 'Photo shoot 2', description: 'Description', img: ''},
        { title: 'Photo shoot 3', description: 'Description', img: ''},
    ]

    return (
        <CardGroup>
            {photoShoots.map((ps, index) => (
                <Card key={index}>
                    <Card.Img variant="top" src={ps.img} />
                    <Card.Body>
                        <Card.Title>{ps.title}</Card.Title>
                        <Card.Text>{ps.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
    )
}

export default PhotoShoot;
