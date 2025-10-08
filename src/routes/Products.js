import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        <input placeholder='Search Products'></input>
        <nav style={{display:'flex', gap:"10px", padding:'10px'}}>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products