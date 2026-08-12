export interface NavigationItem {
  readonly label: string;
  readonly sectionId: string;
}
export interface SkillGroup {
  readonly title: string;
  readonly description: string;
  readonly skills: readonly string[];
}
export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly description: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
}
export interface Project {
  readonly title: string;
  readonly type: string;
  readonly market?: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly responsibilities: readonly string[];
  readonly highlights: readonly string[];
  readonly githubUrl: string | null;
  readonly liveUrl: string | null;
  readonly image: string | null;
  readonly featured: boolean;
}
export interface TechnicalHighlight {
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
}
export interface SocialLinks {
  readonly linkedin: string;
  readonly github: string;
  readonly email: string;
}
export interface PortfolioData {
  readonly personal: {
    readonly name: string;
    readonly title: string;
    readonly specialization: string;
    readonly introduction: string;
    readonly about: readonly string[];
    readonly availability: { readonly enabled: boolean; readonly label: string };
  };
  readonly navigation: readonly NavigationItem[];
  readonly skills: readonly SkillGroup[];
  readonly experience: readonly Experience[];
  readonly projects: readonly Project[];
  readonly technicalHighlights: readonly TechnicalHighlight[];
  readonly resumeUrl: string;
  readonly socialLinks: SocialLinks;
  readonly siteUrl: string;
}
