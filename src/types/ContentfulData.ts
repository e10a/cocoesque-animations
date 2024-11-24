export interface Project {
  fields: Record<string, unknown>;
  sys: {
    id: string;
  };
}

export interface Projects {
  projects: Project[];
}

export interface ExperienceSkill {
  id: string | number;
  level: number;
  name: string;
  title: string;
  skills: string;
}

export interface Skill {
  fields: {
    category: string[];
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    longName: string;
    shortName: string;
    slug: string;
    type: string[];
    title: string;
  };
  sys: {
    id: string;
  };
}

export interface Skills {
  skills: Skill[];
}

export interface Experience {
  id: string | number;
  title: string;
  is_remote?: boolean;
  years: string;
  company: string;
  location: string;
  items: string[];
}

export interface About {
  fields: {
    displayTitle: string;
    displaySubTitle: string;
    displayDescription: string;
  };
}

export interface ContentfulData {
  projects: Project[];
  skills: Skill[];
  about: About;
}
