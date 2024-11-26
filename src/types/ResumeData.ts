export interface Achievement {
  id: number;
  title: string;
  description: string;
}

export interface Education {
  college: string;
  degree: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  years: string;
  is_remote: boolean;
  items: string[];
}

export interface ExperienceSkill {
  id: number;
  title: string;
  skills: string;
}

export interface LinkedInSkill {
  id: number;
  name: string;
  level: number;
}

export interface TechnicalSkill {
  id: number;
  title: string;
  description: string;
}

export interface Skills {
  linked_in_skills: LinkedInSkill[];
  experience_skills: ExperienceSkill[];
  technical_skills: TechnicalSkill[];
}
export interface Resume {
    full_name: string;
    tag_line: string;
    about: string;
    contact: {
      phone_number: string;
      email_address: string;
    };
    experiences: Experience[];
    education: Education;
    skills: Skills;
    achievements: Achievement[];
}

export interface ResumeData {
  error: string;
  resume: Resume;
}