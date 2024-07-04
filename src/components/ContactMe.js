import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactMe = () => {
    return (
        <Form>
            <Form.Group controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Digite seu nome' />
            </Form.Group>

            <Form.Group controlId='formEmail'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Digite seu email' />
            </Form.Group>

            <Form.Group controlId='formMessage'>
                <Form.Label>Mensagem</Form.Label>
                <Form.Control type='text' placeholder='Digite o que precisa' />
            </Form.Group>

            <Button variant='primary' type='submit'>
                Enviar
            </Button>
        </Form>
    )
}

export default ContactMe