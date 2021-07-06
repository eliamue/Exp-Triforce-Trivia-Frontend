import React, { Component } from 'react';
import './Zombie.css'

export default class Z1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgImage: "url(../../zombies/z10.jpg)",
            backgroundSize: "cover",
            height: "600px",
            backgroundRepeat: "no-repeat",
        }
    }
    
    boxClick = (e) => {
        this.setState({
        bgImage: "url(../../zombies/z10.jpg)",
        })
    }

    render() {
        return (
        <div className="triv">
                <button 
                    className="true">True
                </button>
                <div 
                    className="boxClickCss" 
                    style={{
                    backgroundImage: this.state.bgImage,
                    backgroundSize: "cover",
                    height: "600px",
                    backgroundRepeat: "no-repeat",
                    overflow: "visible"
                    }}
                    onClick={this.boxClick}><button>False</button>
                </div>

                </div>
        )
    }
}

