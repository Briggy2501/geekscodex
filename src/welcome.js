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
            <div className="welcome main">
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

                <div className="text">
                    <div className="textTop"></div>
                    <div className="textContent">
                        Angel subtype aquatic subtype armor bonus class confused copper piece cover critical roll death attack diminutive disease dungeon master energy charge ethereal fortitude save gaze lawful mundane paladin point of origin racial bonus renewal domain shield bonus sickened skill rank spell descriptor staggered storm domain telepathic link.
                        <br />
                        5-foot step ability modifier cleric colossal conjuration creature falling objects half speed hit ooze type overlap paralyzed plane of shadow portal domain repose domain scalykind domain smoke effects sorcerer spell preparation suffering domain unarmed strike untrained. Ability check bard catching on fire character level climb cold subtype dispel domain engaged falling free action full-round action hardness heat dangers lava effects masterwork ranger spell descriptor spell failure suffering domain total cover trample turning check war domain.
                        <br />
                        Aquatic subtype calling subschool check cleric continuous damage fatigued fire domain ice effects level adjustment manufactured weapons melee attack melee weapon natural powerful charge reflex save skill standard action swallow whole threat range trained.
                        <br />
                        Archon subtype augmented subtype bonus compulsion constrict energy charge good domain immunity kind melee prerequisite shadow subschool sorcerer threat.
                    </div>
                    <div className="textBottom"></div>
                </div>
            </div>
        );
    }
}

export default Welcome;