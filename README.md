# Yuki Matsukura's Portfolio

Personal portfolio website built with **Next.js 15** featuring a bold **Neo-Brutalist Editorial** design system, deployed on GitHub Pages.

🌐 **Live Site**: [https://matsubo.github.io/](https://matsubo.github.io/)

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + DaisyUI
- **Design System**: Neo-Brutalist Editorial
- **Typography**: Manrope, Crimson Pro, JetBrains Mono
- **Color System**: OKLCH with semantic tokens
- **Internationalization**: next-intl (English/Japanese)
- **Icons**: Heroicons
- **Package Manager**: Bun
- **Deployment**: GitHub Pages (Static Site Generation / SSG)

## ✨ Features

### Core Functionality
- ✅ Multi-language support (English/Japanese)
- ✅ Dark/Light theme switching with semantic color tokens
- ✅ SEO optimized (Meta tags, OGP, Twitter Cards)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap & Robots.txt generation
- ✅ Google Tag Manager integration
- ✅ Fully responsive design
- ✅ Accessibility (A11y) compliant

### Design System
- 🎨 Neo-Brutalist Editorial aesthetic
- 🎭 Custom font stack (Manrope, Crimson Pro, JetBrains Mono)
- 🌈 OKLCH color space with semantic theming
- ✨ Sophisticated animations with elastic easing
- 🖼️ Grain texture overlay
- 💫 Parallax scrolling effects
- 🎯 Enhanced card hover states with dramatic shadows

### Content Sections
- 🤖 AI-Powered Tools showcase
- 📱 Progressive Web Apps (PWA) collection
- 🔌 API Services
- 💼 Professional experience
- 🎓 Academic achievements
- 🛠️ Technical skills with animated progress bars

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/matsubo/matsubo.github.io.git
cd matsubo.github.io

# Install dependencies
bun install
```

## 🛠️ Development

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── [locale]/          # Locale-based pages
│   │   │   ├── layout.tsx     # Locale layout with GTM
│   │   │   └── page.tsx       # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable React components
│   ├── i18n/
│   │   └── request.ts         # i18n configuration
│   ├── messages/              # Translation files
│   │   ├── en/
│   │   └── ja/
│   └── middleware.ts          # Next.js middleware for i18n
├── public/                    # Static assets
├── next.config.mjs            # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── next-sitemap.config.js     # Sitemap generation
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Design System

### Color Architecture

The site uses a semantic color system built on DaisyUI themes with OKLCH color space:

- **Brand Colors**: `primary` (electric cyan), `secondary` (burnt orange), `accent` (warm gray)
- **Surface Colors**: `base-100/200/300` (backgrounds, cards, elevated surfaces)
- **Content Colors**: `base-content` with opacity variants for hierarchy
- **Semantic Tokens**: CSS custom properties for consistent theming

### Typography

- **Display**: Manrope (800/700 weight) - Bold, characterful headers
- **Body**: Crimson Pro (400-700 weight) - Refined serif for readability
- **Code**: JetBrains Mono (400-600 weight) - Technical precision

### Visual Effects

- Grain texture overlay for tactile depth
- Elastic easing animations (`cubic-bezier(0.16, 1, 0.3, 1)`)
- Card hover effects with layered shadows and gradients
- Parallax scrolling on hero section
- Text shimmer gradients for emphasis

## 🚀 Deployment

The site is automatically built and deployed to GitHub Pages when changes are pushed to the `master` branch.

### Manual Deployment

```bash
# Build and prepare for deployment
bun run deploy

# The output will be in the `out/` directory
```

## 🌍 Internationalization

The site supports English (default) and Japanese. Language files are located in `src/messages/`.

- **English**: `/` or `/en`
- **Japanese**: `/ja`

## 📝 License

© 2024 Yuki Matsukura. All rights reserved.

## 👤 Author

**Yuki Matsukura**
- GitHub: [@matsubo](https://github.com/matsubo)
- LinkedIn: [yukimatsukura](https://www.linkedin.com/in/yukimatsukura/)
- X (Twitter): [@matsubokkuri](https://x.com/matsubokkuri)
- Blog: [blog.teraren.com](https://blog.teraren.com/)
- Zenn: [@matsubokkuri](https://zenn.dev/matsubokkuri)

## 🔗 Projects & Links

- [Emoji Sprite](https://github.com/matsubo/emoji-sprite) - Emoji sprite generator
- [CNS Guide 2004](https://cns-guide.sfc.keio.ac.jp/2004/) - Keio SFC CNS Guide
