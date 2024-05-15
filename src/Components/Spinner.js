import React, { Component } from "react";
import loadingBar from '../loadingBar.gif'
export class Spinner extends Component {
  render() {
    return (
      <div  className="text-center" >
        <img src={loadingBar} style={{height:"20px",width:"auto"}} alt=""/>
        </div>
    );
  }
}

export default Spinner;
