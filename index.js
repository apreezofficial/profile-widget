const PROFILE_ASCII = "          ###%%%%@%***\n       ####%%*-..:+##*+=#\n    #**###%%-...--::##+=#%%#\n   %%%%%%%@# -:-+=+:=%*+%@%%%\n  *******##+-:::+::=+%**######\n --------=+-:=+-+**=+++==------\n=++++++++++*=.::=-:=#***++++++++\n==+++++***+=*-  ::=%--+******+++\n=-=***+--.  +%+.:+%#    ..:=**++\n=-=+#-  ........:.:..:::... :#*+\n =-+-  :-:---..:=-.::-=-:..: **\n  ==   :-:---:.-=-::--=-::...*\n   +.  .-::--..-=--::----:. .\n    .  .:::::..---::-::--:\n       .::::..:--:.:=::--\n          ::..:--:.--.";

const PROFILE = {
  name: "Precious Adedokun",
  handle: "@apreezofficial",
  role: "Full-stack software engineer",
  bio: "I build open-source apps and random apps on rainy days.",
  website: "https://preciousadedokun.com.ng",
  links: [
    { label: "GitHub", url: "https://github.com/apreezofficial", icon: "github" },
    { label: "X", url: "https://x.com/exdeveloper__", icon: "x" },
    { label: "LinkedIn", url: "https://ng.linkedin.com/in/precious-adedokun-b58221350", icon: "linkedin" },
    { label: "Website", url: "https://preciousadedokun.com.ng", icon: "globe" },
  ],
  profileUrl: "https://preciousadedokun.com.ng",
};

const PROJECTS = [
  { id: "iwasadev", name: "I Was a Dev", url: "https://iwasadev.xyz" },
  { id: "datum", name: "Datum", url: "https://datum.pxxl.dev" },
  { id: "ai", name: "AI", url: "https://ai.apcodesphere.dev" },
  { id: "zeroth", name: "Zeroth", url: "https://zeroth.apcodesphere.dev" },
  { id: "kureva", name: "Kureva", url: "https://kureva.pxxl.dev" },
  { id: "devdrawer", name: "DevDrawer", url: "https://devdrawer.xyz" },
];

const ICONS = {
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  x: '<path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-7h3a3 3 0 0 1 3 3v4M12 13a3 3 0 0 1 3-3"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
};

const CSS = `
.dock{position:fixed;z-index:2147483000;right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));width:min(390px,calc(100vw - 24px));display:flex;flex-direction:column;align-items:flex-end;pointer-events:none}
.panel{zoom:.65;width:min(390px,calc((100vw - 24px) / .65));padding-bottom:8px;pointer-events:auto}.panel[hidden]{display:none}
.dock .card{width:100%;max-height:min(660px,calc((100dvh - 84px) / .65));border-radius:22px}
.profile-art{margin:0;flex:none;color:#e0abec;font:3px/1 monospace;letter-spacing:0;text-align:center}
.trigger{display:flex;align-items:center;gap:10px;max-width:100%;padding:8px 13px 8px 8px;border:1px solid #594665;border-radius:18px;background:#170f1d;color:#c7b1d3;font:inherit;font-size:14px;cursor:pointer;pointer-events:auto;box-shadow:0 8px 30px #08050b38;text-align:left}
.trigger-art{font-size:1.7px;border:1px solid #e879f9;border-radius:9px;padding:3px}.trigger img{width:32px;height:32px;object-fit:cover;border-radius:50%;border:2px solid #e879f9}.trigger strong{color:#f0a4fa}.trigger:focus-visible{outline:2px solid #e879f9;outline-offset:2px}.chevron{margin-left:4px}.trigger[aria-expanded="true"] .chevron{transform:rotate(180deg)}

:host{display:block;max-width:100%;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;color:#f4edf9;line-height:1.45}
*{box-sizing:border-box}
.card{--accent:var(--apw-accent,#e879f9);position:relative;isolation:isolate;display:flex;flex-direction:column;width:min(100%,560px);max-height:min(900px,100vh);overflow:hidden;border:1px solid #43344c;border-radius:32px;background:#170f1d;box-shadow:0 24px 60px #08050b38}
.card:before{position:absolute;z-index:-1;inset:-80px -50px 0;content:"";opacity:.48;background:repeating-linear-gradient(104deg,transparent 0 38px,#493650 39px,#493650 40px,transparent 41px 74px);mask-image:linear-gradient(#000 0%,transparent 75%)}
.content{padding:28px 28px 0;overflow:auto;scrollbar-width:thin;scrollbar-color:#493650 transparent}
.person{display:flex;align-items:center;gap:16px;min-width:0}
.avatar{width:74px;height:74px;flex:none;border-radius:50%;object-fit:cover;background:#32263a;border:1px solid #594665}
.identity{min-width:0}.name{margin:0;font-size:25px;font-weight:750;letter-spacing:-.035em;line-height:1.15}.role{margin:5px 0 0;color:#d4c2dc;font-size:16px}.handle{margin:3px 0 0;color:#b8a3c2;font-size:15px;overflow-wrap:anywhere}
.bio{margin:24px 0 20px;color:#d1c2d8;font-size:19px;line-height:1.55;white-space:pre-wrap}
.socials{display:flex;flex-wrap:wrap;gap:10px}.social{display:grid;place-items:center;width:62px;height:62px;border:1px solid #32253a;border-radius:18px;background:#24192b;color:#f5eafa;text-decoration:none;transition:transform .18s ease,border-color .18s ease,background .18s ease}.social:hover{transform:translateY(-3px);border-color:#6f527a;background:#302138}.social svg,.project-link svg{width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.social[data-icon="x"] svg,.social[data-icon="github"] svg{fill:currentColor;stroke:none}
.feature{margin-top:22px;padding:16px;border:1px solid #392b42;border-radius:22px;background:#201626}.feature-label,.section-label{color:#b9a3c3;font-size:12px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.feature-image{display:block;width:100%;height:150px;margin:12px 0 14px;border-radius:14px;object-fit:cover;background:#302238}.feature-title{margin:10px 0 4px;font-size:21px;font-weight:750;letter-spacing:-.02em}.feature-description{margin:0 0 12px;color:#baa7c2;font-size:15px}.feature-actions{display:flex;gap:10px;flex-wrap:wrap}.feature-actions a{color:#f0b2fa;font-size:14px;font-weight:700;text-decoration:none}.feature-actions a:hover{text-decoration:underline}
.projects{margin-top:26px;padding-top:22px;border-top:1px solid #44354b}.section-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.section-label{margin:0}.count{color:#b9a3c3;font-size:14px;font-weight:750}.project{display:flex;align-items:center;gap:14px;padding:10px 0;color:inherit;text-decoration:none;min-width:0}.project:hover .project-name{color:#f0b2fa}.project-image{width:58px;height:58px;flex:none;border-radius:15px;object-fit:cover;background:#32263a}.project-placeholder{display:grid;place-items:center;color:#f0b2fa;font-size:23px;font-weight:800}.project-copy{min-width:0;flex:1}.project-name{display:block;overflow:hidden;color:#f5edf9;font-size:18px;font-weight:750;text-overflow:ellipsis;white-space:nowrap}.project-description{display:block;overflow:hidden;margin-top:2px;color:#b9a6c1;font-size:14px;text-overflow:ellipsis;white-space:nowrap}.project-link{color:#a995b3}.project-link svg{width:20px;height:20px}
.footer{position:sticky;bottom:0;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:8px;padding:15px 28px;border-top:1px solid #44354b;background:#170f1df2;backdrop-filter:blur(12px)}.all{color:#f0a4fa;font-weight:750;text-decoration:none}.all:hover{text-decoration:underline}.made{display:flex;align-items:center;gap:8px;color:#b9a6c1;font-size:14px;text-decoration:none;white-space:nowrap}.made img{width:22px;height:22px;border-radius:50%}.empty{padding:16px;color:#b9a6c1;font-size:14px}
@media(max-width:440px){.card{border-radius:24px}.content{padding:20px 18px 0}.avatar{width:62px;height:62px}.name{font-size:21px}.handle{font-size:15px}.bio{font-size:17px;margin:20px 0 16px}.social{width:54px;height:54px;border-radius:16px}.project-image{width:50px;height:50px}.project-name{font-size:16px}.project-description{font-size:13px}.footer{padding:13px 18px}}
`;

function safeUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  try {
    const url = new URL(value, globalThis.location?.href || "https://example.com");
    return ["https:", "http:", "mailto:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text != null) element.textContent = String(text);
  return element;
}

function externalLink(url, label, className) {
  const link = node("a", className, label);
  link.href = safeUrl(url) || "#";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

function icon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = ICONS[name] || ICONS.globe;
  return svg;
}

function normalizeProjects(value) {
  const projects = Array.isArray(value) ? value : PROJECTS;
  return projects.filter((project) => project && project.name && safeUrl(project.url)).map((project, index) => ({
    id: String(project.id ?? index + 1),
    name: String(project.name),
    description: String(project.description ?? ""),
    url: safeUrl(project.url),
    image: safeUrl(project.image),
    source: safeUrl(project.source ?? project.githubUrl),
  }));
}

function pickProject(projects, choice) {
  if (typeof choice === "number" && Number.isInteger(choice)) return projects[choice - 1] || null;
  if (typeof choice === "string" && choice.trim()) {
    const normalized = choice.trim().toLowerCase();
    return projects.find((project) => project.id.toLowerCase() === normalized || project.name.toLowerCase() === normalized) || null;
  }
  return null;
}

function buildCard(shadow, options) {
  const profile = { ...PROFILE, ...(options.profile || {}) };
  const projects = normalizeProjects(options.projects);
  const current = pickProject(projects, options.project);
  const currentUrl = safeUrl(options.currenturl ?? new URLSearchParams(location.search).get("currenturl") ?? location.href);
  const site = (url) => url ? new URL(url).hostname.replace(/^www\./, "") : "";
  const visibleProjects = projects.filter((project) =>
    project.id !== current?.id && site(project.url) !== site(currentUrl)
  );

  shadow.replaceChildren();
  const style = node("style");
  style.textContent = CSS;
  shadow.append(style);

  const card = node("article", "card");
  card.setAttribute("aria-label", `${profile.name || PROFILE.name} profile card`);
  if (options.accent) card.style.setProperty("--apw-accent", String(options.accent));
  const content = node("div", "content");

  const person = node("div", "person");
  if (safeUrl(profile.avatar)) {
    const avatar = node("img", "avatar");
    avatar.src = safeUrl(profile.avatar);
    avatar.alt = `${profile.name || PROFILE.name} profile photo`;
    avatar.loading = "lazy";
    person.append(avatar);
  }
  const photo = person.querySelector("img")?.cloneNode();
  if (!options.profile?.avatar) {
    const art = node("pre", "profile-art", PROFILE_ASCII);
    art.setAttribute("aria-hidden", "true");
    person.replaceChildren(art);
  }
  const identity = node("div", "identity");
  identity.append(node("h2", "name", profile.name || PROFILE.name));
  if (profile.role) identity.append(node("p", "role", profile.role));
  if (profile.handle) identity.append(node("p", "handle", profile.handle));
  person.append(identity);
  content.append(person);

  if (profile.bio) content.append(node("p", "bio", profile.bio));

  const socials = node("nav", "socials");
  socials.setAttribute("aria-label", "Profile links");
  for (const link of Array.isArray(profile.links) ? profile.links : []) {
    const href = safeUrl(link.url);
    if (!href) continue;
    const anchor = externalLink(href, "", "social");
    const iconName = ICONS[link.icon] ? link.icon : "globe";
    anchor.dataset.icon = iconName;
    anchor.setAttribute("aria-label", link.label || iconName);
    anchor.title = link.label || iconName;
    anchor.append(icon(iconName));
    socials.append(anchor);
  }
  if (socials.childElementCount) content.append(socials);

  const section = node("section", "projects");
  const header = node("div", "section-head");
  header.append(node("h3", "section-label", "Also shipped"));
  header.append(node("span", "count", String(visibleProjects.length)));
  section.append(header);

  if (visibleProjects.length) {
    for (const project of visibleProjects) {
      const row = externalLink(project.url, "", "project");
      const copy = node("span", "project-copy");
      copy.append(node("span", "project-name", project.name));
      if (project.description) copy.append(node("span", "project-description", project.description));
      row.append(copy);
      const outbound = node("span", "project-link");
      outbound.append(icon("arrow"));
      row.append(outbound);
      section.append(row);
    }
  } else {
    section.append(node("p", "empty", "More shipped projects are coming soon."));
  }
  content.append(section);
  card.append(content);

  const footer = node("footer", "footer");
  const profileUrl = safeUrl(profile.profileUrl || profile.website);
  if (profileUrl) footer.append(externalLink(profileUrl, "See everything →", "all"));
  if (profile.website) {
    const made = externalLink(profile.website, "", "made");
    made.append(document.createTextNode("Made by "), node("strong", "", profile.name || PROFILE.name));
    footer.append(made);
  }
  card.append(footer);
  const dock = node("div", "dock");
  const panel = node("div", "panel");
  panel.id = "profile-panel";
  panel.hidden = true;
  panel.append(card);
  const trigger = node("button", "trigger");
  trigger.type = "button";
  trigger.setAttribute("aria-controls", panel.id);
  trigger.setAttribute("aria-expanded", "false");
  if (photo) {
    photo.alt = "";
    trigger.append(photo);
  } else {
    const art = node("pre", "profile-art trigger-art", PROFILE_ASCII);
    art.setAttribute("aria-hidden", "true");
    trigger.append(art);
  }
  const label = node("span", "trigger-label", "Created by ");
  label.append(node("strong", "", profile.name || PROFILE.name));
  const chevron = node("span", "chevron", "⌃");
  chevron.setAttribute("aria-hidden", "true");
  trigger.append(label, chevron);
  const show = (open) => {
    panel.hidden = !open;
    trigger.setAttribute("aria-expanded", String(open));
  };
  let pinned = false;
  dock.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") show(true);
  });
  dock.addEventListener("pointerleave", () => {
    if (!pinned && !dock.matches(":focus-within")) show(false);
  });
  trigger.addEventListener("click", () => {
    pinned = !pinned;
    show(pinned);
  });
  dock.addEventListener("focusout", (event) => {
    if (!dock.contains(event.relatedTarget)) {
      pinned = false;
      show(false);
    }
  });
  dock.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      pinned = false;
      trigger.focus();
      show(false);
    }
  });
  dock.append(panel, trigger);
  shadow.append(dock);
  return card;
}

/**
 * Mount the Apreez profile card into a page.
 * @param {{target?: string|Element, project?: number|string, profile?: object, projects?: object[], accent?: string}} options
 * @returns {{element: Element, update: Function, destroy: Function}}
 */
export function mountProfileWidget(options = {}) {
  if (typeof document === "undefined") throw new Error("The profile widget can only be mounted in a browser.");
  const target = typeof options.target === "string"
    ? document.querySelector(options.target)
    : options.target instanceof Element
      ? options.target
      : null;
  const host = target || document.createElement("div");
  if (!target) {
    host.id = options.id || "apreez-profile-widget";
    document.body.append(host);
  }
  const shadow = host.shadowRoot || host.attachShadow({ mode: "open" });
  let current = { ...options };
  buildCard(shadow, current);
  return {
    element: host,
    update(nextOptions = {}) {
      current = { ...current, ...nextOptions };
      buildCard(shadow, current);
    },
    destroy() {
      if (!target) host.remove();
      else shadow.replaceChildren();
    },
  };
}

export { PROFILE as defaultProfile, PROJECTS as defaultProjects };
