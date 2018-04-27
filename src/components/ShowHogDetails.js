import React, { Component } from 'react';

class ShowHog extends Component {

  render(){
    console.log('ShowHogDetails');
    console.log(this.props.hog);
    return(
      <div>
        "Hi"
        <div>Specialty: {this.props.hog.specialty}</div>
        <div>{this.props.hog.greased ? "Greased" : "Not Greased"}</div>
        <div>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</div>
        <div>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</div>

      </div>
    )
  }
}//class
export default ShowHog
//
// specialty: 'Mediocre magic',
// greased: false,
// 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
// 'highest medal achieved': 'bronze'
