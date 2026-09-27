export interface SocialLink {
  label: string;
  url: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface PortfolioContent {
  hero: {
    name: string;
    title: string;
    tagline: string;
    avatarUrl?: string;
  };
  about: {
    bio: string;
    location: string;
    email: string;
    socialLinks: SocialLink[];
  };
  experience?: {
    items: ExperienceItem[];
  };
  projects: {
    items: ProjectItem[];
  };
  skills: {
    items: string[];
  };
  education?: {
    items: EducationItem[];
  };
  contact: {
    heading: string;
    message: string;
  };
}
