import React, { Component } from 'react';

class ShowHog extends Component {
  render(){
    return(
      <li>
        <h2>{this.props.hog.name}</h2>
            <img src={require('../hog-imgs/' + this.props.hog.name.toLowerCase().split(" ").join("_") + '.jpg')} alt={this.props.hog.name}/>
            
      </li>
    )//return
  }//render
}//class
export default ShowHog
