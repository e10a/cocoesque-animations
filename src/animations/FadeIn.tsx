/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FadeIn = ({
  children,
  delay = 0,
  startOpacity = 0,
  start = "top 90%",
  end = "+=500",
}: {
  children: React.ReactNode;
  delay?: number;
  startOpacity?: number;
  start?: string;
  end?: string;
}) => {
  const elemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elemRef.current,
      {
        opacity: startOpacity,
      },
      {
        duration: 1.6,
        opacity: 1,
        delay: delay,
        scrollTrigger: {
          trigger: elemRef.current,
          start: start,
          end: end,
          toggleActions: "play none none reset",
          scrub: 1,
        },
      }
    );
  }, []);

  return <div ref={elemRef}>{children}</div>;
};
