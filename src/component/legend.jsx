import React from "react";
import { DiscreteColorLegend } from "react-vis";

const ITEMS = [
  { title: "平均成绩", color: "DimGray" },
  {
    title: "科目成绩",
    color: "rgb(18, 147, 154)",
    strokeWidth: 14,
    overflow: "visible"
  }
];

const Legend = () => {
  return (
    <DiscreteColorLegend
      orientation="horizontal"
      width={400}
      items={ITEMS}
      style={{
        //   borderColor: "DimGray",
        // borderWidth: "1px",
        paddingLeft: "50px"

        // display: "inline-block"
        //   borderStyle: "solid"
      }}
    />
  );
};

export default Legend;
