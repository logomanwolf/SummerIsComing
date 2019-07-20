import React, { Component } from "react";
import { Row, Col } from "antd";
import Portrait from "./portrait";
import ChengJi from "./chengji";
import MyResponsiveRadar from "./radarChart";
import Calendar from "./common/calendar";
import Card1 from "./common/card";
import * as d3 from "d3";

class Container extends Component {
  state = { student: {}, chengji: [], curTerm: "", radarData: [] };
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
    fetch("/grade/14454")
      .then(r => {
        console.log(r);
        return r.json();
      })
      .then(response => {
        console.log("fetch finished");
        this.setState({
          chengji: response
        });
        //获取data
      });
  }
  GroupChengjiBySubjects = chengji => {
    const subject_nest = d3
      .nest()
      .key(d => d.mes_sub_name)
      .sortValues((a, b) => d3.ascending(a.exam_term, b.exam_term))
      .map(chengji, d3.map);
    return subject_nest;
  };
  GroupChengjiByExamName = chengji => {
    const subject_nest = d3
      .nest()
      .key(d => d.exam_numname)
      // .sortValues((a, b) => d3.ascending(a.exam_term, b.exam_term))
      .map(chengji, d3.map);
    return subject_nest;
  };
  updateRadarData = curTerm => {
    const { chengji } = this.state;
    if (curTerm === "") return;
    const group = this.GroupChengjiByExamName(chengji);
    const Data = group["$" + curTerm].map(item => {
      return {
        subj: item.mes_sub_name,
        z_score: item.mes_Z_Score,
        t_score: item.mes_T_Score
      };
    });
    console.log("Data", Data);
    const uniqueBarData = d3
      .nest()
      .key(d => d.subj)
      .rollup(d => d[0])
      .entries(Data);
    console.log("unique", uniqueBarData);
    const radarData = uniqueBarData.map(item => {
      const value = item.value;
      const scale = d3
        .scaleLinear()
        .domain([-15, 10])
        .range([0, 100]);
      return {
        subj: value.subj,
        z_score: scale(value.z_score),
        t_score: item.value.t_score,
        real_z_score: value.z_score
      };
    });
    console.log("radarData", radarData);
    this.setState({ radarData: radarData });
  };
  onHandleBarClick = curTerm => {
    this.setState({ curTerm: curTerm.title });
    this.updateRadarData(curTerm.title);
    console.log(curTerm.x);
  };
  render() {
    const { student, chengji, curTerm, radarData } = this.state;
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
            <ChengJi
              chengji={this.GroupChengjiBySubjects(chengji)}
              onHandleBarClick={this.onHandleBarClick}
              curTerm={curTerm}
            />
          </Col>
          <Col span={6}>
            <MyResponsiveRadar curTerm={curTerm} radarData={radarData} />
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
