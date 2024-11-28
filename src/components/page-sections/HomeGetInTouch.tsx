import ContactForm from "@/components/forms/ContactForm.tsx";
import { styled } from "@linaria/react";

const CtaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--space-8);
`;
const CtaLink = styled.a`
  color: rgb(var(--color-white));
  display: inline-flex;
  text-decoration: none;
  font-size: var(--text-sm);
  position: relative;
  margin: 0 var(--space-4);

  &:before {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: transparent;
    margin-top: 1px;
  }

  &:hover {
    color: rgb(var(--color-white));

    &:before {
      background-color: rgb(var(--color-white));
    }
  }

  & + a:after {
    content: "";
    display: block;
    height: 100%;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0;
    border-left: 1px solid rgba(var(--color-white) / 0.3);
    margin-left: calc(0px - var(--space-4));
  }
`;

export default function HomeGetInTouch() {
  return (
    <>
      <ContactForm />

      <CtaContainer>
        <CtaLink href="/resume">Resume</CtaLink>
        <CtaLink href="/#projects">Projects</CtaLink>
        <CtaLink
          href="https://www.linkedin.com/in/ellen-s"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </CtaLink>
        <CtaLink
          href="https://github.com/e10a"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </CtaLink>
      </CtaContainer>
    </>
  );
};
