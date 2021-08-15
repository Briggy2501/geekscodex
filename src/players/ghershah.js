import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Ghershah extends Component {
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
            <div className="ghershah player">           
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <div className="innerBorder">
                            <h1 className="ghershahTitle playerTitle">Ghershah</h1>
                            <div className="ghershahLeft playerImgLeft"></div>
                            <div className="ghershahRight playerImgRight"></div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>Ghershah</h1>
                        <p>
                            Played by <a href="http://www.twitch.tv/Guitarofcr" target="_blank" rel="noopener">GuitarofCR</a>
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Ghershah;