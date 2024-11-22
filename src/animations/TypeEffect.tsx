import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const TypeEffect = ({ showCursor = false, text }: { showCursor?: boolean; text: string }) => {
  const [textToType, setTextToType] = useState("");
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    const typeText = () => {
      let currentText = "";
      const length = text.length;
      let index = 0;

      // GSAP Timeline to control typing speed
      const timeline = gsap.timeline({
        repeat: 0,
        onUpdate: () => {
          if (index < length) {
            currentText += text.charAt(index);
            setTextToType(currentText);
            index++;
          }
        },
        defaults: { delay: 0.0, ease: "power1.inOut" },
      });

      // Adding animations to the timeline
      for (let i = 0; i < length; i++) {
        timeline.to({}, { duration: 0.1 });
      }
    };

    typeText();
  }, [text]);

  return (
    <span ref={textRef}>
      {textToType}
      {showCursor && <span ref={cursorRef} className="cursor"></span>}
    </span>
  );
};
