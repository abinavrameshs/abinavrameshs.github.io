# abinavrameshs.github.io

Personal portfolio of Abinav Ramesh, built with Jekyll and hosted on GitHub Pages.

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Where things live

| What | Where |
| --- | --- |
| Hero, experience, skills, certifications, contact text | `_data/sitetext.yml` |
| Navigation | `_data/navigation.yml` |
| Projects (one Markdown file each) | `_projects/` |
| Layouts and partials | `_layouts/`, `_includes/` |
| Styles (colour tokens for light and dark at the top) | `assets/css/site.css` |
| Theme toggle and mobile menu | `assets/js/site.js` |

## Adding a project

Create `_projects/<slug>.md`:

```yaml
---
title: "My Project"
slug: my-project              # page URL becomes /projects/my-project/
order: 7                      # position in the grid (lower comes first)
featured: true                # true = "Gen AI & agents" grid, false = "Earlier work"
category: "LLM Applications"
summary: "One sentence on what it does and why it matters."
image: assets/img/portfolio/my-project.svg
alt: "My Project"
tags: ["Python", "LangGraph"]
github: https://github.com/abinavrameshs/my-project
demo: https://example.com     # optional
---

## Objective
...
```
