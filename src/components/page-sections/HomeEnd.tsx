import { ContactForm } from "@/components/forms/ContactForm";

export const HomeEnd = () => {
  return (
    <section id="contact">
      <div className="flex flex-col gap-8 py-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-white">Get in Touch</h2>
          <p className="text-white">Let&apos;s build something beautiful!</p>
        </div>
        <div className="mx-auto w-full md:max-w-lg">
          <ContactForm />
        </div>
        <div className="flex flex-wrap justify-center items-center text-white divide-x divide-white/50">
          <a
            className="group px-2 text-white hover:text-white leading-none"
            href="/resume"
          >
            <span className="text-sm border-b border-transparent group-hover:border-white inline-flex leading-none transition-all duration-300">
              Resume
            </span>
          </a>
          <a
            className="group px-2 text-white hover:text-white leading-none"
            href="#projects"
          >
            <span className="text-sm border-b border-transparent group-hover:border-white inline-flex leading-none transition-all duration-300">
              Projects
            </span>
          </a>
          <a
            className="group px-2 text-white hover:text-white leading-none"
            href="https://github.com/e10a"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm border-b border-transparent group-hover:border-white inline-flex leading-none transition-all duration-300">
              LinkedIn
            </span>
          </a>
          <a
            className="group px-2 text-white hover:text-white leading-none"
            href="https://github.com/e10a"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm border-b border-transparent group-hover:border-white inline-flex leading-none transition-all duration-300">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
