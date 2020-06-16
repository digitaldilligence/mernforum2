import React from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
        <nav id="main-nav">
            <h3>Digital Dilligence</h3>
            <ul>
                <li><Link to="/"><a href="/">Home</a></Link></li>
                <li><Link to="/posts"><a href="/posts">Posts</a></Link></li>
                <li><Link to="/login"><a href="/login">Login</a></Link></li>
                <li><Link to="/users"><a href="/users">Users</a></Link></li>
            </ul>
            
        </nav>
        
        </div>
    )
}
