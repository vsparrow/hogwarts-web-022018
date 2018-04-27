import React, { Component } from 'react';
class Selector extends Component {

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
