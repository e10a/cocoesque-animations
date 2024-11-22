export const SkillLevel = ({ level }: { level: number | null }) => {
  const levelDots = () => {
    if (!level) return "n/a";

    return (
      <>
        <div
          className={`w-1 h-1 rounded-full ${
            level >= 1 ? "bg-sky-500" : "bg-slate-600"
          }`}
        />
        <div
          className={`w-1 h-1 rounded-full ${
            level >= 2 ? "bg-sky-500" : "bg-slate-600"
          }`}
        />
        <div
          className={`w-1 h-1 rounded-full ${
            level >= 3 ? "bg-sky-500" : "bg-slate-600"
          }`}
        />
      </>
    );
  };

  return (
    <div className="w-8 py-1 justify-center items-center gap-0.5 flex">
      {levelDots()}
    </div>
  );
};
