import React, { Component } from 'react';
class Selector extends Component {
  // handleSelect=(e)=>{
  //   console.log(e.target.value);
  // }
  //now being passed in by props

  render(){

    return(
      <p>
      Sort option:
      <select id = "selector" onChange={this.props.handleSelect}>
              <option value="all">ALL</option>
              <option value="greased">greased</option>
              <option value="name">name</option>
              <option value="weight">weight</option>
      </select>
      </p>
    )
  }
}
export default Selector
