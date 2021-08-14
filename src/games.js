import React, { Component } from 'react';
 
class Game extends Component {
    render(){
        return (
            <div className="games main">
                Games go here.
                <br />
                <a href="http://www.geekscodex.net/game1">Try this old one</a><br/>
                Arrow Keys to Move.<br/>
                Z to shoot<br/>
            </div>
        );
    }
}

export default Game;