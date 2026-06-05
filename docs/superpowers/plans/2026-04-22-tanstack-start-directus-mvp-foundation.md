# TanStack Start + Directus MVP Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first working slice of the new marketing stack: a `TanStack Start` app in `apps/web`, a documented/self-hosted local `Directus` development stack, and CMS-driven home + slug pages rendered through a normalized adapter layer.

**Architecture:** Leave the current root `Next.js + Payload` app untouched as a legacy reference while introducing a new `apps/web` frontend in parallel. The new frontend talks only to normalized CMS helpers in `apps/web/src/lib/cms/*`, and local `Directus` development runs from `infra/directus` so CMS infrastructure stays operationally separate from the frontend runtime.

**Tech Stack:** `pnpm`, `TanStack Start`, `React`, `TypeScript`, `Vite`, `Vitest`, `Testing Library`, `Directus`, `Postgres`, Docker Compose, Tailwind CSS

---

### Task 1: Create the parallel `apps/web` workspace and prove the new app boots

**Files:**
- Create: `pnpm-workspace.yaml`
- Modify: `package.json`
- Create: `apps/web/package.json`
- Create: `apps/web/tsconfig.json`
- Create: `apps/web/vite.config.ts`
- Create: `apps/web/vitest.config.ts`
- Create: `apps/web/src/test/setup.ts`
- Create: `apps/web/src/routes/__root.tsx`
- Create: `apps/web/src/routes/index.tsx`
- Create: `apps/web/src/styles/app.css`
- Test: `apps/web/src/routes/index.test.tsx`

- [ ] **Step 1: Write the failing test for the new home route**

```tsx
// apps/web/src/routes/index.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HomePage } from './index'

describe('HomePage', () => {
  it('renders the temporary migration copy', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: 'Seed Initiative' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('TanStack Start marketing rebuild'),
    ).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the new test to verify it fails**

Run: `pnpm --dir apps/web vitest run src/routes/index.test.tsx`

Expected: FAIL with `ENOENT` or `Cannot find module './index'` because `apps/web` does not exist yet.

- [ ] **Step 3: Create the workspace, the new app package, and the minimal TanStack Start route shell**

```yaml
# pnpm-workspace.yaml
packages:
  - apps/*
```

```json
// package.json
{
  "name": "bascibowl",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "dev:web": "pnpm --dir apps/web dev",
    "build:web": "pnpm --dir apps/web build",
    "test:web": "pnpm --dir apps/web test"
  },
  "dependencies": {
    "@gsap/react": "^2.1.1",
    "@lexical/link": "0.28.0",
    "@lexical/react": "0.28.0",
    "@payloadcms/db-postgres": "^3.23.0",
    "@payloadcms/live-preview-react": "^3.23.0",
    "@payloadcms/next": "^3.23.0",
    "@payloadcms/richtext-lexical": "^3.23.0",
    "@payloadcms/storage-s3": "^3.23.0",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-icons": "^1.3.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.3",
    "@react-email/components": "^0.0.34",
    "@types/escape-html": "^1.0.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "escape-html": "^1.0.3",
    "graphql": "^16.9.0",
    "gsap": "^3.12.5",
    "lexical": "0.28.0",
    "lucide-react": "^0.454.0",
    "next": "^15.2.4",
    "payload": "^3.23.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-email": "^4.0.2",
    "sharp": "^0.33.5",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^20",
    "@types/react": "npm:types-react@19.0.0-rc.1",
    "@types/react-dom": "npm:types-react-dom@19.0.0-rc.1",
    "eslint": "^8",
    "eslint-config-next": "15.0.3",
    "postcss": "^8",
    "tailwindcss": "^4.0.0",
    "typescript": "^5"
  },
  "overrides": {
    "@types/react": "npm:types-react@19.0.0-rc.1",
    "@types/react-dom": "npm:types-react-dom@19.0.0-rc.1"
  }
}
```

```json
// apps/web/package.json
{
  "name": "@seed/web",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev --port 3000",
    "build": "vite build",
    "start": "node .output/server/index.mjs",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@directus/sdk": "^19.0.0",
    "@tanstack/react-router": "^1.132.0",
    "@tanstack/react-start": "^1.132.0",
    "@tanstack/react-start-server": "^1.132.0",
    "@vitejs/plugin-react": "^4.4.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwindcss": "^4.1.4"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.4",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@types/node": "^22.15.3",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "jsdom": "^26.1.0",
    "typescript": "^5.8.3",
    "vite": "^6.3.3",
    "vitest": "^3.1.1"
  }
}
```

```json
// apps/web/tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": ["vite/client", "vitest/globals"]
  },
  "include": ["src", "vite.config.ts", "vitest.config.ts"]
}
```

```ts
// apps/web/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), tanstackStart(), react()],
})
```

```ts
// apps/web/vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
})
```

```ts
// apps/web/src/test/setup.ts
import '@testing-library/jest-dom/vitest'
```

```tsx
// apps/web/src/routes/__root.tsx
import type { ReactNode } from 'react'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import '../styles/app.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Seed Initiative' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  )
}
```

```tsx
// apps/web/src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

export function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-6 px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        TanStack Start marketing rebuild
      </p>
      <h1 className="text-5xl font-semibold tracking-tight text-neutral-950">
        Seed Initiative
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-neutral-600">
        This app is the new CMS-driven marketing surface. The legacy Next.js app
        remains untouched while the rebuild is implemented in parallel.
      </p>
    </main>
  )
}
```

```css
/* apps/web/src/styles/app.css */
@import "tailwindcss";

:root {
  color-scheme: light;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  background: #fcfcfc;
  color: #111827;
}
```

- [ ] **Step 4: Install dependencies and run the test to verify it passes**

Run: `pnpm install && pnpm --dir apps/web test`

Expected: PASS with `1 passed` from `src/routes/index.test.tsx`.

- [ ] **Step 5: Commit the parallel app scaffold**

```bash
git add pnpm-workspace.yaml package.json apps/web
git commit -m "feat: scaffold tanstack start marketing app"
```

### Task 2: Define the CMS contract and normalize Directus data before rendering

**Files:**
- Create: `apps/web/src/lib/env.ts`
- Create: `apps/web/src/lib/cms/schema.ts`
- Create: `apps/web/src/lib/cms/normalize.ts`
- Create: `apps/web/src/lib/cms/client.ts`
- Test: `apps/web/src/lib/cms/normalize.test.ts`

- [ ] **Step 1: Write the failing normalization test**

```ts
// apps/web/src/lib/cms/normalize.test.ts
import { describe, expect, it } from 'vitest'
import { normalizePage } from './normalize'

describe('normalizePage', () => {
  it('converts a raw Directus page into frontend-safe data', () => {
    const page = normalizePage({
      id: '1',
      slug: 'home',
      title: 'Home',
      status: 'published',
      seo_title: 'Seed Initiative',
      seo_description: 'STEM education for ambitious students.',
      og_image: null,
      sections: [
        {
          collection: 'page_sections_hero',
          item: {
            id: 'hero-1',
            eyebrow: 'Nonprofit',
            heading: 'Planting the seed for the next generation',
            body: 'Support students in academic competitions.',
            primary_cta_label: 'Get involved',
            primary_cta_href: '/get-involved',
          },
        },
      ],
    })

    expect(page.slug).toBe('home')
    expect(page.sections[0]).toMatchObject({
      type: 'hero',
      heading: 'Planting the seed for the next generation',
    })
  })
})
```

- [ ] **Step 2: Run the normalization test to verify it fails**

Run: `pnpm --dir apps/web vitest run src/lib/cms/normalize.test.ts`

Expected: FAIL with `Cannot find module './normalize'`.

- [ ] **Step 3: Add environment parsing and the frontend CMS contract**

```ts
// apps/web/src/lib/env.ts
export type AppEnv = {
  DIRECTUS_URL: string
  SITE_URL: string
  DIRECTUS_WEBHOOK_SECRET?: string
}

export function getEnv(source: Record<string, string | undefined> = import.meta.env) {
  const env: AppEnv = {
    DIRECTUS_URL: source.VITE_DIRECTUS_URL ?? '',
    SITE_URL: source.VITE_SITE_URL ?? 'http://localhost:3000',
    DIRECTUS_WEBHOOK_SECRET: source.DIRECTUS_WEBHOOK_SECRET,
  }

  if (!env.DIRECTUS_URL) {
    throw new Error('Missing VITE_DIRECTUS_URL')
  }

  return env
}
```

```ts
// apps/web/src/lib/cms/schema.ts
export type HeroSection = {
  type: 'hero'
  eyebrow?: string
  heading: string
  body?: string
  primaryCta?: { label: string; href: string }
}

export type FeatureGridSection = {
  type: 'feature-grid'
  heading: string
  items: Array<{ title: string; body: string }>
}

export type RichContentSection = {
  type: 'rich-content'
  heading?: string
  html: string
}

export type CtaBandSection = {
  type: 'cta-band'
  heading: string
  body?: string
  cta: { label: string; href: string }
}

export type LogoCloudSection = {
  type: 'logo-cloud'
  heading?: string
  logos: Array<{ src: string; alt: string }>
}

export type FaqSection = {
  type: 'faq'
  heading: string
  items: Array<{ question: string; answer: string }>
}

export type StatsSection = {
  type: 'stats'
  heading?: string
  items: Array<{ label: string; value: string }>
}

export type TestimonialStripSection = {
  type: 'testimonial-strip'
  heading?: string
  items: Array<{ quote: string; name: string; role?: string }>
}

export type SiteSection =
  | HeroSection
  | FeatureGridSection
  | RichContentSection
  | CtaBandSection
  | LogoCloudSection
  | FaqSection
  | StatsSection
  | TestimonialStripSection

export type CmsPage = {
  id: string
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  ogImage?: string
  sections: SiteSection[]
}

export type SiteSettings = {
  siteName: string
  siteDescription: string
  footerText: string
}

export type NavigationItem = {
  label: string
  href: string
}
```

- [ ] **Step 4: Add the normalizer and Directus client**

```ts
// apps/web/src/lib/cms/normalize.ts
import type { CmsPage, HeroSection, SiteSection } from './schema'

type RawSection = {
  collection: string
  item: Record<string, unknown>
}

type RawPage = {
  id: string
  slug: string
  title: string
  status: string
  seo_title?: string | null
  seo_description?: string | null
  og_image?: string | null
  sections?: RawSection[]
}

function normalizeSection(section: RawSection): SiteSection {
  if (section.collection === 'page_sections_hero') {
    const item = section.item

    return {
      type: 'hero',
      eyebrow: item.eyebrow as string | undefined,
      heading: item.heading as string,
      body: item.body as string | undefined,
      primaryCta:
        item.primary_cta_label && item.primary_cta_href
          ? {
              label: item.primary_cta_label as string,
              href: item.primary_cta_href as string,
            }
          : undefined,
    } satisfies HeroSection
  }

  throw new Error(`Unsupported section collection: ${section.collection}`)
}

export function normalizePage(raw: RawPage): CmsPage {
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    seoTitle: raw.seo_title ?? raw.title,
    seoDescription: raw.seo_description ?? '',
    ogImage: raw.og_image ?? undefined,
    sections: (raw.sections ?? []).map(normalizeSection),
  }
}
```

```ts
// apps/web/src/lib/cms/client.ts
import { createDirectus, readItem, readItems, rest } from '@directus/sdk'
import { getEnv } from '../env'
import { normalizePage } from './normalize'
import type { NavigationItem, SiteSettings } from './schema'

const env = getEnv()
const client = createDirectus(env.DIRECTUS_URL).with(rest())

export async function getPageBySlug(slug: string) {
  const raw = await client.request(
    readItems('pages', {
      filter: {
        slug: {
          _eq: slug,
        },
        status: {
          _eq: 'published',
        },
      },
      fields: ['id', 'slug', 'title', 'seo_title', 'seo_description', 'og_image', 'sections.collection', 'sections.item.*'],
      limit: 1,
    }),
  )

  return raw[0] ? normalizePage(raw[0] as never) : null
}

export async function getSiteSettings() {
  return client.request(
    readItem('site_settings', 'singleton'),
  ) as Promise<SiteSettings>
}

export async function getNavigation() {
  return client.request(
    readItems('navigation', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: ['label', 'href'],
      sort: ['sort'],
    }),
  ) as Promise<NavigationItem[]>
}
```

- [ ] **Step 5: Run the tests and commit the adapter boundary**

Run: `pnpm --dir apps/web test`

Expected: PASS with the home route test and `normalize.test.ts` both green.

```bash
git add apps/web/src/lib apps/web/src/routes apps/web/src/test
git commit -m "feat: add directus adapter boundary"
```

### Task 3: Build the site shell and render CMS-driven home + slug pages

**Files:**
- Modify: `apps/web/src/routes/__root.tsx`
- Create: `apps/web/src/components/layout/site-header.tsx`
- Create: `apps/web/src/components/layout/site-footer.tsx`
- Create: `apps/web/src/components/layout/site-shell.tsx`
- Create: `apps/web/src/components/sections/hero-section.tsx`
- Create: `apps/web/src/components/sections/section-renderer.tsx`
- Modify: `apps/web/src/routes/index.tsx`
- Create: `apps/web/src/routes/$slug.tsx`
- Test: `apps/web/src/components/sections/section-renderer.test.tsx`

- [ ] **Step 1: Write the failing test for section rendering**

```tsx
// apps/web/src/components/sections/section-renderer.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionRenderer } from './section-renderer'

describe('SectionRenderer', () => {
  it('renders hero sections from normalized CMS data', () => {
    render(
      <SectionRenderer
        sections={[
          {
            type: 'hero',
            eyebrow: 'Nonprofit',
            heading: 'Planting the seed for the next generation',
            body: 'Support students in academic competitions.',
            primaryCta: { label: 'Get involved', href: '/get-involved' },
          },
        ]}
      />,
    )

    expect(
      screen.getByRole('heading', {
        name: 'Planting the seed for the next generation',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get involved' })).toHaveAttribute(
      'href',
      '/get-involved',
    )
  })
})
```

- [ ] **Step 2: Run the section rendering test to verify it fails**

Run: `pnpm --dir apps/web vitest run src/components/sections/section-renderer.test.tsx`

Expected: FAIL with `Cannot find module './section-renderer'`.

- [ ] **Step 3: Create the shared site shell and the first section component**

```tsx
// apps/web/src/components/layout/site-header.tsx
import type { NavigationItem } from '../../lib/cms/schema'

export function SiteHeader({ items }: { items: NavigationItem[] }) {
  return (
    <header className="border-b border-neutral-200 bg-white/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a className="text-sm font-semibold tracking-[0.24em] text-neutral-950" href="/">
          SEED INITIATIVE
        </a>
        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
```

```tsx
// apps/web/src/components/layout/site-footer.tsx
export function SiteFooter({ text }: { text: string }) {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-500">
        {text}
      </div>
    </footer>
  )
}
```

```tsx
// apps/web/src/components/layout/site-shell.tsx
import type { ReactNode } from 'react'
import type { NavigationItem, SiteSettings } from '../../lib/cms/schema'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function SiteShell({
  children,
  navigation,
  settings,
}: {
  children: ReactNode
  navigation: NavigationItem[]
  settings: SiteSettings
}) {
  return (
    <>
      <SiteHeader items={navigation} />
      <main>{children}</main>
      <SiteFooter text={settings.footerText} />
    </>
  )
}
```

```tsx
// apps/web/src/components/sections/hero-section.tsx
import type { HeroSection } from '../../lib/cms/schema'

export function HeroSectionView({ section }: { section: HeroSection }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {section.eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          {section.eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-neutral-950">
        {section.heading}
      </h1>
      {section.body ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          {section.body}
        </p>
      ) : null}
      {section.primaryCta ? (
        <a
          className="mt-10 inline-flex rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white"
          href={section.primaryCta.href}
        >
          {section.primaryCta.label}
        </a>
      ) : null}
    </section>
  )
}
```

```tsx
// apps/web/src/components/sections/section-renderer.tsx
import type { SiteSection } from '../../lib/cms/schema'
import { HeroSectionView } from './hero-section'

export function SectionRenderer({ sections }: { sections: SiteSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        if (section.type === 'hero') {
          return <HeroSectionView key={`${section.type}-${index}`} section={section} />
        }

        return null
      })}
    </>
  )
}
```

- [ ] **Step 4: Wire the root route, home route, and slug route to the CMS adapter**

```tsx
// apps/web/src/routes/__root.tsx
import type { ReactNode } from 'react'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import { getNavigation, getSiteSettings } from '../lib/cms/client'
import { SiteShell } from '../components/layout/site-shell'
import '../styles/app.css'

export const Route = createRootRoute({
  loader: async () => {
    const [settings, navigation] = await Promise.all([
      getSiteSettings(),
      getNavigation(),
    ])

    return { settings, navigation }
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Seed Initiative' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const { navigation, settings } = Route.useLoaderData()

  return (
    <RootDocument>
      <SiteShell navigation={navigation} settings={settings}>
        <Outlet />
      </SiteShell>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  )
}
```

```tsx
// apps/web/src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '../components/sections/section-renderer'
import { getPageBySlug } from '../lib/cms/client'

export const Route = createFileRoute('/')({
  loader: async () => {
    const page = await getPageBySlug('home')

    if (!page) {
      throw new Error('Missing published home page in Directus')
    }

    return { page }
  },
  component: HomePage,
})

export function HomePage() {
  const { page } = Route.useLoaderData()

  return <SectionRenderer sections={page.sections} />
}
```

```tsx
// apps/web/src/routes/$slug.tsx
import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '../components/sections/section-renderer'
import { getPageBySlug } from '../lib/cms/client'

export const Route = createFileRoute('/$slug')({
  loader: async ({ params }) => {
    const page = await getPageBySlug(params.slug)

    if (!page) {
      throw new Error(`Missing published page for slug: ${params.slug}`)
    }

    return { page }
  },
  component: SlugPage,
})

function SlugPage() {
  const { page } = Route.useLoaderData()

  return <SectionRenderer sections={page.sections} />
}
```

- [ ] **Step 5: Run tests, build the app, and commit the CMS-driven shell**

Run: `pnpm --dir apps/web test && pnpm --dir apps/web build`

Expected: PASS for the route and section tests, then a successful Vite build ending with `.output/server/index.mjs` in the output tree.

```bash
git add apps/web/src/components apps/web/src/routes apps/web/src/lib
git commit -m "feat: render directus-driven marketing pages"
```

### Task 4: Stand up local Directus development and add launch plumbing

**Files:**
- Create: `infra/directus/compose.yaml`
- Create: `infra/directus/.env.example`
- Create: `docs/directus/mvp-schema.md`
- Create: `apps/web/.env.example`
- Create: `apps/web/src/lib/webhook.ts`
- Modify: `apps/web/vite.config.ts`
- Create: `apps/web/src/routes/api/revalidate.ts`
- Test: `apps/web/src/lib/webhook.test.ts`

- [ ] **Step 1: Write the failing webhook validation test**

```ts
// apps/web/src/lib/webhook.test.ts
import { describe, expect, it } from 'vitest'
import { isValidDirectusWebhook } from './webhook'

describe('isValidDirectusWebhook', () => {
  it('accepts only the configured webhook secret', () => {
    expect(
      isValidDirectusWebhook('local-webhook-secret', 'local-webhook-secret'),
    ).toBe(true)
    expect(
      isValidDirectusWebhook('wrong-secret', 'local-webhook-secret'),
    ).toBe(false)
  })
})
```

- [ ] **Step 2: Run the webhook test to verify it fails**

Run: `pnpm --dir apps/web vitest run src/lib/webhook.test.ts`

Expected: FAIL with `Cannot find module './webhook'`.

- [ ] **Step 3: Add the local Directus stack and the schema contract document**

```yaml
// infra/directus/compose.yaml
services:
  postgres:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    ports:
      - "5435:5432"
    volumes:
      - directus_postgres:/var/lib/postgresql/data

  directus:
    image: directus/directus:11.6.1
    restart: unless-stopped
    depends_on:
      - postgres
    ports:
      - "8055:8055"
    environment:
      SECRET: ${DIRECTUS_SECRET}
      ADMIN_EMAIL: ${ADMIN_EMAIL}
      ADMIN_PASSWORD: ${ADMIN_PASSWORD}
      DB_CLIENT: pg
      DB_HOST: postgres
      DB_PORT: 5432
      DB_DATABASE: ${POSTGRES_DB}
      DB_USER: ${POSTGRES_USER}
      DB_PASSWORD: ${POSTGRES_PASSWORD}
      WEBSOCKETS_ENABLED: "true"
      CORS_ENABLED: "true"
      CORS_ORIGIN: "http://localhost:3000"
      STORAGE_LOCATIONS: local
      STORAGE_LOCAL_DRIVER: local
      STORAGE_LOCAL_ROOT: /directus/uploads
    volumes:
      - directus_uploads:/directus/uploads

volumes:
  directus_postgres:
  directus_uploads:
```

```dotenv
// infra/directus/.env.example
POSTGRES_DB=seed_directus
POSTGRES_USER=seed
POSTGRES_PASSWORD=seedpassword
DIRECTUS_SECRET=change-me-before-production
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change-me-before-production
```

```md
<!-- docs/directus/mvp-schema.md -->
# Directus MVP Schema

## Collection: `pages`

- `slug` (`string`, unique)
- `title` (`string`)
- `status` (`string`, use `published` for public pages)
- `seo_title` (`string`)
- `seo_description` (`text`)
- `og_image` (`uuid`, optional, Directus file relation)
- `sections` (`m2a`)

## Collection: `site_settings`

- singleton collection
- `siteName` (`string`)
- `siteDescription` (`text`)
- `footerText` (`text`)

## Collection: `navigation`

- `label` (`string`)
- `href` (`string`)
- `sort` (`integer`)
- `status` (`string`)

## M2A section collections for phase 1

- `page_sections_hero`
  - `eyebrow`
  - `heading`
  - `body`
  - `primary_cta_label`
  - `primary_cta_href`

## Permissions

- Public role: read published `pages`, `navigation`, `site_settings`, and file assets used by published pages.
- Admin/editor roles: full content management inside Directus.
```

- [ ] **Step 4: Add environment examples, revalidation endpoint, and sitemap settings**

```dotenv
// apps/web/.env.example
VITE_DIRECTUS_URL=http://localhost:8055
VITE_SITE_URL=http://localhost:3000
DIRECTUS_WEBHOOK_SECRET=local-webhook-secret
```

```ts
// apps/web/vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      tailwindcss(),
      tanstackStart({
        sitemap: {
          enabled: true,
          host: env.VITE_SITE_URL || 'http://localhost:3000',
        },
      }),
      react(),
    ],
  }
})
```

```ts
// apps/web/src/lib/webhook.ts
export function isValidDirectusWebhook(
  signature: string | null,
  expected: string | undefined,
) {
  return Boolean(expected && signature === expected)
}
```

```ts
// apps/web/src/routes/api/revalidate.ts
import { createFileRoute } from '@tanstack/react-router'
import { isValidDirectusWebhook } from '../../lib/webhook'

export const Route = createFileRoute('/api/revalidate')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const signature = request.headers.get('x-directus-webhook')
        const expected = process.env.DIRECTUS_WEBHOOK_SECRET

        if (!isValidDirectusWebhook(signature, expected)) {
          return Response.json({ ok: false }, { status: 401 })
        }

        return Response.json({ ok: true })
      },
    },
  },
})
```

- [ ] **Step 5: Start local Directus, rerun tests/build, and commit the local integration layer**

Run: `cp infra/directus/.env.example infra/directus/.env && docker compose -f infra/directus/compose.yaml --env-file infra/directus/.env up -d && pnpm --dir apps/web test && pnpm --dir apps/web build`

Expected:
- Docker starts `postgres` and `directus` containers
- `http://localhost:8055` loads Directus locally
- app tests pass
- the frontend build completes with sitemap generation enabled

```bash
git add infra/directus docs/directus apps/web/.env.example apps/web/vite.config.ts apps/web/src/lib/webhook.ts apps/web/src/routes/api/revalidate.ts
git commit -m "feat: add local directus stack and launch plumbing"
```
