# Workspace Rules for matsubo.github.io

## Project Overview
This is a personal website/blog built with Gatsby and deployed to GitHub Pages.

## Package Manager
**Use Bun instead of npm/yarn/pnpm**
- This project uses **bun** as the package manager (evidenced by `bun.lock` file)
- Use `bun install` to install dependencies
- Use `bun run <script>` to run package.json scripts
- Do NOT use npm, yarn, or pnpm commands

## Framework & Technology Stack
- **Framework**: Gatsby v5.15.0 (React-based static site generator)
- **React**: v18.3.1
- **Styling**: Tailwind CSS v4.1.14 with DaisyUI v5.1.27
- **PostCSS**: For CSS processing with autoprefixer

### Key Gatsby Plugins
- `gatsby-plugin-postcss`: PostCSS support
- `gatsby-plugin-image`: Optimized image handling
- `gatsby-plugin-sharp`: Image processing
- `gatsby-plugin-manifest`: PWA manifest
- `gatsby-plugin-sitemap`: XML sitemap generation
- `gatsby-plugin-robots-txt`: robots.txt generation
- `gatsby-plugin-google-tagmanager`: Analytics
- `gatsby-source-filesystem`: File system access
- `gatsby-transformer-sharp`: Image transformations

## Development Commands
```bash
# Start development server
bun run develop
# or
bun run start

# Build for production
bun run build

# Serve production build locally
bun run serve

# Deploy to GitHub Pages
bun run deploy

# Clean cache and build artifacts
bun run clean
```

## Development Server
- Default Gatsby dev server runs on `http://localhost:8000`
- GraphQL playground available at `http://localhost:8000/___graphql`

## Browser Preview via MCP
This project has **browser-tools-mcp** configured, which provides browser automation capabilities through MCP (Model Context Protocol).

### Available MCP Browser Tools
Use these MCP tools instead of the built-in browser_action tool when possible:

- **takeScreenshot**: Capture current browser state
- **getConsoleLogs**: Check browser console logs
- **getConsoleErrors**: Check console errors
- **getNetworkErrors**: Check network error logs
- **getNetworkLogs**: Check all network logs
- **getSelectedElement**: Get selected DOM element
- **wipeLogs**: Clear browser logs from memory
- **runAccessibilityAudit**: Run accessibility audit
- **runPerformanceAudit**: Run performance audit
- **runSEOAudit**: Run SEO audit
- **runBestPracticesAudit**: Run best practices audit
- **runNextJSAudit**: Framework-specific audit
- **runDebuggerMode**: Debug application issues
- **runAuditMode**: Comprehensive optimization audit

### How to Preview Changes
1. Start the development server: `bun run develop`
2. Use MCP browser tools to take screenshots and run audits
3. For production build preview: `bun run build && bun run serve`

## Project Structure
```
matsubo.github.io/
├── src/
│   ├── components/     # React components
│   │   ├── layout.js
│   │   ├── navbar.js
│   │   ├── breadcrumb.js
│   │   └── seo.js
│   ├── hooks/         # Custom React hooks
│   ├── images/        # Image assets
│   ├── pages/         # Page components (auto-routed by Gatsby)
│   └── styles/        # Global styles
│       └── global.css
├── static/            # Static assets (served as-is)
├── .clinerules/       # AI assistant rules
├── gatsby-config.js   # Gatsby configuration
├── gatsby-node.js     # Gatsby Node APIs
├── gatsby-browser.js  # Gatsby Browser APIs
├── gatsby-ssr.js      # Gatsby SSR APIs
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js  # PostCSS configuration
```

## Deployment
- Deploys to GitHub Pages (main branch)
- Use `bun run deploy` to build and deploy
- Deployment script: `gatsby build && gh-pages -d public -b main`

## Styling Guidelines
- Use Tailwind CSS utility classes for styling
- DaisyUI components are available for common UI patterns
- Global styles are in `src/styles/global.css`
- PostCSS processes CSS with autoprefixer

## Code Quality
- Project uses Prettier for code formatting
- Configuration files: `.prettierrc` and `.prettierignore`
- Format code before committing

## Important Notes
1. **Always use bun** - This is critical for maintaining lock file consistency
2. **MCP Browser Tools** - Prefer MCP tools over built-in browser_action when previewing
3. **Static Site** - Remember this is a static site generator, not a server-side app
4. **GitHub Pages** - Site is served from the main branch after build
5. **Image Optimization** - Use gatsby-plugin-image for optimal image handling

## Environment
- **Node.js**: Check `.nvmrc` for version requirement
- **Package Manager**: Bun
- **Shell**: fish (on macOS)
- **IDE**: Visual Studio Code
