# TanStack Start + Directus Marketing Rebuild Design

## Summary

This project will replace the current `Next.js + Payload` architecture with a greenfield `TanStack Start` marketing site backed by a separately self-hosted `Directus` instance. The rebuild is intentionally not a compatibility migration. The goal is to launch a cleaner MVP quickly, redesign the content model and UI architecture at the same time, and treat the current repository as a reference source for copy, assets, and information architecture rather than as code to port directly.

## Goals

- Ship a new marketing site quickly with a simpler architecture.
- Replace `Payload` with a separately self-hosted `Directus` CMS.
- Rebuild the frontend in `TanStack Start`.
- Redesign both the content model and the UI architecture instead of preserving the old system.
- Keep the initial CMS model intentionally small and opinionated.
- Decouple the frontend from the CMS so each can evolve independently.

## Non-Goals

- Preserve the existing `Payload` block schema.
- Maintain code-level compatibility with the current `Next.js` app.
- Build a universal page builder in phase 1.
- Migrate every historical page or content type before launch.
- Add complex editorial workflows, preview systems, or application/dashboard features in phase 1.

## Current-State Observations

The current repository is a `Next.js 15` App Router application with `Payload` integrated deeply into both the runtime and content model. `Payload` is configured in `src/payload.config.ts`, exposed through `src/app/(payload)/`, and consumed directly by the public site in files such as `src/app/(app)/layout.tsx`, `src/app/(app)/page.tsx`, `src/app/(app)/[...slug]/page.tsx`, and `src/app/sitemap.ts`. The current UI also depends on several `next/*` APIs and `Payload`-specific types, which makes direct component reuse a poor strategy for a `TanStack Start` rebuild.

## Recommended Migration Strategy

Use a parallel greenfield rebuild inside the existing repository.

### Why this strategy

- It matches the primary constraint: launch a cleaner MVP fast.
- It avoids spending time on compatibility layers between `Next.js`, `Payload`, `TanStack Start`, and `Directus`.
- It supports redesigning content and UI together without legacy schema pressure.
- It allows the current application to remain available as a reference during development.

### Practical meaning

- Keep the current codebase temporarily as a reference only.
- Build the new frontend in a separate app surface, such as `apps/web`.
- Stand up a fresh self-hosted `Directus` project outside the frontend runtime.
- Recreate the first-launch marketing pages manually in the new CMS rather than auto-transforming `Payload` content.

## Target Architecture

### Frontend

`TanStack Start` will serve as the public website application. It is responsible for:

- routing
- data loading
- page rendering
- SEO metadata
- layout chrome
- form submission behavior if needed

The frontend should be structured around a simple layering model:

1. design tokens
2. UI primitives
3. marketing sections
4. page templates
5. route loaders and page composition

The new frontend should not attempt to reuse `next/*`-dependent components directly. It may reuse concepts, copy, and visual ideas from the current app, but implementation should be native to the new stack.

### CMS

`Directus` will be separately self-hosted and used only as the content backend. It should own:

- pages
- site settings
- navigation
- media/assets
- redirects if needed later

`Directus` should be deployed independently with its own:

- `Postgres` database
- object storage for media, preferably `S3`-compatible
- backups
- admin access controls

### Integration Boundary

All CMS access in the frontend should go through a small adapter layer such as `apps/web/src/lib/cms/*`.

This layer is responsible for:

- talking to the `Directus` SDK or API
- fetching published content
- validating and normalizing CMS responses
- converting raw CMS payloads into app-friendly types

Page components and routes should never depend directly on raw `Directus` response shapes.

## MVP Content Model

The first release should use a deliberately small schema.

### Collections

- `pages`
- `site_settings`
- `navigation`

Media should use `Directus` files/assets rather than a custom collection unless a real requirement appears.

### `pages` shape

Each page should include:

- `slug`
- `title`
- `status`
- `seo_title`
- `seo_description`
- `og_image`
- `template_key` for special cases if needed
- `sections` for ordered page content

### Section model

The section system should be simple and opinionated. Start with a constrained set of marketing sections rather than a highly flexible builder.

Recommended initial section types:

- hero
- rich content
- feature grid
- CTA band
- logo cloud
- FAQ
- stats
- testimonial strip

If a section is not needed for launch pages, it should not be added yet.

## UI Architecture

The UI redesign should begin with a reusable design system instead of page-by-page one-off components.

### Build order

1. establish tokens for typography, spacing, color, radius, elevation, and layout rhythm
2. build primitives such as buttons, links, containers, headings, text blocks, cards, and section wrappers
3. compose those primitives into marketing sections
4. compose sections into CMS-driven pages

The visual style is intentionally not locked in yet because UI reference files will be provided later. That is a visual direction input, not an architectural blocker. The system should therefore optimize for clean composition and easy restyling rather than hard-coded aesthetic choices.

## Deployment Model

The system should be run as two independent products:

1. a deployed `TanStack Start` frontend
2. a separately self-hosted `Directus` CMS

Recommended operational assumptions:

- `Directus` runs in Docker or a similar container environment
- `Postgres` is dedicated to `Directus`
- media uses object storage
- the frontend receives `Directus` base URL and access configuration via environment variables
- `Directus` sends webhooks to the frontend to trigger cache invalidation or rebuild behavior when published content changes

This separation keeps the frontend portable and prevents CMS runtime decisions from leaking into application code.

## Delivery Plan Shape

The project should be executed in four phases.

### Phase 1: Foundation

- create the new `TanStack Start` application surface
- define project structure
- set up styling and design-token foundations
- implement environment handling
- create the `Directus` client and CMS adapter layer
- establish shared layout and SEO utilities

### Phase 2: CMS Model

- create the `Directus` schema for `pages`, `site_settings`, and `navigation`
- configure media storage
- define section field structures for the initial launch set
- seed enough content to unblock frontend development

### Phase 3: Marketing UI

- build primitives and layout system
- build the initial set of reusable marketing sections
- connect section rendering to normalized CMS data
- recreate key launch pages in the new CMS

### Phase 4: Cutover

- verify page rendering and content completeness
- connect publish webhooks and invalidation
- QA important routes and SEO metadata
- switch traffic to the new site when the MVP is accepted

## Testing and Reliability

Testing should focus on high-value coverage:

- validation tests for CMS adapter normalization
- focused rendering tests for section-to-component mapping
- smoke tests for critical marketing pages
- checks for missing or partial CMS content so pages fail safely

Draft preview, advanced editorial workflow, and broad end-to-end coverage should stay out of phase 1 unless requirements change.

## Key Risks and Mitigations

### Risk: rebuilding a complex page builder too early

Mitigation: keep the section model intentionally small and add new section types only when launch pages require them.

### Risk: CMS schema leaks into frontend rendering

Mitigation: enforce a dedicated CMS adapter layer and normalized app-level types.

### Risk: UI work stalls while waiting for visual direction

Mitigation: build the design system around composition, spacing, and typography structure first; apply final visual language after reference files arrive.

### Risk: migration scope expands into a full content migration project

Mitigation: manually recreate only the MVP pages in the new system and treat the old site as source material, not a migration target.

## Explicit Decisions

- This is a greenfield rebuild, not an in-place rewrite.
- Phase 1 optimizes for speed to MVP.
- Phase 1 scope is a marketing site with CMS-managed pages only.
- `Directus` will be separately self-hosted.
- The content model and UI architecture will both be redesigned.
- The visual system will be finalized after UI reference files are provided.

## Success Criteria

The redesign is successful when:

- a new `TanStack Start` marketing site is running independently of the legacy app
- `Directus` manages pages, site settings, navigation, and assets
- launch pages can be edited in the CMS and rendered correctly in the frontend
- the frontend does not depend on `Payload`, `Next.js`, or raw `Directus` response shapes
- the initial site is visually ready for a dedicated polish pass once reference material is attached
