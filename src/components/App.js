import React, { Component } from 'react';
import '../App.css';
// import Nav from './Nav'
import Hogs from '../porkers_data'
// import Hog from './Hog.js'
import Selector from './Selector.js'
import ShowHogs from './ShowHogs.js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      // hogs: Hogs
      hogs: [],
      filteredHogs: [],
      filter: ""
    }


  }


  // < Nav/>
    // <img src="./src/hog-imgs/porkchop.jpg"/>
  handleSelect=(e)=>{
    // console.log(e.target.value);
    this.setState({filter: e.target.value},()=>{
      console.log("app.handleSelect");
      console.log(this.state.filter);
      //In the callback call render? no
      //change the state somehow
      
    })//setState
  }//handleSelect
  hogFilter=()=>{
    let filteredHogs = []
    if(this.state.filter === 'weight'){}
    // else if(this.state.filter === 'name'){}
    // else if(this.state.filter === 'greased'){}
    else { //undefined or all
      filteredHogs = this.state.hogs
    }//end else
    this.setState({filteredHogs: filteredHogs},()=>{
      console.log("callback from hogFilter");
      console.log(this.state.filteredHogs);
    })

  }//hogFilter
  componentDidMount(){
    console.log("Component mounted");
    //get hogs, add to state
    // let hogs = this.state.hogs.map((hog)=>{
    //   return < Hog hog={hog}/>
    //
    // })
    // console.log(Hogs);//this hogs is from the api
    this.setState({hogs: Hogs},()=>{
      console.log("callback from setState of componentDidMount");
      this.hogFilter()
    })//end setState
    // console.log(this.state.hogs);

  }//componentDidMount
  render() {
    console.log(this.state.hogs)
    return (
      <div className="App">
      <Selector handleSelect={this.handleSelect}/>
      <ShowHogs hogs={this.state.filteredHogs}/>
      </div>
    )
  }
}

export default App;
