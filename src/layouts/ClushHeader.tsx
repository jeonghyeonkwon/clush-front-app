import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Header } = Layout;

const items = Array.from({ length: 2 }).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const CHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  margin-right: 50px;
`;

export default function ClushHeader() {
  return (
    <CHeader>
      <Logo>Clush-APP</Logo>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
      <Link to={"/login"}>
        <Button color="primary" variant="solid" size="large">
          로그인
        </Button>
      </Link>
    </CHeader>
  );
}
