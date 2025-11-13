export interface Project {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  details: {
    en: string[];
    zh: string[];
  };
  techStack: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}