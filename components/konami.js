import { Component } from 'react';
import PropTypes from 'prop-types';

export default class konami extends React.Component {
  handleKeyPress(event) {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }
  render(){
       return(
           <div>
             <input type="text" id="one" onKeyPress={this.handleKeyPress} />
          </div>
       );
  }
}
