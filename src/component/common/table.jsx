import React from "react";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Chinese",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Math",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Science",
    dataIndex: "address",
    key: "address"
  }
];

const data = [
  {
    key: "1",
    name: 10,
    age: 32,
    address: 10
  }
];

const Table1 = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered={true}
      size="small"
    />
  );
};

export default Table1;
