import { Typography, Button, Form, Input } from "antd";

import { Link } from "react-router-dom";

export default function LoginContainer() {
  return (
    <Form
      name="login"
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "auto",
        padding: "20px",
      }}
    >
      <Typography.Title level={4}>로그인</Typography.Title>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "아이디를 입력하세요!" }]}
      >
        <Input placeholder="아이디" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력하세요!" }]}
      >
        <Input.Password placeholder="비밀번호" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          로그인
        </Button>
      </Form.Item>
      <Link to="/sign-up">
        <Button color="cyan" size="large" variant="filled" block>
          회원가입
        </Button>
      </Link>
    </Form>
  );
}
