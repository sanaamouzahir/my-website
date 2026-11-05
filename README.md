# Sanaa Mouzahir — Personal Website

Personal site with five sections: **Research · Poker · Pole · Travel · Contact.**
Soft pink + baby blue palette on a deep-plum near-black background, with clean gradient washes per section.

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

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **lucide-react** (icons)
- **Framer Motion**

## Project structure

```
├── index.html
├── package.json
├── vite.config.js / tailwind.config.js / postcss.config.js
├── public/
│   ├── favicon.svg
│   └── images/
├── posters/            (poster PDFs — see posters/README.txt)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        └── PersonalLanding.jsx   (the entire site, one component)
```

## Status

Live development. Remaining placeholders are marked `TODO` in `src/components/PersonalLanding.jsx`; the contact form still needs a backend, and deployment (Vercel/Netlify + domain) is pending.
