import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
import Styles from './Nav.module.css'


export class nav extends Component {
    render() {
        return (
            <div className={Styles.nn}>
                <ul>
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/About"> About</NavLink></li>
                    <li><NavLink to="/Product"> Product</NavLink></li>
                    <li><NavLink to="/Signup"> Signup</NavLink></li>
                </ul>
                
            </div>
        )
    }
}

export default nav