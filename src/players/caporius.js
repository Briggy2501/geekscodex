import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Caporius extends Component {
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
            <div className="caporius player">           
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <div className="innerBorder">
                            <h1 className="capoTitle playerTitle">Caporius Kerrhylon</h1>
                            <div className="capoLeft playerImgLeft"></div>
                            <div className="capoRight playerImgRight"></div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>Caporius Kerrhylon</h1>
                        <p>
                            Played by <a href="http://www.twitch.tv/thirdfretcapo" target="_blank" rel="noopener">ThirdFretCapo</a>
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Caporius;