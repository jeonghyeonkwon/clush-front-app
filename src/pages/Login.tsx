import styled from "styled-components";
import LoginContainer from "../containers/LoginContainer";

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default function Login() {
  return (
    <LoginPage>
      <LoginContainer />
    </LoginPage>
  );
}
