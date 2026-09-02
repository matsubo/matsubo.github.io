set shell := ["bash", "-cu"]

# List available recipes
default:
    @just --list

# Install dependencies
install:
    bun install

# Start the dev server
dev:
    bun run dev

# Build the static site into dist/
build:
    bun run build

# Lint and check formatting (Biome, read-only)
lint:
    bun run lint

# Apply safe lint fixes and formatting
fix:
    bun run lint:fix

# Type-check TypeScript sources with the native tsc
typecheck:
    bun run typecheck

# Run unit tests (no build required)
test-unit:
    bun run test:unit

# Verify published pages and internal links in dist/
test-dist: build
    bun run test:dist

# Unit test coverage report
coverage:
    bun run coverage

# Run every test layer
test: test-unit test-dist

# Everything CI runs
ci: lint typecheck test
