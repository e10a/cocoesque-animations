import { Analytics } from "@vercel/analytics/react";
import { NavDesktop } from "@/components/navigation/NavDesktop";
import { NavMobile } from "@/components/navigation/NavMobile";
import { PageFooter } from "@/components/PageFooter";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-layout">
      <NavDesktop />
      <NavMobile />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
      <Analytics />
    </div>
  );
};
