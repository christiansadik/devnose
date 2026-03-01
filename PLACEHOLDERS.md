# Placeholders to Replace

Tracking document for all placeholder/dummy data that needs to be replaced with real content before launch.

## Content Data

### `src/content/info.json`
| Field | Current Value | Action |
|---|---|---|
| text (id:1) | "Web Developer" | Verify or update role title |
| text (id:2) | "Italy" | Update with actual city/region if desired |
| text (id:3) | "5+ years experience" | Verify years |

### `src/content/socials.json`
| Field | Current Value | Action |
|---|---|---|
| link (GitHub) | `https://github.com/placeholder-christian` | Replace with real GitHub URL |
| link (LinkedIn) | `https://linkedin.com/in/placeholder-christian` | Replace with real LinkedIn URL |
| link (X/Twitter) | `https://x.com/placeholder-christian` | Replace with real X URL (or remove if not used) |

### `src/content/work.json`
| Entry | Current Value | Action |
|---|---|---|
| id:1 | Placeholder Corp / Junior Web Developer / 2019-2021 | Replace with real experience |
| id:2 | Placeholder Agency / Mid-level Web Developer / 2021-2023 | Replace with real experience |
| id:3 | Placeholder Studio / Senior Web Developer / 2023-present | Replace with real experience |

### `src/content/other/about.mdx`
- Current: generic bio text
- Action: rewrite with personal voice and actual details

## Assets

### `src/assets/pfp.png`
- Current: Spectre theme author's photo
- Action: replace with Christian's profile picture

### `public/favicon.svg`
- Current: Astro default favicon
- Action: replace with devnose logo (tracked in DVN-05)

### `public/img/og.png`
- Current: Spectre OG image
- Action: create devnose branded OG image

## Config

### `.env`
- GISCUS_* variables: configure when Giscus is set up (DVN-14)

## Posts & Projects

### `src/content/posts/`
- Current: Spectre example posts
- Action: remove and add real articles (DVN-07)

### `src/content/projects/`
- Current: Spectre example projects
- Action: remove and add real projects (DVN-08)
