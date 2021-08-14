import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Twitch extends Component {
    constructor() {
        super();
    
    }

    componentDidMount () {

    }
    
    render(){
        return (
            <div className="twitch main">
                <div className="logo"></div>              

                <div className="twitchStream">
                    <ReactPlayer
                        url="https://www.twitch.tv/GeeksCodex"
                        playing={true}
                        pip={true}
                        controls
                    />
                </div>
            </div>
        );
    }
}

export default Twitch;