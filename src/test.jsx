import React, { Component } from "react";
class Test extends Component {
  state = {};
  getUserProfile = () => {
    fetch("/teacher/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      mode: "cors",
      cache: "default"
    })
      .then(r => r.json())
      .then(response => {
        // this.setState({userData: response.user_data})
        console.log(response);
      });
  };
  componentWillMount() {
    this.getUserProfile();
  }
  render() {
    return <div />;
  }
}

export default Test;
