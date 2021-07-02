import React, { Component } from 'react'
import Link from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Triforce of Trivia</h1>
                    <Link to="/">Home</Link>

                    <Link to="/signin"><div>Signin</div></Link>

                    <Link to="/signup"><div>Signup</div></Link>
            
                </header>
            </div>
        )
    }
}
