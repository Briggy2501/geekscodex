import React, { Component } from 'react';
import Caporius from './players/caporius';
import DungeonMaster from './players/dungeonmaster';
import Em from './players/em';
import Fannybaws from './players/fannybaws';
import Ghershah from './players/ghershah';
import Osgur from './players/osgur';
import Solgra from './players/solgra';
import Wshareed from './players/wshareed';
 
class EbonDeath extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentPlayer: 'Dungeon Master'
        }
    }

    componentDidMount () {
        this.props.handleBackground('dungeonMaster');
    }

    getPlayer(){
        let component;
        switch (this.state.currentPlayer){
            case 'Caporius' :
                component = <Caporius/>;
                break;
            case 'Dungeon Master':
                component = <DungeonMaster/>
                break;
            case 'Em' :
                component = <Em/>;
                break;
            case 'Fannybaws' :
                component = <Fannybaws/>;
                break;
            case 'Ghershah' :
                component = <Ghershah/>;
                break;
            case 'Osgur' :
                component = <Osgur/>;
                break;
            case 'Solgra' :
                component = <Solgra/>;
                break;
            case 'wShareed' :
                component = <Wshareed/>;
                break;
            default:
                component = <DungeonMaster/>
                break;
        }
        return component;
    }
    
    render(){
        return (
            <div className="ebondeath main">
                <div className="logo"></div>              

                {this.getPlayer()}
            </div>
        );
    }
}

export default EbonDeath;