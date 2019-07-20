import React from "react";
import Header from "./header.jsx";
import * as d3 from "d3";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
  LineSeries,
  LineMarkSeries,
  Hint
} from "react-vis";
import Card1 from "./common/card.jsx";
import { Col, Row } from "antd";
import BarChart from "./common/barChart.jsx";

const width = 600,
  height = 342;

export default class ChengJi extends React.Component {
  state = {
    enter: false,
    subjects: [
      {
        name: "政治"
      },
      {
        name: "技术"
      },
      {
        name: "数学"
      },
      {
        name: "语文"
      },
      {
        name: "英语"
      },
      {
        name: "地理"
      },
      {
        name: "历史"
      },
      {
        name: "物理"
      },
      {
        name: "化学"
      },
      {
        name: "生物"
      },
      {
        name: "音乐"
      },
      {
        name: "体育"
      },
      {
        name: "通用技术"
      },
      {
        name: "美术"
      },
      {
        name: "1B模块总分"
      },
      {
        name: "信息技术"
      }
    ],
    subj: "",
    barData: [],
    labelData: [],
    averageData: []
    // curTerm: ""
  };
  // componentDidMount = () => {
  //   this.getData(this.state.subj);
  // };
  //先将传来的数据组织成map的形式,key为subject

  getData = subj => {
    const { chengji } = this.props;
    const Data = chengji["$" + subj].map(item => {
      return { x: item.exam_numname, y: item.mes_Score };
    });
    const uniqueBarData = d3
      .nest()
      .key(d => d.x)
      .rollup(d => d[0])
      .entries(Data);
    const barData = uniqueBarData.map((d, i) => ({
      x: i,
      title: d.value.x,
      y: d.value.y
    }));
    const labelData = barData.map((d, idx) => ({
      x: d.x,
      y: d.y,
      label: d.y.toString(),
      xOffset: -7
    }));
    this.setState({
      barData: barData,
      labelData: labelData,
      averageData: barData
    });
  };
  onHandleSubjectChange = subject => {
    console.log(subject);
    this.setState({ subj: subject });
    this.getData(subject);
    // const { barData } = this.state;
    // const test = barData.map(item => item.x).sort();
    // this.setState({ test: test });
  };

  render() {
    const {
      subjects,
      barData,
      labelData,
      averageData,
      subj
      // curTerm
    } = this.state;
    const { curTerm, onHandleBarClick } = this.props;
    return (
      <Card1 height={430}>
        <Row>
          <Col>
            <Header
              subjects={subjects}
              width={width}
              selected={subj}
              onHandleSubjectChange={this.onHandleSubjectChange}
              curTerm={curTerm}
            />
          </Col>
          <Col>
            <BarChart
              width={width}
              height={height}
              barData={barData}
              labelData={labelData}
              averageData={averageData}
              onHandleBarClick={onHandleBarClick}
            />
          </Col>
        </Row>
      </Card1>
    );
  }
}
