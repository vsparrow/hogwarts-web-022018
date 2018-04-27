import React, { Component } from 'react';
class ShowHogs extends Component {
  // renderHogPic = (name)=>{
  //   // console.log(name.toLowerCase().split(" ").join("_"));
  //   let path = "./src/hog-imgs/" + name.toLowerCase().split(" ").join("_") + ".jpg"
  //   return <img src={require(path)}/>
  // }
  renderHogs = ()=>{
    // return <p>renderHogs</p>
    // let imgpathfunction =   this.renderHogPic
    // console.log(imgpathfunction);
    return this.props.hogs.map((hog)=>{
      // let imgpath = {this.renderHogPic(hog.name)}
      // let imgpath = "../hog-imgs/" + hog.name.toLowerCase().split(" ").join("_") + ".jpg"
      // console.log(imgpath);
      // return <li><h2>{hog.name}</h2> "hog pic here"</li>
      return <li key={hog.name}><h2>{hog.name}</h2>
            <img src={require('../hog-imgs/' + hog.name.toLowerCase().split(" ").join("_") + '.jpg')} alt={hog.name}/>
            </li>
    })//map
  }//renderHogs
  // <img src={require({"../hog-imgs/" + hog.name.toLowerCase().split(" ").join("_") + ".jpg"})}/> //works
  // <img src={imgpath)}/> //
  // <img src={require(`${myImg}`)} />
  render(){
    console.log("ShowHogs");
    console.log(this.props.hogs);

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
