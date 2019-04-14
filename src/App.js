import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./component/calendar";
import Chengji from "./component/chengji";
import EX from "./component/example2";
import "../node_modules/react-vis/dist/style.css";
class App extends Component {
  render() {
    return <Chengji />;
  }
}

export default App;
