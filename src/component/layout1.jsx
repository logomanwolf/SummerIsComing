import React from "react";
// 上中布局
import { Layout } from "antd";

const { Header, Content } = Layout;
const Layout1 = ({ children }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default Layout1;
