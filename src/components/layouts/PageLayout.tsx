import { lazy } from "react";

const PageFooter = lazy(() => import("@/components/PageFooter.tsx"));

export default function PageLayout({ children }: { children: React.ReactNode })  {
  return (
    <div className="page-layout">
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
};
