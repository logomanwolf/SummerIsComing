import React from "react";
import { Row, Col } from "antd";
import Legend from "./legend";
import Button from "./button";
const Header = ({ subjects, width }) => {
  return (
    <div>
      <Row align="middle" style={{ width: width }}>
        <Col span={18}>
          <Legend />
        </Col>
        <Col span={6}>
          <p style={{ height: "auto", padding: 12 }}>
            <Button subjects={subjects} />
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
