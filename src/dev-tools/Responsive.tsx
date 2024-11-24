import { useResponsive } from "@/context/ResponsiveContext";
import { ResponsiveType, Screen } from "@/types/ResponsiveData";

const ScreenItem = (screen: Screen) => (
  <div className="dev-tools-item">
    <div
      className={`dev-tools-key ${
        screen.value ? "dev-tools-key_active" : "dev-tools-key_inactive"
      }`}
    >
      {screen.id}
    </div>
  </div>
);

export default function Responsive() {
  const {
    viewportWidth,
    screens: { equalOrLessThan },
    screens: { equalOrGreaterThan },
  } = useResponsive() as ResponsiveType;

  return (
    <>
      <div className="dev-tools-section">
        <div className="dev-tools-item">
          <span>viewportWidth</span>
          <div className="dev-tools-key">{viewportWidth}px</div>
        </div>
      </div>

      <div className="dev-tools-section">
        <div className="dev-tools-section-header">
          {"="} or {"-"}
        </div>
        {equalOrLessThan.map((screen) => (
          <ScreenItem key={screen.id} {...screen} />
        ))}
      </div>

      <div className="dev-tools-section">
        <div className="dev-tools-section-header">
          {"="} or {"+"}
        </div>
        {equalOrGreaterThan.map((screen) => (
          <ScreenItem key={screen.id} {...screen} />
        ))}
      </div>
    </>
  );
}
