import React from "react";
import { Card } from "antd";
const Card1 = ({ children, extra, width }) => {
  return (
    <Card size="small" title="" extra={extra || null} style={{ width }}>
      {React.Children.map(children, child => {
        return <div>{child}</div>;
      })}
    </Card>
  );
};

export default Card1;
