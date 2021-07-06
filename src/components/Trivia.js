import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const getGif = "url(../../public/zombies/)"

export default class Trivia extends Component {
    state = {
        backgroundImage: `{getGif}z1.gif`
    }

    handleAnswer = e => {
        e.preventDefault();

        this.setState({ backgroundImage: `${getGif}z$ + 1 + '.gif'`});
    }

    render() {
        return (
            <div className="triv">

                <button className="zombie"><Link to="/z"><div>Z</div></Link></button>

                <button onClick={this.handleAnswer} 
                className="werewolf">W</button>

                <button onClick={this.handleAnswer} 
                className="alien">A</button>

            </div>
        )
    }
}

