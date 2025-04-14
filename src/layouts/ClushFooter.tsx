import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const CFooter = styled(Footer)`
  text-align: center;
`;

export default function ClushFooter() {
  return (
    <CFooter style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </CFooter>
  );
}
