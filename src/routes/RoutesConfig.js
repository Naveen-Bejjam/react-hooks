import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Profile from './Profile'
import Default from './Default'
import Products from './Products'
import Featured from './Featured'
import NewProducts from './NewProducts'
import Users from './Users'
import UserDetails from './UserDetails'
import Admin from './Admin'
import Login from './Login'
// import About from './About'
const LazyAbout = React.lazy(() => import("./About"))


function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/about" element={<About />}></Route> */}
            <Route path="about" element={
                <React.Suspense fallback="loading">
                    <LazyAbout />
                </React.Suspense>
            }></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path='products' element={<Products />}>
                <Route index element={<Featured />}></Route>
                <Route path="featured" element={<Featured />}></Route>
                <Route path="new" element={<NewProducts />}></Route>
            </Route>
            <Route path="users" element={<Users />}>
                <Route path=":userId" element={<UserDetails />}></Route>
                <Route path='admin' element={<Admin />}></Route>
            </Route>
            <Route path="profile" element={<Profile/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="*" element={<Default />} />
        </Routes>
    )
}

export default RoutesConfig