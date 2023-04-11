import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Outlet, useNavigate } from 'react-router-dom'

export const Layout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/', { replace: true });
    }

    return (
      <div>
        <Navbar bg='black' variant='dark'>
            <Container>
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/home/friends">Friends</Nav.Link>
                    <Nav.Link >
                    <div onClick={logout}>
                        Cerrar sesión
                    </div>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <section>
            <Outlet/>
        </section>

      </div>
    )
}