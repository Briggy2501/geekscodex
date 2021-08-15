import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Solgra extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            imageLeft: this.props.showLeft,
            imageRight: this.props.showRight
        }
    }

    componentDidMount () {

    }
    
    render(){
        return (
            <div className="solgra player">           
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <div className="innerBorder">
                            <h1 className="solgraTitle playerTitle">Solgra</h1>
                            <div className="solgraLeft playerImgLeft"></div>
                            <div className="solgraRight playerImgRight"></div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>Solgra</h1>
                        <p>
                            Played by ShliiFiddy
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Solgra;