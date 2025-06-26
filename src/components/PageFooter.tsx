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
      <>
        {!link.icon && link.label}

        {link.icon == "GitHub" &&
        <svg
          aria-hidden="true"
          height="14"
          viewBox="0 0 16 16"
          version="1.1"
          width="14"
          data-view-component="true"
          className="octicon octicon-mark-github"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ fill: "currentColor" }}
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
          ></path>
        </svg>}

        {link.icon == "LinkedIn" &&
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          x="0"
          y="0"
          preserveAspectRatio="xMinYMin meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={{ fill: "currentColor" }} className="solid-icon">
            <rect
              x="-0.003"
              style={{ fill: "none" }}
              width="24"
              height="24"
            ></rect>
            <path d="M20,2h-16c-1.1,0-2,0.9-2,2v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2zM8,19h-3v-9h3V19zM6.5,8.8C5.5,8.8,4.7,8,4.7,7s0.8-1.8,1.8-1.8S8.3,6,8.3,7S7.5,8.8,6.5,8.8zM19,19h-3v-4c0-1.4-0.6-2-1.5-2c-1.1,0-1.5,0.8-1.5,2.2V19h-3v-9h2.9v1.1c0.5-0.7,1.4-1.3,2.6-1.3c2.3,0,3.5,1.1,3.5,3.7V19z"></path>
          </g>
        </svg>}
      </>
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
