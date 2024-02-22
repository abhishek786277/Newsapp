import React, { Component } from "react";
import NavBar from "./Navbar";
import News from "./News";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pagesize={5}/>
      </div>
    );
  }
}
