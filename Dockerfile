FROM node:24

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

WORKDIR /app

# Copy package files for dependency installation
COPY package.json bun.lock ./

# Install dependencies using Bun
RUN bun install

# Expose Next.js development server port
EXPOSE 3000

# Start Next.js development server
CMD ["bun", "run", "dev"]
