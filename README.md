# 🌿 GreenHost — Eco-Friendly Web Hosting Template

A premium, fully responsive HTML template for green web hosting companies. Built with pure HTML5, CSS3 and vanilla JavaScript — no frameworks, no build steps, opens directly in any browser.

**One-line pitch:** Fast, secure and 100% renewable web hosting for websites that care about the planet.

## 🎨 Design System

A token-driven CSS design system lives in `assets/css/style.css` via `:root` custom properties.

| Token | Value | Usage |
| --- | --- | --- |
| `--c-forest-950` | `#071a10` | Deepest green — page hero gradient base |
| `--c-forest-800` | `#0f2e1e` | Dark panels & footer fields |
| `--c-leaf-600` | `#1f8a4a` | Primary brand green — buttons, accents |
| `--c-lime-400` | `#b6f03c` | Signature lime — CTA highlights, badges |
| `--c-mint-100` | `#e6f6e7` | Soft section backgrounds |
| `--c-cream` | `#f4f9f4` | Page background |
| `--c-ink` | `#0b1f14` | Headings & body text |
| `--c-slate` | `#4f6a59` | Secondary text |
| `--font-display` | `Space Grotesk` | Geometric display headlines |
| `--font-body` | `Manrope` | Readable body & UI text |
| `--text-*` | `clamp()` scale | Fluid `14px → 56px` type ramp |
| `--radius-*` | `8px → 9999px` | Soft tech-modern radii |
| `--ease / --ease-bounce` | cubic-bezier | Motion signature |

- **Typography:** Space Grotesk (geometric sans, techy-warm) + Manrope (body).
- **Layout:** CSS Grid, Flexbox, `clamp()`, `aspect-ratio`; responsive at ~980px and ~720px with a mobile burger drawer.
- **Motion:** IntersectionObserver scroll reveals, hero background crossfade, floating chips, bounce hover states — all disabled under `prefers-reduced-motion`.

## 📄 Pages

| Page | File | Highlights |
| --- | --- | --- |
| Home | [index.html](index.html) | Split hero with crossfade background, live stats ticker, domain search, 6 feature cards, plans preview, 3-step onboarding |
| About | [about.html](about.html) | Brand story, impact stats, values cards, 2019→2025 timeline |
| Hosting Plans | [hosting.html](hosting.html) | Monthly/yearly billing toggle, 3 pricing tiers, VPS & dedicated teaser, FAQ |
| Domains | [domain.html](domain.html) | Domain search box, TLD pricing table (`.com` → `.green`), 3-step guide |
| Compare | [comparison.html](comparison.html) | 16-row feature matrix: Shared vs VPS vs Dedicated, plan recommendations |
| Team | [team.html](team.html) | Leadership grid with portraits, culture values, social links |
| Testimonials | [testimonial.html](testimonial.html) | 5-star review cards, customer stats, satisfaction CTA |
| Contact | [contact.html](contact.html) | Info cards (email/phone/address/hours), contact form, FAQ |

Every page shares the same sticky blurred header, active-nav highlighting, mobile burger menu, newsletter footer and back-to-top button.

## 🛠 Tech Stack

- **HTML5** — semantic markup, inline SVG icons, native `<details>/<summary>` FAQ
- **CSS3** — custom-property design tokens, Grid/Flexbox, `clamp()` fluid type, responsive breakpoints
- **Vanilla JavaScript** (`assets/js/main.js`) — scroll reveals, burger nav, year stamp, form handling, smooth anchors, hero crossfade
- **Fonts** — Google Fonts (Space Grotesk + Manrope)
- **Zero dependencies** — no Bootstrap, Tailwind, jQuery or build tools

## 🖼 Images

Original artwork lives in `assets/img/` and is used across the template:

| File | Used for |
| --- | --- |
| `hero.png` | Home hero visual card, hosting power teaser |
| `about.png` | About story section |
| `bg-bottom-hero.png` | Page-hero wave (also home hero crossfade layer) |
| `bg-bottom-footer.png` | Footer wave top edge (rotated) |
| `bg-domain.png` | Domain search background overlay |
| `bg-line.png`, `bg-round.png`, `bg-round-2.png`, `bg-square.png` | Decorative shape accents |
| `team-1.jpg` … `team-4.jpg` | Team portraits (400×400) |
| `testimonial-1.jpg` … `testimonial-4.jpg` | Review avatars (100×100) |

## 🔍 SEO

Semantic headings, per-page meta description & keywords, descriptive alt text, breadcrumb nav on inner pages, and an emoji SVG favicon.

**Keywords:** green web hosting, eco hosting, renewable energy hosting, carbon-neutral web hosting, sustainable hosting, VPS hosting, dedicated servers, domain registration, affordable hosting plans.

## 📜 License

Free to use for personal and commercial projects. Images are original assets bundled with the template.

---

### Let's Build Something Together 🚀

[https://tally.so/r/q4q1L9](https://tally.so/r/q4q1L9)
