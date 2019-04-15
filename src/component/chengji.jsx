import React from "react";
import Header from "./header";
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
const greenData = [
  { x: "2015年期末考试", y: 60, label: 100 },
  { x: "2016年期末考试", y: 90, label: 90 },
  { x: "2017年期末考试", y: 95, label: 95 }
];
const average = [
  { x: "2015年期末考试", y: 80 },
  { x: "2016年期末考试", y: 80 },
  { x: "2017年期末考试", y: 95 }
];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: d.y,
  label: d.y.toString()
}));

const subjects = ["Chinese", "math", "English"];
const width = 500,
  height = 400;
export default class Example extends React.Component {
  state = {
    enter: false
  };

  render() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <Header subjects={subjects} width={width} />
        <XYPlot
          xType="ordinal"
          width={width}
          height={height}
          onMouseLeave={() => this.setState({ enter: false })}
        >
          <VerticalGridLines />
          <HorizontalGridLines />

          <XAxis />
          <YAxis />
          <BarSeries data={greenData} barWidth={0.5} />
          <LabelSeries data={labelData} style={{ fill: "white" }} />
          <LineMarkSeries
            data={average}
            curve={"linear"}
            lineStyle={{ stroke: "DimGray", opacity: 0.8 }}
            markStyle={{ fill: "LightSeaGreen ", stroke: "none" }}
            onNearestXY={(datapoint, event) => {
              this.setState({ enter: true, value: datapoint });
              // does something on mouseover
              // you can access the value of the event
            }}
          />
          {this.state.enter ? (
            <Hint
              value={this.state.value}
              style={{
                opacity: 0.5,
                wordWrap: "break-word",
                borderRadius: "8px"
              }}
            >
              <div
                style={{
                  fontSize: 8,
                  padding: "10px",
                  color: "white",
                  background: "black",
                  borderRadius: "10px"
                }}
              >
                {this.state.value.y}
              </div>
            </Hint>
          ) : null}
        </XYPlot>
      </div>
    );
  }
}
