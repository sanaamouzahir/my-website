# Sanaa Mouzahir — Personal Website

Personal site with six sections: **Research · Poker · Pole · Travel · Content · Contact.**

Palette: soft pink (primary) + baby blue (secondary), on a deep-plum near-black background.
No flow-field animation — clean gradient washes per section.

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

---

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **lucide-react** (icons)
- **Framer Motion** (installed, available for motion polish)

---

## Project structure

```
personal-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── pole-dance.jpg        (real photo — pole performance)
│       ├── pool-cnt.jpg          (real photo — pool table)
│       └── roulette.jpg          (real photo — for casino-themed content card)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        └── PersonalLanding.jsx   (the entire site, one component)
```

---

## Sections

1. **Hero** — name, tagline, intro, "Get in touch" CTA, 4:5 portrait photo placeholder, scrolling ticker.
2. **Research** with four subsections:
   - **1.1 Education** — MIT (MSEAS Lab, advisor Lermusiaux), Columbia, EPFL
   - **1.2 Ongoing projects** — Navy-funded ML-SCOPE GP closure work + NIH-funded heart valve
   - **1.3 Publications & talks** — five key entries + soon-to-add note about IEEE/SIAM/MathWorks
   - **1.4 Affiliations** — MIT MechE, MIT CSE, MIT Poker Club
3. **Poker** — stats (TODO placeholders) + three "what poker taught me" philosophy boxes
4. **Pole** — intro paragraphs + 6-photo masonry gallery (first slot uses the real pole photo) + closing quote block
5. **Travel** — new section; stat strip + recent stops grid (all placeholders)
6. **Content** — TikTok handle `@hotgurlphysics` + three captioned video preview cards using the uploaded images. The roulette card has a layered casino-themed background gradient
7. **Contact** — email `sanaamz@mit.edu` + form + social icons (incl. TikTok)
8. **Footer** — logo, anchor links

---

## Aesthetic

- **Pink** (`#F9A8D4` family) — primary accent
- **Baby blue** (`#93C5FD` family) — secondary accent
- **Deep plum-black** (`#0F0A11`) — page background
- **JetBrains Mono** for data and labels
- **Inter Tight** for body
- Soft pink/blue gradient washes behind sections (no flow field)

---

## TODOs

Search for `TODO` in `src/components/PersonalLanding.jsx`. Categories:

### Identity
- **Hero photo** — drop into `public/images/` and reference in the hero `<img>` slot
- Update OG image at `public/og-image.png` for sharing previews

### Poker
- Real stats (hours, stakes, biggest score, etc.) — currently shown as `TODO`. You can keep numbers vague for privacy.

### Pole
- Two paragraphs of body text (the story)
- 5 more photos for the gallery
- A one-line quote

### Travel
- Real countries / cities / recent stops + photos

### Contact
- Confirm/replace placeholder social URLs (GitHub, LinkedIn, Twitter, Instagram)
- **Wire form to a backend** (Formspree, Resend, or serverless endpoint)

### Deploy
- Vercel or Netlify for the build
- Connect a domain

---

## Notes for the developer

- The "casino background" behind the roulette content card is done in CSS as a layered radial-gradient (gold + crimson + felt-green) plus a subtle diagonal pattern. The original photo sits on top with `mix-blend-luminosity`. If a clean cut-out version of the photo becomes available, just remove the `mix-blend-luminosity` class.
- All three content cards use real uploaded photos as the thumbnail — replace with real video assets when content drops.
- The "see my research" hero CTA was deliberately removed at the user's request.
- The site-wide animated flow field from earlier versions was removed.
