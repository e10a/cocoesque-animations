export interface Project {
  fields: {
    accentColor: string;
    catagories?: string[];
    comingSoon: boolean;
    company: {
      fields?: {
        logo?: {
          fields?: {
            file?: {
              url?: string;
            };
            title?: string;
          };
        }
        name?: string;
      };
    };
    contractedWork: boolean;
    coverImage?: {
      fields?: {
        file?: {
          url?: string;
        };
        title?: string;
      };
    };
    slideImage?: {
      fields?: {
        file?: {
          url?: string;
        };
        title?: string;
      };
    };
    displayTitle: string;
    displayDescription?: string;
    externalLink?: string;
    hide: boolean;
    name: string;
    skills?: Skill[];
    slug: string;
    year: string;
  };
  sys: {
    id: string;
  };
}

export interface Projects {
  projects: Project[] | undefined;
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
