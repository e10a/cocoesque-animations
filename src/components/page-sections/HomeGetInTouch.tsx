import { ContactForm } from "@/components/forms/ContactForm";
import LocationMarker from "@/components/LocationMarker";
import { styled } from "@linaria/react";

const GetInTouchSection = styled.section`
  padding: var(--space-10) 0;
  background-image: linear-gradient(
    var(--gradient-rb),
    var(--gradient-indigo-pink)
  );
  color: rgb(var(--rgb-white));
`;

export default function HomeGetInTouch() {
  return (

    <GetInTouchSection data-location-marker-parent>
      <LocationMarker id="contact" style={{ marginTop: "calc(0px - var(--space-8))", top: 0 }} />

      <header style={{ marginBottom: "var(--space-10)" }}>
        <h2>Get in Touch</h2>
        <p>Let&apos;s build something beautiful!</p>
      </header>

      <ContactForm />

      <div className="flex flex-wrap justify-center items-center text-white divide-x divide-white/50">
        <a className="group px-2 text-white hover:text-white leading-none" href="/resume">
          <span className="text-sm border-b border-transparent group-hover:border-white inline-flex leading-none transition-all duration-300">Resume</span>
        </a>
        <a className="group px-2 text-white hover:text-white leading-none" href="#projects">
          <span className="text-sm border-b border-transparent group-hover:border-white inline-flex leading-none transition-all duration-300">Projects</span>
        </a>
        <a className="group px-2 text-white hover:text-white leading-none" href="https://www.linkedin.com/in/ellen-s" target="_blank" rel="noreferrer">
          <span className="text-sm border-b border-transparent group-hover:border-white inline-flex leading-none transition-all duration-300">LinkedIn</span>
        </a>
        <a className="group px-2 text-white hover:text-white leading-none" href="https://github.com/e10a" target="_blank" rel="noreferrer">
          <span className="text-sm border-b border-transparent group-hover:border-white inline-flex leading-none transition-all duration-300">GitHub</span>
        </a>
      </div>
    </GetInTouchSection>
  );
};
