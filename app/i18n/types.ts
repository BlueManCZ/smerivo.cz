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
    pricing: string;
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
  pricing: {
    number: string;
    title: string;
    titleLine2: string;
    description: string;
    tierLabel: string;
    addonsLabel: string;
    from: string;
    currency: string;
    estimate: string;
    total: string;
    disclaimer: string;
    disclaimerEnd: string;
    designReady: string;
    designReadyHint: string;
    designDiscount: string;
    nonprofit: string;
    nonprofitHint: string;
    nonprofitDiscount: string;
    tiers: {
      landing: { name: string; description: string };
      business: { name: string; description: string };
      application: { name: string; description: string };
      corporate: { name: string; description: string };
    };
    addons: {
      contactForm: string;
      database: string;
      localization: string;
      seo: string;
      analytics: string;
      blog: string;
      ecommerce: string;
      auth: string;
      api: string;
    };
  };
  contact: {
    number: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    footer: string;
    ico: string;
    legalNote: string;
    location: string;
  };
}
