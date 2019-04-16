import React, { Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";

import Container from "./component/container";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import Test from "./test";

library.add(faStroopwafel);
class App extends Component {
  render() {
    return <Container />;
  }
}

export default App;
