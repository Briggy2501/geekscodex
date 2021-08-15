import React, { Component } from 'react';
import './ebondeath.css';
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
            currentPlayer: 'Dungeon Master',
            showImages: ''
        }

        this.swapPlayer = this.swapPlayer.bind(this);

    }

    componentDidMount () {
        this.props.handleBackground('dungeonMaster');
        this.delayedState();
    }

    delayedState(){
        this.setState({
            showImages: 'showImages'
        })
    }


    swapPlayer(player){
        this.setState({
            currentPlayer: player,
            showImages: ''
        })

        let that = this;
        setTimeout(function() {
            that.delayedState();
        }, 0.5 * 1000);
    }

    getPlayer(){
        let component;
        switch (this.state.currentPlayer){
            case 'caporius' :
                component = <Caporius/>;
                break;
            case 'dungeonmaster':
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
            <div className={`ebondeath main ${this.state.showImages}`}>
                <div className="logo ebonLogo">The Ebon Death</div>              

                <div className="playerMenu">
                    <button className="dungeonmaster-btn playerbtn" onClick={() => this.swapPlayer('dungeonmaster')}>Dungeon Master</button>
                    <button className="caporius-btn playerbtn" onClick={() => this.swapPlayer('caporius')}>Caporius</button>
                    <button className="em-btn playerbtn" onClick={() => this.swapPlayer('Em')}>Em</button>
                    <button className="fannybaws-btn playerbtn" onClick={() => this.swapPlayer('Fannybaws')}>Fannybaws</button>
                    <button className="ghershah-btn playerbtn" onClick={() => this.swapPlayer('Ghershah')}>Ghershah</button>
                    <button className="osgur-btn playerbtn" onClick={() => this.swapPlayer('Osgur')}>Osgur</button>
                    <button className="solgra-btn playerbtn" onClick={() => this.swapPlayer('Solgra')}>Solgra</button>
                    <button className="wshareed-btn playerbtn" onClick={() => this.swapPlayer('wShareed')}>w'Sha'Reed</button>
                </div>

                {this.getPlayer()}
            </div>
        );
    }
}

export default EbonDeath;