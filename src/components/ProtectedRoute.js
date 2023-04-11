import React from 'react'
import { Navigate } from 'react-router-dom' // Se usa para redireccionar cuando no hay token

export const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem('token'); // Obtener token del localStorage
    if (token === null) {
        return <Navigate to="/" /> // Redireccionar a la página de iniciar sesión
    }
    return children; // Mostrar el contenido de la ruta
}