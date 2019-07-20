import React, { Component } from "react";
import { ResponsiveRadar, Radar } from "@nivo/radar";
import Card1 from "./common/card";
import Select1 from "./common/select";
import { Col, Row, Divider } from "antd";
import CheckBox1 from "./common/checkbox";
import Table1 from "./common/table";
import "../css/style.css";
import * as d3 from "d3";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
//雷达图+select选择
const checkBoxData = ["平均分", "得分率", "顶顶顶"];
class MyResponsiveRadar extends Component {
  data = [
    {
      taste: "Chinese",
      平均分: 112,
      成绩: 105,
      得分率: 98
    },
    {
      taste: "Math",
      平均分: 24,
      成绩: 94,
      得分率: 59
    },
    {
      taste: "Science",
      平均分: 35,
      成绩: 103,
      得分率: 25
    },
    {
      taste: "English",
      平均分: 66,
      成绩: 30,
      得分率: 52
    }
  ];
  // selectData = [
  //   { name: "第一学期" },
  //   { name: "第二学期" },
  //   { name: "第三学期" }
  // ];

  render() {
    const { radarData, curTerm } = this.props;
    return (
      <Card1>
        <Row style={{ height: 250 }}>
          <ResponsiveRadar
            data={radarData}
            keys={["z_score", "t_score"]}
            indexBy="subj"
            maxValue="auto"
            margin={{
              top: "70",
              right: 80,
              bottom: 40,
              left: 80
            }}
            // tooltipFormat={(value, ...args) => {
            //   console.log("value", args);
            //   return (
            //     Number(value).toLocaleString("en-US", {
            //       minimumFractionDigits: 2
            //     }) + "$"
            //   );
            // }}
            // tooltip={(...args) => {
            //   console.log("args", args);
            // }}
            curve="linearClosed"
            borderWidth={2}
            borderColor="inherit"
            gridLevels={4}
            gridShape="circular"
            gridLabelOffset={20}
            enableDots={true}
            dotSize={8}
            dotColor="inherit"
            dotBorderWidth={0}
            dotBorderColor="#ffffff"
            // enableDotLabel={true}
            // dotLabel="value"
            // dotLabelYOffset={-12}
            colors="nivo"
            colorBy="key"
            fillOpacity={0.1}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            legends={[
              {
                anchor: "top-left",
                direction: "row",
                translateX: -50,
                margin: "top",
                translateY: -60,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: "#999",
                symbolSize: 12,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000"
                    }
                  }
                ]
              }
            ]}
          />
        </Row>
        <Row style={{ marginLeft: "20%", fontSize: 1 }} id="card">
          <CheckBox1 checkBoxData={checkBoxData} style={{ lineHeight: 1 }} />
        </Row>
        <Row>
          <Divider style={{ marginTop: 5 }} />
          <Table1 />
        </Row>
      </Card1>
    );
  }
}

export default MyResponsiveRadar;
