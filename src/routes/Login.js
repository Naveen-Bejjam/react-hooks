import React, { useContext } from 'react'
import {  AuthContext } from './AuthContextWrapper';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
   const navigate = useNavigate();

    return (
        <div>
            <div>Login</div>
            <button onClick={()=>{setLoggedIn((prev)=>!prev);navigate("/profile")}}>Login</button>
        </div>
    )
}

export default Login