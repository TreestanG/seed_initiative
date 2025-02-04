# Stage 1: Build
FROM oven/bun:1 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy dependencies definitions
COPY package.json bun.lockb* ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of your code
COPY . .

# Build the app (this assumes your package.json has a "build" script, 
# e.g., "next build" or equivalent for your project)
RUN bun run build

# Stage 2: Production
FROM oven/bun:1

# Set working directory
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app .

# Set the environment variable to production
ENV NODE_ENV=production

# Expose the port your app listens on (adjust if different)
EXPOSE 3000

# Run the production start command (make sure your package.json "start" script launches your app)
CMD ["bun", "run", "start"]