# Apreez Profile Widget

An embeddable profile card with social links, a featured shipped project, and an “Also shipped” list. The widget styles itself inside a Shadow DOM so it does not inherit or overwrite the host page's CSS.

## Install from GitHub

```bash
npm install github:apreezofficial/profile-widget
```

```js
import { mountProfileWidget } from "apreez-profile-widget";

mountProfileWidget({
  target: "#profile-card",
  project: 1, // 1-based project number, or a project id/name such as "proforms"
});
```

The selected project appears as the featured project. The other projects remain in the “Also shipped” list. By default, the widget uses the Apreez profile and shipped-project list bundled with the package.

## Customize it

```js
mountProfileWidget({
  target: "#profile-card",
  project: "proforms",
  accent: "#d946ef",
  profile: {
    name: "Your Name",
    handle: "@yourhandle",
    role: "Product engineer",
    bio: "A short introduction.",
    avatar: "https://example.com/avatar.jpg",
    website: "https://example.com",
    profileUrl: "https://example.com",
    links: [
      { label: "GitHub", url: "https://github.com/you", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/you", icon: "linkedin" },
      { label: "Website", url: "https://example.com", icon: "globe" },
    ],
  },
  projects: [
    { id: "project-one", name: "Project One", description: "What it does.", url: "https://project-one.example", image: "https://example.com/project.png", source: "https://github.com/you/project-one" },
    { id: "project-two", name: "Project Two", description: "Another shipped project.", url: "https://project-two.example" },
  ],
});
```

`mountProfileWidget` returns `{ element, update, destroy }`. Project selection is 1-based for numeric values and also accepts a project `id` or `name`.

## GitHub profile README

GitHub profile README Markdown does not execute npm JavaScript or embed iframes. This package runs on normal pages where you can add HTML and JavaScript, including a GitHub Pages site. A profile README needs a linked image/card or a link to your portfolio.

## License

MIT
