import { useEffect, useRef } from "react";
import React from "react";
import { gsap } from "gsap";

export const WaveEffect = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const elemRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      elemRef.current,
      { opacity: 0, y: -51 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        delay: delay,
      }
    );
  }, [delay]);

  return React.Children.map(children, (child, i) => (
    <div key={i} ref={(el) => (elemRef.current[i] = el as never)}>
      {child}
    </div>
  ));
};
