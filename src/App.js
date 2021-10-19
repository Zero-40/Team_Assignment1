import React, { Component } from "react";
import Header from "./Header";
import Homepage from "./Homepage";

class App extends React.Component {
  render() {
    return (
        <div className="App" id ="appid"> 
        <Header/><br></br><br></br>
        <Homepage/>
        
        
        
     </div>
    );
  }
}
export default App;
