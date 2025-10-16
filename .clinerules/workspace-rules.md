# Workspace Rules for matsubo.github.io

## Project Overview
This is a personal website/blog built with Next.js and deployed to GitHub Pages as a static site.

## Package Manager
**Use Bun instead of npm/yarn/pnpm**
- This project uses **bun** as the package manager (evidenced by `bun.lock` file)
- Use `bun install` to install dependencies
- Use `bun run <script>` to run package.json scripts
- Do NOT use npm, yarn, or pnpm commands

## Framework & Technology Stack
- **Framework**: Next.js v15.5.5 (React-based framework with static export)
- **React**: v18.3.1
- **TypeScript**: v5.9.3
- **Styling**: Tailwind CSS v4.1.14 with DaisyUI v5.3.0
- **PostCSS**: For CSS processing with autoprefixer
- **Internationalization**: next-intl v4.3.12 (supports multiple languages)
- **Icons**: Heroicons v2.2.0

### Key Dependencies
- `next-intl`: Internationalization support
- `next-sitemap`: XML sitemap generation
- `@heroicons/react`: Icon components
- `sharp`: Image processing
- `prop-types`: Runtime type checking

### Build Configuration
- **Static Export**: Uses `output: "export"` for static site generation
- **GitHub Pages**: Optimized for username.github.io deployment
- **Image Optimization**: Disabled (`unoptimized: true`) for static hosting
- **Code Splitting**: Automatic vendor and common chunk splitting
- **Compression**: Enabled for production builds

## Development Commands
```bash
# Start development server
bun run dev

# Build for production (static export)
bun run build

# Start production server (for local testing)
bun run start

# Export static site
bun run export

# Deploy to GitHub Pages
bun run deploy

# Clean build artifacts
bun run clean

# Analyze bundle size
bun run analyze

# Run linter
bun run lint

# Type check
bun run type-check
```

## Development Server
- Next.js dev server runs on `http://localhost:3000` by default
- Hot Module Replacement (HMR) enabled for fast development

## Browser Preview via MCP
This project has **chrome-devtools-mcp** configured, which provides browser automation capabilities through MCP (Model Context Protocol).

### Available MCP Browser Tools
Use these MCP tools instead of the built-in browser_action tool when possible:

- **navigate_page**: Navigate to a URL
- **click**: Click on elements
- **fill**: Fill form inputs
- **take_snapshot**: Get text snapshot of page elements with UIDs
- **take_screenshot**: Capture page screenshots
- **list_console_messages**: Check browser console logs
- **list_network_requests**: Check network requests
- **evaluate_script**: Run JavaScript in the browser
- **handle_dialog**: Handle browser dialogs
- **performance_start_trace**: Start performance tracing
- **performance_stop_trace**: Stop performance tracing
- **performance_analyze_insight**: Analyze performance insights
- **list_pages**: List open browser pages
- **select_page**: Switch between browser tabs
- **new_page**: Open new page
- **close_page**: Close a page

### How to Preview Changes
1. Start the development server: `bun run dev`
2. Use MCP browser tools to navigate to `http://localhost:3000`
3. Take snapshots and screenshots to verify changes
4. For production build preview: `bun run build && bun run start`

## Project Structure
```
matsubo.github.io/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   ├── ht/           # HTML templates page
│   │   ├── rails/        # Rails tutorials
│   │   └── sfc/          # SFC archive
│   ├── components/       # React components
│   │   ├── layout.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── footer.tsx
│   │   ├── locale-switcher.tsx
│   │   ├── skip-link.tsx
│   │   ├── structured-data.tsx
│   │   └── sections/     # Section components
│   ├── i18n/             # Internationalization setup
│   │   └── request.ts
│   ├── messages/         # Translation files
│   │   └── locales/
│   │       ├── en/
│   │       └── ja/
│   ├── images/           # Image assets
│   └── styles/           # Additional styles
│       └── global.css
├── public/               # Static assets (served as-is)
│   ├── images/
│   ├── paper/
│   ├── ppt/
│   └── sfc/
├── locales/              # Root-level translation files
│   ├── en/
│   └── ja/
├── .clinerules/          # AI assistant rules
├── next.config.mjs       # Next.js configuration
├── next-sitemap.config.js # Sitemap configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── postcss.config.js     # PostCSS configuration
```

## Deployment
- Deploys to GitHub Pages as a static site
- Uses `output: "export"` in next.config.mjs
- Deploy command: `bun run deploy`
- Deployment script: `bun run clean && bun run build && touch out/.nojekyll`
- The `.nojekyll` file is created to prevent GitHub Pages from processing files with Jekyll

## Styling Guidelines
- Use Tailwind CSS utility classes for styling
- DaisyUI components are available for common UI patterns
- Global styles are in `src/app/globals.css` and `src/styles/global.css`
- PostCSS processes CSS with autoprefixer and postcss-preset-env

## Internationalization (i18n)
- Uses next-intl for internationalization
- Supported languages: English (en) and Japanese (ja)
- Translation files are in `src/messages/locales/` and `locales/`
- Language switching is available through the locale-switcher component

## UI Components
- **Do NOT use accordions** - Use card-based layouts instead for content organization
- Prefer simple, straightforward layouts over collapsible/expandable UI patterns

## Icons
- **Always use Heroicons** for icons: https://github.com/tailwindlabs/heroicons
- Import from `@heroicons/react/24/outline` for outline icons
- Import from `@heroicons/react/24/solid` for solid icons
- Example: `import { UserIcon } from '@heroicons/react/24/outline'`

## TypeScript
- Project is fully typed with TypeScript
- Type checking: `bun run type-check`
- TSConfig is set up for Next.js App Router

## Code Quality
- Project uses Prettier for code formatting
- Configuration files: `.prettierrc` and `.prettierignore`
- Format code before committing
- ESLint is configured with Next.js rules

## Important Notes
1. **Always use bun** - This is critical for maintaining lock file consistency
2. **MCP Browser Tools** - Prefer MCP tools over built-in browser_action when previewing
3. **Static Site Export** - This is a static site exported from Next.js, not a server-side app
4. **GitHub Pages** - Site is served from the `out/` directory after build
5. **Image Optimization** - Images are not optimized during build (unoptimized: true)
6. **App Router** - Uses Next.js App Router (not Pages Router)
7. **No Jekyll** - `.nojekyll` file is created to prevent GitHub Pages processing

## Environment
- **Node.js**: Check `.nvmrc` for version requirement
- **Package Manager**: Bun
- **Shell**: fish (on macOS)
- **IDE**: Visual Studio Code

## Performance
- Code splitting is automatically handled by Next.js
- Vendor code and common modules are split into separate chunks
- Compression is enabled for production builds
- React Strict Mode is enabled for better debugging
