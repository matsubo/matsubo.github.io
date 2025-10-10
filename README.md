# Yuki Matsukura's Portfolio

Personal portfolio website built with **Next.js 15** and deployed on GitHub Pages.

🌐 **Live Site**: [https://matsubo.github.io/](https://matsubo.github.io/)

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + DaisyUI
- **Internationalization**: next-intl (English/Japanese)
- **Icons**: Heroicons
- **Package Manager**: Bun
- **Deployment**: GitHub Pages (Static Export)

## ✨ Features

- ✅ Multi-language support (English/Japanese)
- ✅ Dark/Light theme switching
- ✅ SEO optimized (Meta tags, OGP, Twitter Cards)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap & Robots.txt generation
- ✅ Google Tag Manager integration
- ✅ Fully responsive design
- ✅ Accessibility (A11y) compliant

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

## 🚀 Deployment

The site is automatically built and deployed to GitHub Pages when changes are pushed to the `main` branch.

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
