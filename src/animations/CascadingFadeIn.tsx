import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CascadingFadeIn = ({
  children,
  delay = 0,
  duration = 1,
  startOpacity = 0,
  startPosition = -50,
  startScroll = "top 120%",
  endScroll = "top 30%",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  startOpacity?: number;
  startPosition?: number;
  startScroll?: string;
  endScroll?: string;
}) => {
  const elemRef = useRef([]);

  useEffect(() => {
    gsap.to(elemRef.current, {
      opacity: 1,
      y: 0,
      delay: delay,
      duration: duration,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: elemRef.current,
        start: startScroll,
        end: endScroll,
        toggleActions: "play none none reset",
      },
    });
  }, [delay, duration, endScroll, startScroll]);

  return (
    <>
      {Array.isArray(children) &&
        children.map((_child, i) => (
          <div
            key={i}
            ref={(el) => {
              if (elemRef.current) {
                elemRef.current[i] = el as never;
              }
            }}
            style={{
              opacity: startOpacity,
              transform: `translateY(${startPosition}px)`,
            }}
          >
            {_child}
          </div>
        ))}
    </>
  );
};
