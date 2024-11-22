import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SlideFadeIn = ({
  delay = 0,
  duration = 1,
  endScroll = "top 30%",
  endPosition = 0,
  startOpacity = 0,
  startPosition = -50,
  startScroll = "top 80%",
  children,
}: {
  delay?: number;
  duration?: number;
  endScroll?: string;
  endPosition?: number;
  startOpacity?: number;
  startPosition?: number;
  startScroll?: string;
  children: React.ReactNode;
}) => {
  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(elemRef.current, {
      opacity: 1,
      y: endPosition,
      delay: delay,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elemRef.current,
        start: startScroll,
        end: endScroll,
        toggleActions: "play none none reset",
      },
    });
  }, [delay, duration, endScroll, endPosition, startScroll]);

  return (
    <div
      ref={elemRef}
      style={{
        opacity: startOpacity,
        transform: `translateY(${startPosition}px)`,
      }}
    >
      {children}
    </div>
  );
};
