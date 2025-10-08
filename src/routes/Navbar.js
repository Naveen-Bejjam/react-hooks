import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './AuthContextWrapper';


function Navbar() {
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
       
    console.log(isLoggedIn, "naveen")
  return (
    <nav style={{background:"lightblue", padding:'10px', display:"flex", gap:"10px"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!isLoggedIn && 
            
            <NavLink to="/login">Login</NavLink>
        }
        
      </nav>
  )
}

export default Navbar