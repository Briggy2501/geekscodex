import React, { Component } from 'react';
import ReactPlayer from "react-player";
 
 
class Welcome extends Component {
    constructor() {
        super();

        this.e31 = 'https://www.youtube.com/watch?v=gTrQiq8EsOY';
        this.playlist = 'https://youtube.com/playlist?list=PL0H6POCQuw2G-mUiER3epzQINq7-jINbj';
    }

    componentDidMount () {
        this.props.handleBackground('welcome');
    }
    
    render(){
        return (
            <div className="welcome main">
                <div className="logo"></div>

                <div className="latest"></div>

                <div className="youtubeVideo">
                    <ReactPlayer
                        url={this.playlist}
                        playing={true}
                        pip={true}
                        controls
                    />
                </div>

                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        <h1>Welcome Traveller, you have discovered <br /> The Geeks Codex.</h1>
                        <p>
                            The Geeks Codex is a collection of works created by Matthew Briggs.
                        </p>
                        <p>
                            Included here within the archive you will find:
                            <ul>
                                <li>The Ebon Death: A D&amp;D 5th Edition Homebrew Campaign which airs live on Twitch every Wednesday at 8pm UK Time</li>
                                <li>The Ebon Death: Youtube Playlist - Catch up on previously aired Episodes</li>
                                <li>Games: A selection of Phaser Browser games</li>
                                <li>Stories &amp; Poetry - Various creative scribblings</li>
                                <li>Various coding testbeds - This site is mostly a place where I test whatever I feel like.</li>
                                <li><a href="https://github.com/Briggy2501" target="_blank">Matthew Briggs on Github</a></li>
                            </ul>
                        </p>
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Welcome;