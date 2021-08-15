import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Osgur extends Component {
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
            <div className="osgur player">           
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <div className="innerBorder">
                            <h1 className="osgurTitle playerTitle">Osgur</h1>
                            <div className="osgurLeft playerImgLeft"></div>
                            <div className="osgurRight playerImgRight"></div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>Osgur</h1>
                        <p>
                            Played by <a href="http://www.twitch.tv/aodhq" target="_blank" rel="noopener">Aodhq</a>
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Osgur;