import React, { Component } from 'react';
import ShowHogDetails from './ShowHogDetails'
class ShowHog extends Component {
  state = { show: false}
  clickHog=()=>{
    this.setState({show: !this.state.show})
  }
  render(){
    return(
      <li onClick={this.clickHog}>
        <h2>{this.props.hog.name}</h2>
            <img src={require('../hog-imgs/' + this.props.hog.name.toLowerCase().split(" ").join("_") + '.jpg')} alt={this.props.hog.name}/>
            {this.state.show ?  <ShowHogDetails hog={this.props.hog} /> : null}
            <br/>
      </li>
    )//return
  }//render
}//class
export default ShowHog
