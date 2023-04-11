import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, Outlet } from 'react-router-dom'

export const Friends = () => {

    const [friends, setFriends] = useState([]); // Estado para guardar los amigos

    const getFriends = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
       setFriends(data);
    }


    // Profe:
    useEffect(() => { // useEffect se ejecuta cuando se renderiza el componente para la primera vez y cada vez que cambia el estado
        getFriends(); // Obtener los amigos y guardarlos en el estado
    }, []);

  return (
<div>
    <Container>
        <Row>
            <Col sm = {4}>
                <h1>Amigos</h1>
                <ul>
                {
                    friends.map(friend => (
                    <li key={friend.id}> 
                    <Link to ={`/home/friends/${friend.id}`}>{friend.name}</Link>
                    </li>
                    ))
                }
                </ul>
            </Col>
            <Col sm = {8}>
                <Outlet>

                </Outlet>
            </Col>
        </Row>
    </Container>
    </div>
  )
}
