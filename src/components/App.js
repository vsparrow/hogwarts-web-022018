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
      hogs: [],
      filteredHogs: [],
      filter: ""
    }//state
  }//constructor

  handleSelect=(e)=>{
    this.setState({filter: e.target.value},()=>{this.hogFilter()})//setState
  }//handleSelect
  hogFilter=()=>{
    let filteredHogs = []
    if(this.state.filter === 'weight'){filteredHogs = this.hogSort('weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water')}
    else if(this.state.filter === 'name'){filteredHogs = this.hogSort("name")}
    else if(this.state.filter === 'greased'){filteredHogs = this.state.hogs.filter(hog => hog.greased === true)}
    else { //undefined or all
      filteredHogs = this.state.hogs
    }//end else
    this.setState({filteredHogs: filteredHogs},()=>{})
  }//hogFilter
  hogSort=(keyName)=>{
    let array = [...this.state.hogs]
    array.sort((a,b)=>{
      let keyA = a[keyName]
      let keyB = b[keyName]
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
    })
    return array
  }//hogSort
  componentDidMount(){
    this.setState({hogs: Hogs},()=>{
      this.hogFilter()
    })//end setState
  }//componentDidMount
  render() {
    return (
      <div className="App">
      <Selector handleSelect={this.handleSelect}/>
      <ShowHogs hogs={this.state.filteredHogs}/>
      </div>
    )
  }
}

export default App;
