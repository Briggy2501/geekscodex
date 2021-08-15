import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Wshareed extends Component {
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
            <div className="wshareed player">           
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <div className="innerBorder">
                            <h1 className="wshareedTitle playerTitle">w'Sha'Reed</h1>
                            <div className="wshareedLeft playerImgLeft"></div>
                            <div className="wshareedRight playerImgRight"></div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>w'Sha'Reed</h1>
                        <p>
                            Played by <a href="http://www.twitch.tv/Cactusroom" target="_blank" rel="noopener">CactusRoom</a>
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Wshareed;