import { useResponsive } from "@/context/ResponsiveContext";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const Screen = styled.div`
  color: rgb(var(--rgb-white));
  padding: var(--space);
  display: flex;
  align-items: center;
  justify-content: end;
  gap: var(--space);
`;
const Key = styled.div`
  background-color: rgba(var(--rgb-gray-950), 0.8);
  border-radius: var(--space);
  padding: calc(var(--space) * 0.5) var(--space);
  display: inline-block;
`;

const active = css`
  background-color: rgba(var(--rgb-emerald-500), 0.8);
`;
const inactive = css`
  background-color: rgba(var(--rgb-gray-500), 0.8);
  opacity: 0.8;
`;

type ScreenType = {
  viewportWidth: number;
  [key: string]: boolean | number;
};

export default function Responsive() {
  const screen = useResponsive() as ScreenType;

  const formatValue = (key: string, value: boolean | number) => {
    if (typeof value === "boolean") {
      if (!value) return null;

      const lastChar = key[key.length - 1];
      if (lastChar === "+") {
        return `is equal or greater than`;
      }
      if (lastChar === "-") {
        return `is equal or less than`;
      }
    }
    return value;
  };
  return (
    <div>
      {Object.entries(screen).map(([key, value]) => (
        <Screen className={`screen ${value ? active : inactive}`} key={key}>
          <span>{formatValue(key, value)}</span>
          <Key>{key}</Key>
        </Screen>
      ))}
    </div>
  );
}
