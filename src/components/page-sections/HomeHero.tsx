import { FadeIn } from "@/animations/FadeIn";
import { TypeEffect } from "@/animations/TypeEffect";
import { WaveEffect } from "@/animations/WaveEffect";

export const HomeHero = ({
  title,
  subtitle,
  tagline,
  ctas = [],
}: {
  title: string;
  subtitle: string;
  tagline: string;
  ctas: {
    sys: {
      id: string;
    };
    fields: {
      url: string;
      text: string;
    };
  }[];
}) => {
  const handleClick = (
    cta: { fields: { url: string } },
    event: React.MouseEvent
  ) => {
    const { url } = cta.fields;

    if (url.startsWith("#")) {
      event.preventDefault();

      const target = document.querySelector(url);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  return (
    <>
      <section id="hero-inner" className="relative flex flex-col">
        <FadeIn>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-white">{title}</h1>
            <p className="subtitle text-white uppercase font-extrabold tracking-widest opacity-90">
              {subtitle}
            </p>
            <p className="text-white text-2xl w-full max-w-[560px] relative">
              <span className="relative -z-1 invisible">{tagline}</span>
              <span className="absolute z-1 top-0 left-0">
                <TypeEffect showCursor text={tagline} />
              </span>
            </p>
          </div>
        </FadeIn>
        <div className="flex flex-wrap justify-center gap-2 768:gap-5">
          {Boolean(ctas.length) && (
            <WaveEffect delay={0.4}>
              {ctas.map((cta) => (
                <a
                  key={cta.sys.id}
                  className="button button-transparent-white 768:button-2xl"
                  href={cta.fields.url}
                  onClick={(event) => handleClick(cta, event)}
                >
                  {cta.fields.text}
                </a>
              ))}
            </WaveEffect>
          )}
        </div>
      </section>
    </>
  );
};
