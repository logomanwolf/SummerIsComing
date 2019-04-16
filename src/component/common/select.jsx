import React from "react";
import { Select } from "antd";

const Option = Select.Option;

const Select1 = ({ data, onHandleSubjectChange, selected }) => {
  return (
    <Select
      defaultValue=""
      style={{ width: 120 }}
      onSelect={value => {
        // console.log(value);
        return onHandleSubjectChange(value);
      }}
      value={selected}
    >
      {data.map(item => (
        <Option value={item.name} key={item.name}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default Select1;
