export const HomeHighlights = () => {
  return (
    <section className="pb-10">
      <div className="mt-16 flex flex-col gap-1">
        <h2>Highlights</h2>
        <p>What it&apos;s like to work together</p>
      </div>
      <div className="flex gap-4 justify-center">
        <div className="rounded-lg bg-slate-400 w-60 h-[300px]"></div>
        <div className="rounded-lg bg-slate-400 w-60 h-[300px]"></div>
        <div className="rounded-lg bg-slate-400 w-60 h-[300px]"></div>
        <div className="rounded-lg bg-slate-400 w-60 h-[300px]"></div>
      </div>
      <div className="flex gap-4 justify-between md:justify-center">
        <button className="rounded-md bg-indigo-500 text-white duration-300 transition-all hover:bg-indigo-700 px-4 py-3">
          <div className="leading-tight font-medium">View Resume</div>
        </button>
        <div className="flex gap-2 md:hidden">
          <button>LEFT</button>
          <button>RIGHT</button>
        </div>
      </div>
    </section>
  );
};
