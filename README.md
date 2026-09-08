# Raj Patel – Developer Portfolio

A modern, responsive, and customizable developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Once UI**. Designed to showcase full-stack and backend projects, skills, education, experience, and technical achievements.

---

## 🚀 Live Demo & Links

- **Portfolio / Code**: [GitHub Profile](https://github.com/raj-patel-dev)
- **LinkedIn**: [Raj Patel](https://www.linkedin.com/in/raj-patel21/)
- **Email**: [praj212004@gmail.com](mailto:praj212004@gmail.com)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [@once-ui-system/core](https://once-ui.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: SCSS Modules & Once UI Design Tokens
- **Content**: MDX (`@next/mdx`, `next-mdx-remote`)
- **Icons**: React Icons & Once UI Icon System

---

## ✨ Features

- ⚡ **Next.js 16 & React 19**: Super-fast performance with Turbopack and static site generation (SSG).
- 🌓 **Dynamic Theme System**: Dark & Light mode switcher with system preference detection and smooth transitions.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- 📂 **MDX Projects & Blog**: Rich markdown support for detailed project case studies and technical articles.
- 🔍 **SEO & Metadata Ready**: Dynamic OpenGraph image generation, schema markup (`schema.org`), sitemap, and RSS feed.
- 🕒 **Live Timezone Clock**: Real-time location & timezone header widget.
- 🛡️ **Optional Route Protection**: Password-protect private portfolio pages.

---

## 📁 Featured Projects

1. **Smart Cafe Management System**  
   Full-stack cafe management application for menu handling, automated billing, and order workflows.
2. **AI Writing Assistant**  
   Intelligent writing companion tool powered by modern AI integrations.
3. **AI Content Generator**  
   Automated content generation platform leveraging generative AI APIs.
4. **Object Analysis System**  
   Computer vision and analysis project for intelligent object detection and reporting.

---

## 📂 Project Structure

```text
raj-porfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About & CV page
│   │   ├── work/               # Projects showcase & MDX dynamic routes
│   │   ├── blog/               # Technical blog & articles
│   │   ├── gallery/            # Media/photo gallery
│   │   ├── api/                # API routes (OG image, RSS, Auth)
│   │   ├── layout.tsx          # Root layout & providers
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable UI components (Header, Footer, ThemeToggle, etc.)
│   ├── resources/              # Portfolio configuration & content
│   │   ├── content.tsx         # Personal details, bio, skills, education, projects config
│   │   ├── once-ui.config.ts   # Design tokens, routes, branding, styling config
│   │   └── icons.ts            # Icon mappings
│   ├── types/                  # TypeScript interfaces and type definitions
│   └── utils/                  # Helper utilities (formatDate, MDX parsing, etc.)
├── public/                     # Static assets (images, avatar, favicon)
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or later (Node.js 20+ recommended)
- **Package Manager**: `npm` (or `pnpm` / `yarn`)

### 1. Clone the repository

```bash
git clone https://github.com/raj-patel-dev/raj-porfolio.git
cd raj-porfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio live.

---

## 🔨 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint checks across the codebase |
| `npm run biome-write` | Formats code with Biome |

---

## ⚙️ Customization

- **Personal Info & Skills**: Edit [`src/resources/content.tsx`](./src/resources/content.tsx) to update bio, experience, education, skills, and links.
- **Site Styling & Routing**: Edit [`src/resources/once-ui.config.ts`](./src/resources/once-ui.config.ts) to toggle pages (`/work`, `/blog`, `/gallery`), adjust colors, fonts, and brand themes.
- **Projects & Case Studies**: Add or modify `.mdx` files inside [`src/app/work/projects/`](./src/app/work/projects/).

---

## 📄 License & Attribution

This project is built on the [Once UI Magic Portfolio](https://once-ui.com/products/magic-portfolio) template.  
Licensed under the project's original license terms.
