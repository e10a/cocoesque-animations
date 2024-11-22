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
    <div className="flex flex-col gap-1 text-center font-mono uppercase trackiing-wider">
      <div className="leading-0">TIMELINE</div>
      <div className="leading-0">{`${scrollPercentage}%`}</div>
    </div>
  );
};
