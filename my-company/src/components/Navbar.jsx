import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Services from './Services'
import About from './About'


const Navbar = () => {
    return (
        <div style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', display:"flex", justifyContent:"center" }}>
            <ul>
                <li> <Link to="/home">Home</Link></li>
                <li> <Link to="/about">Home</Link></li>
                <li> <Link to="/services">Home</Link></li>
                <li> <Link to="/contact">Home</Link></li>

            </ul>
        </div>
    )
}

export default Navbar
