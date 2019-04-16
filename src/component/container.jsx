import React, { Component } from "react";
import { Row, Col } from "antd";
import Portrait from "./portrait";
import ChengJi from "./chengji";
import MyResponsiveRadar from "./radarChart";
import Calendar from "./common/calendar";
import Card1 from "./common/card";

class Container extends Component {
  state = { student: {} };
  componentDidMount() {
    fetch("/users/14454")
      .then(r => {
        console.log(r);
        return r.json();
      })
      .then(response => {
        console.log("get data finished!");
        console.log(response);
        this.setState({
          student: response
        });
      });
  }
  render() {
    const { student } = this.state;
    return (
      <React.Fragment>
        <Row
          gutter={10}
          justify="space-between"
          style={{ background: "#ECECEC", height: 430 }}
        >
          <Col span={6}>
            <Portrait student={student} />
          </Col>
          <Col span={12}>
            <ChengJi student={student} />
          </Col>
          <Col span={6}>
            <MyResponsiveRadar />
          </Col>
        </Row>
        <Row>
          <Card1>
            <div style={{ height: 150 }}>
              <Calendar />
            </div>
          </Card1>
        </Row>
      </React.Fragment>
    );
  }
}

export default Container;
