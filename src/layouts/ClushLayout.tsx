import { Layout } from "antd";
import styled from "styled-components";
import ClushHeader from "./ClushHeader";
import { ReactNode } from "react";
import ClushBody from "./ClushBody";
import ClushFooter from "./ClushFooter";

const CLayout = styled(Layout)`
  height: 100vh;
`;

interface ClushLayoutProps {
  children: ReactNode;
}
export default function ClushLayout({ children }: ClushLayoutProps) {
  return (
    <CLayout>
      <ClushHeader />
      <ClushBody>{children}</ClushBody>
      <ClushFooter />
    </CLayout>
  );
}
