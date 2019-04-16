import React from "react";
import { Checkbox, Row, Col } from "antd";
import "../../css/style2.css";
function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

const CheckBox1 = ({ checkBoxData }) => {
  return (
    <Checkbox.Group
      style={{ width: "100%" }}
      onChange={onChange}
      data={checkBoxData}
    >
      <Row>
        {checkBoxData.map(item => (
          <Col span={8} id="card">
            <Checkbox value={item} key={item}>
              {item}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
};

export default CheckBox1;
