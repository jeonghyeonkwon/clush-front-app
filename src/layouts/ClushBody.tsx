import { Layout, Breadcrumb } from "antd";
import { ReactNode } from "react";
import styled from "styled-components";
const { Content } = Layout;

const CContent = styled(Content)`
  padding: 0px 48px;
`;

interface ClushBodyProps {
  children: ReactNode;
}

export default function ClushBody({ children }: ClushBodyProps) {
  return (
    <CContent style={{ padding: "0 48px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        {children}
      </div>
    </CContent>
  );
}
