export interface ProfileLink {
  label: string;
  url: string;
  icon?: "github" | "x" | "linkedin" | "globe";
}

export interface ProfileProject {
  id?: string;
  name: string;
  description?: string;
  url: string;
  image?: string;
  source?: string;
  githubUrl?: string;
}

export interface ProfileDetails {
  name?: string;
  handle?: string;
  role?: string;
  bio?: string;
  avatar?: string;
  website?: string;
  profileUrl?: string;
  links?: ProfileLink[];
}

export interface ProfileWidgetOptions {
  /** Existing element or CSS selector where the card should render. Defaults to a new body-level widget. */
  target?: string | Element;
  /** 1-based index, project id, or project name to feature above the shipped-project list. */
  project?: number | string;
  profile?: Partial<ProfileDetails>;
  projects?: ProfileProject[];
  accent?: string;
  id?: string;
}

export interface ProfileWidgetController {
  element: Element;
  update(options?: Partial<ProfileWidgetOptions>): void;
  destroy(): void;
}

export declare function mountProfileWidget(options?: ProfileWidgetOptions): ProfileWidgetController;

export declare const defaultProfile: ProfileDetails;
export declare const defaultProjects: ProfileProject[];
