import React, { useContext } from 'react'
import { AuthContext } from './AuthContextWrapper';
import { useLocation, useNavigate } from 'react-router-dom';
import { withAuth } from './withAuth';

function Profile() {
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate= useNavigate();
  return (
    <div>
        <div>Profile</div>
        <button onClick={()=>{
          setLoggedIn((prev)=>!prev);
          navigate("/login")
        }}>Logout</button>
    </div>
    
  )
}

export default withAuth(Profile);