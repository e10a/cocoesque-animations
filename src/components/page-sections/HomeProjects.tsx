/* eslint-disable react-hooks/exhaustive-deps */

import { HomeProjectsActive } from "./home-projects-active";
import { HomeProjectsComingSoon } from "./HomeProjectsComingSoon";

export const HomeProjects = ({ projects = [] }) => {
  const activeProjects = projects.filter(
    (project) => !project.fields.comingSoon
  );

  const comingSoonProjects = projects.filter(
    (project) => project.fields.comingSoon
  );

  return (
    <section className="section-w-full gap-10 flex flex-col items-center">
      <div className="w-full">
        <div className="section-header">
          <h2>Projects</h2>
          <p>What&apos;s been keeping me busy</p>
        </div>
        <div className="max-w-[100vw]">
          <HomeProjectsActive projects={activeProjects} />
        </div>
      </div>
      <div id="projects-coming-soon" />
      <div className="w-full flex flex-col gap-8 bg-slate-100 py-10">
        <div className="section-header">
          <h2>Coming Soon</h2>
          <p>Presentation for these projects are in the works. Stay tuned!</p>
        </div>
        <div className="max-w-[100vw]">
          <HomeProjectsComingSoon projects={comingSoonProjects} />
        </div>
      </div>
    </section>
  );
};
