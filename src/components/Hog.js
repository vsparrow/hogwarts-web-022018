import React, { Component } from 'react';
class Hog extends Component {
  // constructor(props){
  //   super(props)
  //   console.log(props);
  // }

  render(){
    makepigimage=()=>{
      // return
      let  namesplit=this.props.hog.name.toLowerCase().split(" ").join("_") +".jpg"
      console.log(namesplit);
    }

    return(

      <li>
      <img src="{this.makepigimage}">
      {this.props.hog.name}</li>
    )
  }

}
export default Hog
