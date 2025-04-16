import { Button, Form, Input, Typography } from "antd";

export default function SignUpContainer() {
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
      <Typography.Title level={4}>회원 가입</Typography.Title>
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
        <Button color="cyan" size="large" variant="filled" block>
          회원가입
        </Button>
      </Form.Item>
    </Form>
  );
}
