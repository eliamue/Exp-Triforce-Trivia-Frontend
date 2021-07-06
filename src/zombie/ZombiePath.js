import React, { Component } from 'react';
import './Zombie.css';
import { Link } from 'react-router-dom';
import Zombies from './Zombies.js'

const id = Zombies.id;

export default class Trivia extends Component {
    state = {
        backgroundImage: `{getGif}z1.gif`
    }

    handleCorrectAnswer = e => {
        e.preventDefault();

        this.setState({ 
            id: id,
            backgroundImage: `url(../../zombies/z1.gif)`});
    }

    handleWrongAnswer = e => {
        e.preventDefault();

        this.setState({ 
            id: id + 1,
            backgroundImage: `url(../../zombies/z${id}.gif)`});
    }

    render() {
        return (
        <div className="triv">
            <div className="bg"
            style={{
            backgroundImage: "url(../../zombies/z1.gif)",
            backgroundSize: "cover",
            height: "600px",
            backgroundRepeat: "no-repeat",
            overflow: "visible"
            }}>
                
                    <button onClick={this.handleAnswer} className="true">True</button>
                    <button className="false"><Link to="/z1"><div>False</div></Link></button>
                </div>
            </div>
        )
    }
}

