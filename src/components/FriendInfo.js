import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const FriendInfo = () => {
    const params = useParams();
    const [friend, setFriend] = useState({});

    const getFriend = async (signal) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`, {signal});
        const data = await response.json();
       setFriend(data);
    }

    useEffect(() => { // useEffect se ejecuta cuando se renderiza el componente para la primera vez y cada vez que cambia el estado
      const controller = new AbortController(); // Para cancelar la petición
      const signal = controller.signal;  
      
      getFriend(signal) // Obtener los amigos y guardarlos en el estado

      // cleanup function
      return () => {
        controller.abort(); // Cancelar la petición
      }

    }, [params]);

  return (
    <div>
        <h1>Información del amigo</h1>
        <p>Nombre: {friend.name}</p>
        <p>Usuario: {friend.username}</p>
        <p>Correo: {friend.email}</p>
        <p>Teléfono: {friend.phone}</p>
        <p>Sitio web: {friend.website}</p>

    </div>

  )
}
