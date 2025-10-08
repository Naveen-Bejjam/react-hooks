import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
        <nav style={{display:'flex', gap:'10px'}}>
            <Link to="1">User1</Link>
            <Link to="2">User2</Link>
            <Link to="3">User3</Link>
        </nav>
        <Outlet/>
        <div>
            <button onClick={()=>setSearchParams({filter:"active"})}>Active Users</button>
            <button onClick={()=>setSearchParams({})}>Reset</button>
        </div>
        {searchParams.get("filter")==="active"?"showing Active Users":"showing all users"}
    </div>
  )
}

export default Users