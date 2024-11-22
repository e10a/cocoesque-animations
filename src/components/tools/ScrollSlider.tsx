import Slider from "@mui/material/Slider";
import { useEffect, useRef, useState } from "react";

export const ScrollSlider = () => {
  const sliderRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const sliderLabel = sliderRef.current.querySelector(
      ".MuiSlider-valueLabelLabel"
    );

    const getVerticalScrollPercentage = () => {
      const elem = document.documentElement;
      return Math.round(
        (elem.scrollTop / (elem.scrollHeight - elem.clientHeight)) * 100
      );
    };

    sliderLabel.setAttribute("data-before-content", "0%");

    document.addEventListener("scroll", () => {
      const percentage = getVerticalScrollPercentage();
      setScrollPercentage(percentage);
      sliderLabel.setAttribute("data-before-content", `${percentage}%`);
    });

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Slider
      ref={sliderRef}
      getAriaLabel={() => "ScrollSlider"}
      className="slider"
      disabled
      orientation="vertical"
      defaultValue={0}
      min={-100}
      max={0}
      valueLabelDisplay="on"
      value={scrollPercentage * -1}
    />
  );
};
