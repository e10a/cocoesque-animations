import { NavDesktop } from "@/components/navigation/NavDesktop";
import { NavMobile } from "@/components/navigation/NavMobile";
import { PageFooter } from "@/components/PageFooter";
import { Analytics } from "@vercel/analytics/react";

export const PageLayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-layout page-layout-home">
      <NavDesktop />
      <NavMobile />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
      <Analytics />
    </div>
  );
};
