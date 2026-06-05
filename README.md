# Seed Initiative

A React-based website for the Seed Initiative, built with Vite, TypeScript, and Tailwind CSS v4.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+ (v20+ recommended)
- [pnpm](https://pnpm.io/) (v10+)

Install pnpm if you don't have it:

```bash
npm install -g pnpm
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the dev server
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

## Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Tech Stack

- **Runtime:** React 19
- **Language:** TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Animation:** Motion (fka Framer Motion)
- **Icons:** Lucide React

## Project Structure

```
src/
├── components/   # Reusable UI components
├── pages/        # Route-level page components
├── data/         # Static data and constants
├── types/        # TypeScript type definitions
├── App.tsx       # Root component with routes
├── main.tsx      # Entry point
└── styles.css    # Global styles and Tailwind imports
```
