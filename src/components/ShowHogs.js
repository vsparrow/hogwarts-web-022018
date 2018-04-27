import React, { Component } from 'react';
import ShowHog from './ShowHog'
class ShowHogs extends Component {
  renderHogs = ()=>{
    return this.props.hogs.map((hog)=>{
      return <ShowHog key={hog.name} hog={hog}/>
    })//map
  }//renderHogs
  render(){
    return(
      <div id="listOfHogs">
        <p>ShowHogs</p>
        <ul>
          {this.renderHogs()}
        </ul>
      </div>
    )//return
  }//render
}//class
export default ShowHogs
