import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Users from './Users'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Posts from './Posts'
export default function Layout() {
    return (
        <div>
            <Router>
            <Navbar/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/posts" component = {Posts}></Route>
            <Route path="/users" component={Users}></Route>
            </Router>
        </div>
    )
}