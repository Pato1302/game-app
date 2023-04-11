import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Login.css'
import icon from '../assets/exclamation-octagon-fill.svg'
import {InformativeModal} from './InformativeModal'

export const Login = () => {
    const form = useRef();
    const navigate = useNavigate(); // Hook para redireccionar
    const [modalState, setModalState] = useState(false);

    const envioDatos = async (event) => {
        event.preventDefault();
        // La constante formData contiene los datos del formulario
        // Usuario y contraseña en formato de objeto
        const formData = new FormData(form.current);

        //const uri = 'https://8g1ae42oai.execute-api.us-east-1.amazonaws.com/dev/login-service';
        const uri = "http://apitc2005b23-env.eba-hipqm9w8.us-east-1.elasticbeanstalk.com/login";
        /*
        const response = await fetch(uri, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                user: document.getElementById('user').value,
                password: document.getElementById('password').value
            })
        });
        */

        const response = await fetch(uri, {
            method: 'POST',
            body: formData
        });

        const data = await response.json()
        if (data.token !== "") {
            // Iniciar sesión
            localStorage.setItem('token', data.token); // Guardar token en el localStorage (Se borra al cerrar el navegador)
            //sessionStorage.setItem('token', data.token); // Guardar token en el sessionStorage (Se borra al cerrar la pestaña)
            /*
            let fecha = new Date();
            fecha.setTime(fecha.getTime() + (3600 * 1000)); // 1 hora
            document.cookie = `token=${data.token}; expires=${fecha.toUTCString()}`; // Guardar token en las cookies
            */

            // Redireccionar a la página principal
            navigate('/home');
        }
        else{
            setModalState(true);
            // Mostrar mensaje de error
            //alert("Usuario o contraseña incorrectos");
        }
    }

  return (
    <Container>
        <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
            <div className='ctr'>
                <img src="https://www.enroll-u.com/_i/1/7/7/4ecd9be0-eec4-11e9-9992-0231b47980f0.jpeg"
                 alt="Logo UPS" width="150px" />
            </div>
        <Form ref={form} onSubmit={envioDatos}>
            <Form.Group className='mb-2'>
                <Form.Label htmlFor='user'>Usuario</Form.Label>
                <Form.Control type="text" id='user' name='user' placeholder="Usuario" />
            </Form.Group>

            <Form.Group className='mb-2'>
                <Form.Label htmlFor='password'>Contraseña</Form.Label>
                <Form.Control type="password" id='password' name='password' placeholder="Contraseña" />
            </Form.Group>

            <div className='ctr'>
            <Button type="submit">
                Iniciar sesión
            </Button>
            </div>

        </Form>
        <InformativeModal title='Información de inicio de sesion'
                          icon ={icon}
                          message= 'El usuario o la contraseña es incorrecta'
                          show={modalState}
                          onHide={() => setModalState(false)}/>
        </Col>
        <Col sm={4}></Col>
        </Row>
    </Container>
  )
}
