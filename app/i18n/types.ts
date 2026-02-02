export interface Translations {
  metadata: {
    title: string;
    description: string;
    ogDescription: string;
  };
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    description: string;
    descriptionLine2: string;
    scroll: string;
  };
  about: {
    number: string;
    title: string;
    intro: string;
    introHighlight: string;
    introEnd: string;
    education: string;
    educationHighlight: string;
    educationEnd: string;
    current: string;
    currentHighlight: string;
    currentEnd: string;
    statsYears: string;
    statsDegreeValue: string;
    statsDegree: string;
    statsLocation: string;
  };
  skills: {
    number: string;
    title: string;
    languages: string;
    frameworks: string;
    frontend: string;
    tools: string;
  };
  experience: {
    number: string;
    title: string;
    present: string;
    items: {
      company: string;
      role: string;
      period: string;
      description: string;
      technologies: string[];
    }[];
  };
  projects: {
    number: string;
    title: string;
    titleLine2: string;
    visit: string;
    article: string;
    items: {
      key: string;
      title: string;
      subtitle: string;
      description: string;
    }[];
  };
  contact: {
    number: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    footer: string;
    location: string;
  };
}
