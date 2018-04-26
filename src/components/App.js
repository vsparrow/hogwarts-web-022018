import React, { Component } from 'react';
import '../App.css';
// import Nav from './Nav'
import Hogs from '../porkers_data'
// import Hog from './Hog.js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: Hogs
    }


  }

  // let hogs = this.state.hogs.map((hog)=>{
  //   return < Hog hog={hog}/>
  //
  // })
  // < Nav/>
    // <img src="./src/hog-imgs/porkchop.jpg"/>

  render() {
    console.log(this.state.hogs)
    return (
      <div className="App">

      </div>
    )
  }
}

export default App;
