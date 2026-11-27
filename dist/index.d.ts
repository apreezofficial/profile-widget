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
    /** 1-based index, project id, or project name to omit from the shipped-project list. */
    project?: number | string;
    currenturl?: string;
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
declare const PROFILE: ProfileDetails;
declare const PROJECTS: ProfileProject[];
/**
 * Mount the Apreez profile card into a page.
 * @param {{target?: string|Element, project?: number|string, profile?: object, projects?: object[], accent?: string}} options
 * @returns {{element: Element, update: Function, destroy: Function}}
 */
export declare function mountProfileWidget(options?: ProfileWidgetOptions): ProfileWidgetController;
export { PROFILE as defaultProfile, PROJECTS as defaultProjects };
