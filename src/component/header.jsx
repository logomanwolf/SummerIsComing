import React from "react";
import { Row, Col } from "antd";
import Legend from "./legend";
import Select1 from "./common/select";
import Text from "./common/text";
//用来盛放成绩图中的导航条和legend
const Header = ({ subjects, onHandleSubjectChange, selected, curTerm }) => {
  return (
    <Row align="middle">
      <Col span={10}>
        <Legend />
      </Col>
      <Col span={8}>
        <Text term={curTerm} />
      </Col>
      <Col span={6}>
        <p style={{ height: "auto" }}>
          <Select1
            data={subjects}
            selected={selected}
            onHandleSubjectChange={onHandleSubjectChange}
          />
        </p>
      </Col>
    </Row>
  );
};

export default Header;
