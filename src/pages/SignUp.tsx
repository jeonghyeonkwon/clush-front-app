import styled from "styled-components";
import SignUpContainer from "../containers/SignUpContainer";

const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default function SignUp() {
  return (
    <SignUpPage>
      <SignUpContainer />
    </SignUpPage>
  );
}
