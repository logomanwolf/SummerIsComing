import React from "react";

import { DiscreteColorLegend } from "react-vis";

const ITEMS = [
  { title: "平均成绩", color: "DimGray" },
  { title: "科目成绩", color: "rgb(18, 147, 154)", strokeWidth: 14 }
];

const Legend = () => {
  return (
    <DiscreteColorLegend
      orientation="horizontal"
      width={200}
      items={ITEMS}
      style={{
        //   borderColor: "DimGray",
        //   borderWidth: "1px",
        paddingLeft: "50px"
        //   borderStyle: "solid"
      }}
    />
  );
};

export default Legend;
