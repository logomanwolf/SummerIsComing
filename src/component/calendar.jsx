import React, { Component } from "react";
import * as d3 from "d3";
import "../css/style.css";
class Calendar extends Component {
  state = {
    student_id: 10004
  };

  // 定义月份分割线路径
  pathMonth(t0) {
    const cellSize = 17;
    let t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(),
      w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
      d1 = t1.getDay(),
      w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
    return (
      "M" +
      (w0 + 1) * cellSize +
      "," +
      d0 * cellSize +
      "H" +
      w0 * cellSize +
      "V" +
      7 * cellSize +
      "H" +
      w1 * cellSize +
      "V" +
      (d1 + 1) * cellSize +
      "H" +
      (w1 + 1) * cellSize +
      "V" +
      0 +
      "H" +
      (w0 + 1) * cellSize +
      "Z"
    );
  }

  componentDidMount() {
    const student_id = 14454;
    let width = 960,
      height = 136,
      cellSize = 17;

    let formatPercent = d3.format(".1%"); //定义一个百分数格式函数，规定百分数精确度小数点后1位
    let kaoqintype;
    const controler_id_color = {
      "1001": 0,
      "1002": 1,
      "1003": 2,
      "99001": 3,
      "99002": 4,
      "99003": 5,
      "99004": 6,
      "99005": 7
    };
    d3.csv();
    // 定义颜色函数，使用量化比例尺映射，即定义域为连续的，从-0.05到0.05，而值域是离散的颜色值
    let color = d3.schemeCategory10;
    let svg1 = d3
      .select(".container")
      .append("svg")
      .attr("width", width)
      .attr("height", height / 2)
      .attr(
        "transform",
        "translate(" +
          (width - cellSize * 53) / 2 +
          "," +
          (height - cellSize * 7 - 30) +
          ")"
      );
    svg1
      .selectAll("#tooltip")
      .append("p")
      .classed("hidden", true);

    // 定义10个svg组，分别用来展示从1990年到2010年的数据
    let svg = d3
      .select(".container")
      .selectAll("svg")
      .data(d3.range(2017, 2020))
      .enter()
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr(
        "transform",
        "translate(" +
          (width - cellSize * 53) / 2 +
          "," +
          (height - cellSize * 7 - 1) +
          ")"
      );

    // 定义每个年份对应的group旁边的标签
    svg
      .append("text")
      //定义标签文字(年份)的位置以及文字的旋转角度、文字内容
      .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "middle")
      .text(function(d) {
        return d;
      });
    //获得到底是什么原因：
    // 定义每个年份中代表天的小方格

    let rect = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .selectAll("rect")
      //计算一组小方格的数量，调用d3的timeDays方法，获取两个时间之间的天数，例如，计算从1999年的第一天到2000年的第一天,则参数为new Date(1999,0,1)到 new Date(2000,0,1)，timeDays返回天序列
      .data(function(d) {
        return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1));
      })
      .enter()
      .append("rect")
      .attr("width", cellSize)
      .attr("height", cellSize)
      // 返回一年有多少个周，确定一组小方格的横向位置
      .attr("x", function(d) {
        return d3.timeWeek.count(d3.timeYear(d), d) * cellSize;
      })
      // 返回天，确定一组小方格的纵向位置
      .attr("y", function(d) {
        return d.getDay() * cellSize;
      })
      // 定义当前小方格上对应的日期的格式
      .datum(d3.timeFormat("%Y-%m-%d"));

    // 勾勒月份的分割线
    svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "#000")
      .selectAll("path")
      .data(function(d) {
        return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1));
      })
      .enter()
      .append("path")
      .attr("d", this.pathMonth);

    d3.csv("../data/3_kaoqin.csv", function(error, csv) {
      if (error) {
        console.log(error);
        throw error;
      }
      csv = csv.filter(item => item.bf_studentID === student_id);
      let cutTimeCSV = csv.map(item => {
        let time = d3.timeFormat("%Y-%m-%d")(
          d3.timeDay(new Date(item.DataDateTime))
        );
        //
        return {
          DataDateTime: time,
          ControllerID: item.ControllerID,
          Control_task_order_id: item.control_task_order_id
        };
      });
      // 这里的d3.nest可以参考http://blog.csdn.net/gdp12315_gu/article/details/51721988
      let color_map = d3
        .nest()
        // 以d.Date来对数据进行分组
        .key(function(d) {
          return d.DataDateTime;
        })
        // rollup函数用来获取每个组的values，因为一组为一天，只有一行数据，因此这里定义每个组的values 用d[0],即d[0].Close - d[0].Open) / d[0].Open来计算产生数值values

        // 个人理解，这里的.object()函数类似于call()函数，用来将定义的分组机制应用到csv数据上,返回分组后的对象，官网对nest().object()的解释：Applies the nest operator to the specified array, returning a nested object.有没有醍醐灌顶的感觉，哈哈
        .object(cutTimeCSV);
      // 过滤操作，挑出日期在data中的小方格（因为周六、周日没有在data中，周六周日小方格填充色为默认白色）
      rect
        .filter(function(d) {
          return d in color_map;
        })
        // 定义小方格的填充色，通过每个小方格中的values值来映射颜色函数
        .attr("fill", function(d) {
          return color[controler_id_color[color_map[d][0].ControllerID]];
        })
        .datum(function(d) {
          return color_map[d][0];
        });

      // .append("title")
      // // 定义小方格的title属性文本为 日期后面加小方格value对应的的百分比格式
      // .text(function(d) {
      //   return d + ": " + formatPercent(data[d]);
      // });
    });
    d3.csv("../data/4_kaoqintype.csv", (error, csv) => {
      if (error) {
        console.log(error);
        throw error;
      }
      let controler_id_key = d3
        .nest()
        .key(function(d) {
          return d.controler_id;
        })
        .rollup(function(d) {
          return d[0].controler_name;
        })
        .object(csv);
      let control_task_order_id_key = d3
        .nest()
        .key(function(d) {
          return d.control_task_order_id;
        })
        .rollup(function(d) {
          return d[0].control_task_name;
        })
        .object(csv);
      rect
        .on("mouseover", function(d) {
          //highlight text
          if (d3.select(this).attr("fill")) {
            d3.select(this).classed("cell-hover", true);
            //Update the tooltip position and value
            d3.select("#tooltip")
              .style("left", d3.event.pageX + 10 + "px")
              .style("top", d3.event.pageY - 10 + "px")
              .select("#date")
              .text(d.DataDateTime);
            d3.select("#item").text(
              controler_id_key["00" + d.ControllerID] +
                "(" +
                control_task_order_id_key[d.Control_task_order_id] +
                ")"
            );
            //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);
          }
        })
        .on("mouseout", function() {
          d3.select(this).classed("cell-hover", false);
          d3.select("#tooltip").classed("hidden", true);
        });
    });
  }

  render() {
    return (
      <div className="container">
        <div id="tooltip" className="hidden">
          <p>
            <span id="date" />
          </p>
          <p>
            <span id="item" />
          </p>
        </div>
      </div>
    );
  }
}

export default Calendar;
