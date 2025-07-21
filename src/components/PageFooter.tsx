import { GitHubIcon } from "@/svgs/GitHubIcon";
import { LinkedInIcon } from "@/svgs/LinkedInIcon";
import { styled } from "@linaria/react";

const FooterContainer = styled.div`
    font-size: var(--text-sm);
    border: 0 solid #e5e7eb;
    margin: 0 auto;
    padding: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
`;
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: var(--space-2);
  text-transform: uppercase;
  font-size: var(--text-xs);
  letter-spacing: 0.5px;
  color: rgb(var(--color-gray-500));

  @media only screen and (width >=768px) {
    flex-direction: row;
    justify-content: start;

    div + div:before {
      content: "|";
      display: inline-block;
      margin-right: var(--space-2);
    }
  }
`;
const SiteLinks = styled.div`
  display: flex;
  gap: var(--space-4);
`;
const ExternalLinks = styled.div`
  display: flex;
  gap: var(--space-4);
`;

const siteLinks = [
  {
    path: "/resume",
    label: "Resume",
    target: "",
    icon: "",
  },
  {
    path: "/#projects",
    label: "Projects",
    target: "",
    icon: "",
  },
  {
    path: "/#contact",
    label: "Contact",
    target: "",
    icon: "",
  },
];

const externalLinks = [
  {
    path: "https://github.com/e10a",
    label: "GitHub",
    target: "_blank",
    icon: "GitHub",
  },
  {
    path: "https://www.linkedin.com/in/ellen-s",
    label: "LinkedIn",
    target: "_blank",
    icon: "LinkedIn",
  },
];

interface LinkType {
  path: string;
  label: string;
  target: string;
  icon: string;
}

const Link = (link: LinkType) => {
  return (
    <a
      href={link.path}
      target={link.target}
      rel={link.target ? "noopener noreferrer" : ""}
      title={link.path}
    >
      {!link.icon && link.label}

      {link.icon == "GitHub" && <GitHubIcon />}

      {link.icon == "LinkedIn" && <LinkedInIcon />}
    </a>
  );
};

export default function PageFooter() {
  return (
    <footer>
      <FooterContainer>
        <TopSection>
          <SiteLinks>
            {siteLinks.map((link: LinkType) => (
              <Link key={Math.random()} {...link} />
            ))}
          </SiteLinks>

          <ExternalLinks>
            {externalLinks.map((link: LinkType) => (
              <Link key={Math.random()} {...link} />
            ))}
          </ExternalLinks>
        </TopSection>

        <BottomSection>
          <div>{import.meta.env.VITE_APP_NAME}{" • "}{import.meta.env.VITE_APP_DESCRIPTION}</div>
          <div>Copyright © {new Date().getUTCFullYear()}</div>
        </BottomSection>
      </FooterContainer>
    </footer>
  );
};
