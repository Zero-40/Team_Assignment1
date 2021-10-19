import React, { Component } from "react";
import Vamsi from "./Vamsi";
import Nameparent from "./Nameparent";
import Deals from "./Deals";

class Homepage extends React.Component {
    render() {
      return (
          <div className="App" > 
          
          
          <Vamsi/>
          <Nameparent/>
          <Deals/>
       </div>
      );
    }
  }
  export default Homepage;