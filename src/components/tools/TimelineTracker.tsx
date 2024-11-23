import { useEffect, useState } from "react";

export const TimelineTracker = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const getVerticalScrollPercentage = () => {
      const elem = document.documentElement;
      return Math.round(
        (elem.scrollTop / (elem.scrollHeight - elem.clientHeight)) * 100
      );
    };

    document.addEventListener("scroll", () => {
      setScrollPercentage(getVerticalScrollPercentage());
    });

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <div>TIMELINE</div>
      <div>{`${scrollPercentage}%`}</div>
    </div>
  );
};
