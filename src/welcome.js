import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Welcome extends Component {
    constructor() {
        super();
    
    }

    componentDidMount () {

    }
    
    render(){
        return (
            <div className="welcome">
                <div className="logo"></div>

                <div className="latest"></div>

                <div className="youtubeVideo">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=gTrQiq8EsOY"
                        playing={true}
                        pip={true}
                        controls
                    />
                </div>
            </div>
        );
    }
}

export default Welcome;