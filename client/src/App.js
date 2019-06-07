import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Title from "./Components/TitleComponent";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Neil's Assignment Attempt</h2>
        <Title />
      </div>
    );
  }
}

export default App;
