import React, { useState, useCallback } from "react";
import Routing from "./Routing";
import Home from "./Home";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="cover">
          <div className="head">BAGDATYAN</div>
          <div className="anm-strok"></div>
        </div>

        <div className="main-section">
          <Routing />
        </div>
      </div>
    );
  }
}

export default App;
