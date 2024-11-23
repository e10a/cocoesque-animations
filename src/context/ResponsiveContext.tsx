import { useMediaQuery } from "react-responsive";
import { createContext, useContext, useEffect, useState } from "react";

interface ResponsiveContextType {
  viewportWidth: number;
  [key: string]: boolean | number;
}

const Context = createContext<ResponsiveContextType>(
  {} as ResponsiveContextType
);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [viewportWidth, setViewportWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const values = {
    viewportWidth: viewportWidth,
    // Equal or less than
    "320-": useMediaQuery({ maxWidth: 320 }),
    "480-": useMediaQuery({ maxWidth: 480 }),
    "768-": useMediaQuery({ maxWidth: 768 }),
    "960-": useMediaQuery({ maxWidth: 960 }),
    "1024-": useMediaQuery({ maxWidth: 1024 }),
    "1200-": useMediaQuery({ maxWidth: 1200 }),
    "1440-": useMediaQuery({ maxWidth: 1440 }),
    "1920-": useMediaQuery({ maxWidth: 1920 }),
    // Equal or greater than
    "320+": useMediaQuery({ minWidth: 320 }),
    "480+": useMediaQuery({ minWidth: 480 }),
    "768+": useMediaQuery({ minWidth: 768 }),
    "960+": useMediaQuery({ minWidth: 960 }),
    "1024+": useMediaQuery({ minWidth: 1024 }),
    "1200+": useMediaQuery({ minWidth: 1200 }),
    "1440+": useMediaQuery({ minWidth: 1440 }),
    "1920+": useMediaQuery({ minWidth: 1920 }),
  };
  return <Context.Provider value={values as any}>{children}</Context.Provider>;
};

function useResponsive() {
  const values = useContext(Context);
  if (values === undefined) {
    const message = "useResponsive must be used within a Provider";

    throw new Error(message);
  }

  return values;
}
export { Provider, useResponsive, Context };
