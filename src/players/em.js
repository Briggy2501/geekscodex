import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Em extends Component {
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
            <div className="em player">           
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <div className="innerBorder">
                            <h1 className="emTitle playerTitle">Em</h1>
                            <div className="emLeft playerImgLeft"></div>
                            <div className="emRight playerImgRight"></div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>Em</h1>
                        <p>
                            Played by <a href="http://www.twitch.tv/ViolinSolo" target="_blank" rel="noopener">ViolinSolo</a>
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Em;