import React, { Component } from "react";
import Mainbody from "./Mainbody";
import Midbutton from "./Midbutton";
import Mid2 from "./Mid2";

class Vamsi extends React.Component {
    render() {
      return (
          <div className="App" id ="appid"> 
          
          <Midbutton/>
          <Mid2/>
          <br></br>
          <Mainbody/>
          
       </div>
      );
    }
  }
  export default Vamsi;
  