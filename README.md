# 3D Portfolio — Sunil Kumar

Personal portfolio for **Sunil Kumar** — Python backend developer & AI/ML engineer with applied computer vision expertise. Dark gold-themed, animated, and deployed on Vercel.

## Tech Stack

- **React 18** + **Vite 4**
- **Three.js** via `@react-three/fiber`, `@react-three/drei`, `@react-spring/three`
- **Tailwind CSS 3**
- **React Router 6**, **EmailJS**, **Typewriter Effect**, **Vertical Timeline**

## Features

- **Home** — animated hero with typewriter roles, floating tech icons with mouse parallax, live stats (OMR accuracy, tests written, LOC)
- **About** — skill groups (AI/CV, LLM/RAG, Backend, etc.), work experience & education timeline
- **Projects** — 5 project cards with 3D tilt hover effects (OMR engine, RAG system, face recognition, ML pipelines, local LLM setup)
- **Contact** — EmailJS-powered form with an interactive 3D Fox that walks while typing and reacts on submit

## Project Structure

```
src/
├── pages/        # Home, About, Projects, Contact
├── components/   # Navbar, Footer, CTA, Alert, Loader, HomeInfo
├── models/       # 3D GLB models (Fox, Island, Bird, Plane, Sky)
├── constants/    # All personal data: skills, experience, projects, links
├── hooks/        # useAlert
└── assets/       # icons, images, 3D models, audio
```

> All content is data-driven — edit `src/constants/index.js` to update skills, experience, education, projects, and social links.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Lint
npm run lint

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file in the project root (needed for the contact form):

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

Deployed on **Vercel** with an SPA rewrite configured in `vercel.json` (all routes fall back to `/`).

## Links

- GitHub: [THINKING-MACHINE-SK](https://github.com/THINKING-MACHINE-SK)
- LinkedIn: [Sunil Kumar](https://www.linkedin.com/in/sunil-kumar-47b6a6198/)
- Email: kumarsunilharoli@gmail.com