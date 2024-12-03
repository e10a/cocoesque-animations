import { lazy } from "react";
import { styled } from "@linaria/react";

const Outer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

const PageFooter = lazy(() => import("@/components/PageFooter.tsx"));

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Outer className="page-layout" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Content className="page-layout__content" style={{ flex: "1 1 0%" }}>
        {children}
      </Content>

      <PageFooter />
    </Outer>
  );
};
