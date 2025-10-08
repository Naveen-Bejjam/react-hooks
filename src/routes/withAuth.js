import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContextWrapper';

export function withAuth(Component) {
    
  return function(props){
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
    if(!isLoggedIn){
        return <Navigate to="/login"></Navigate>
    }
    return <Component {...props}></Component>
  }
}

