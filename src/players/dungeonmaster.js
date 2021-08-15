import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class DungeonMaster extends Component {
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
            <div className="dungeonMaster player">           
                <div className="imageWrapper">
                    <div className="imageContainer">
                        <div className="innerBorder">
                            <h1 className="dmTitle playerTitle">Dungeon Master</h1>
                            <div className="dmLeft playerImgLeft"></div>
                            <div className="dmRight playerImgRight"></div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>The Dungeon Master</h1>
                        <p>
                            Played by Matthew Briggs (GeeksCodex)
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default DungeonMaster;