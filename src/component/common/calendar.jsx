import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    day: "2018-06-29",
    value: 382
  },
  {
    day: "2017-09-28",
    value: 14
  },
  {
    day: "2017-09-26",
    value: 243
  },
  {
    day: "2015-05-21",
    value: 132
  },
  {
    day: "2018-05-15",
    value: 68
  },
  {
    day: "2016-11-11",
    value: 237
  },
  {
    day: "2016-05-01",
    value: 189
  },
  {
    day: "2017-05-04",
    value: 338
  },
  {
    day: "2015-07-25",
    value: 398
  },
  {
    day: "2016-08-07",
    value: 322
  },
  {
    day: "2015-12-25",
    value: 234
  },
  {
    day: "2017-05-08",
    value: 333
  },
  {
    day: "2017-11-10",
    value: 299
  },
  {
    day: "2017-03-28",
    value: 110
  },
  {
    day: "2018-07-08",
    value: 74
  },
  {
    day: "2016-03-11",
    value: 34
  },
  {
    day: "2016-07-09",
    value: 271
  },
  {
    day: "2016-01-07",
    value: 58
  },
  {
    day: "2017-01-23",
    value: 356
  }
];
const Calendar = ({ data1 /* see data tab */ }) => (
  <ResponsiveCalendar
    data={data}
    from="2015-03-01"
    to="2015-03-02"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{
      top: 40,
      right: 40,
      bottom: 40,
      left: 40
    }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left"
      }
    ]}
  />
);

export default Calendar;
