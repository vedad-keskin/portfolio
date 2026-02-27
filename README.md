# 🎮 Vedad Keskin — Portfolio

A pixel-art styled, mobile-first portfolio showcasing my web, mobile, and desktop projects. Built with **Angular 21** and designed with a retro aesthetic using **Press Start 2P** and **VT323** fonts on a dark navy palette.

---

## ✨ Features

- **🌟 Animated Starfield** — Canvas-based twinkling star background with subtle glow effects
- **⚡ Backend Wake Service** — One-click ping to wake free-tier Render backends with live animated status indicators (sleeping → waking → online)
- **🌐 Project Showcase** — Interactive cards with logos, tech tags, descriptions, and hover effects
- **🔄 EN / BS Translations** — Full bilingual support (English & Bosnian) with a pixel-art flag toggle switch, persisted via localStorage
- **📱 Mobile-First Design** — Fully responsive layout optimized for screens as small as 400px, with hamburger navigation
- **🎯 Tech Stack Display** — Auto-generated tag cloud in the hero section showing all unique technologies used across projects

---

## 🗂️ Project Structure

```
src/app/
├── core/
│   ├── models/          → Project interface
│   ├── data/            → Project metadata (titles, URLs, tags, backend URLs)
│   └── services/        → BackendWakeService (signal-based reactive status)
├── shared/
│   ├── language/        → LanguageService + EN/BS translations
│   └── components/
│       ├── nav/         → Sticky glassmorphic navbar + hamburger menu
│       ├── section-header/ → Reusable pixel-styled section titles
│       ├── lang-switch/ → Flag toggle for language switching
│       └── starfield/   → Canvas star animation background
└── features/
    ├── web-projects/    → Responsive project card grid
    └── backend-wake/    → Wake panel with animated status indicators
```


## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
ng serve

# Open in browser
http://localhost:4200
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Angular 21 |
| Language | TypeScript |
| Styling | Vanilla CSS (CSS Variables, mobile-first) |
| Fonts | Press Start 2P, VT323 (Google Fonts) |
| Hosting | Vercel (frontend), Render (backends) |
| Database | PostgreSQL via Supabase |

---

## 📄 License

© 2025 Vedad Keskin. All rights reserved.
