import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollSlideY = ({
  children,
  startScroll,
  endScroll,
  transformOrigin = "top",
  triggerElement = null,
  yStartPositionPercentage,
  yEndPositionPercentage,
}: {
  startScroll?: string;
  endScroll?: string;
  transformOrigin?: string;
  triggerElement?: HTMLDivElement | null;
  yStartPositionPercentage?: number;
  yEndPositionPercentage?: number;
  children: React.ReactNode;
}) => {
  const elemRef = useRef(null);

  useEffect(() => {
    gsap.to(elemRef.current, {
      yPercent: yEndPositionPercentage,
      duration: 2,
      ease: "none",
      transformOrigin: transformOrigin,
      scrollTrigger: {
        trigger: triggerElement || elemRef.current,
        start: startScroll,
        end: endScroll,
        scrub: true,
        toggleActions: "play none none reset",
      },
    });
  }, [
    endScroll,
    startScroll,
    transformOrigin,
    triggerElement,
    yEndPositionPercentage,
  ]);

  return (
    <div
      ref={elemRef}
      style={{
        transform: `translateY(${yStartPositionPercentage}%)`,
      }}
    >
      {children}
    </div>
  );
};
