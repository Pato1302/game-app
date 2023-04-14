import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import './Login.css'


export const PasswordRecovery = () => {
    const form = useRef();

    
    const recuperarContrasena = async (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
         const uri = 'http://localhost:3001/login/recover';
        //const uri = "http://apitc2005b23-env.eba-hipqm9w8.us-east-1.elasticbeanstalk.com/recover";
        const response = await fetch(uri, {
            method: 'POST',
            body: formData
        })
        const data = response.text();
        console.log(data);
    }

    

    

  return (
    <Container>
    <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
    <Form ref={form} onSubmit={recuperarContrasena}>
        <Form.Group className='mb-2'>
            <Form.Label htmlFor='email'>Usuario</Form.Label>
            <Form.Control type="text" id='email' name='email' placeholder="email" />
        </Form.Group>

        <div className='ctr'>
        <Button type="submit">
            Recuperar contraseña
        </Button>
        </div>
      </Form>
    </Col>
    <Col sm={4}></Col>
  </Row>
</Container>
  )
}
