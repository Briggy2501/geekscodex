import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Fannybaws extends Component {
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
            <div className="fannybaws player">           
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <div className="innerBorder">
                            <h1 className="fannybawsTitle playerTitle">Fannybaws</h1>
                            <div className="fannybawsLeft playerImgLeft"></div>
                            <div className="fannybawsRight playerImgRight"></div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>Fannybaws</h1>
                        <p>
                            Played by <a href="http://www.twitch.tv/Russell_TheDude" target="_blank" rel="noopener">Russell_TheDude</a>
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Fannybaws;