import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries,
  LineSeries,
  LineMarkSeries,
  Hint
} from "react-vis";

class BarChart extends Component {
  state = {
    enter: false
  };
  render() {
    const {
      width,
      height,
      barData,
      labelData,
      averageData,
      onHandleBarClick
    } = this.props;
    return (
      <React.Fragment>
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
          <VerticalBarSeries
            data={barData}
            barWidth={0.5}
            onValueClick={(datapoint, event) => onHandleBarClick(datapoint)}
          />

          <LineMarkSeries
            data={averageData}
            curve={"linear"}
            lineStyle={{ stroke: "DimGray", opacity: 0.8, fill: "none" }}
            markStyle={{ fill: "LightSeaGreen ", stroke: "none" }}
            onNearestXY={(datapoint, event) => {
              this.setState({ enter: true, value: datapoint });
              // does something on mouseover
              // you can access the value of the event
            }}
          />
          <LabelSeries
            data={labelData}
            style={{ fill: "white" }}
            labelAnchorX="start-alignment"
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
                  fontSize: 7,
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
      </React.Fragment>
    );
  }
}

export default BarChart;
