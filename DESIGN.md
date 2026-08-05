# Design guide

Conventions for the Seed Initiative site. This describes what the codebase
actually does today — if you change a rule here, change the code with it.

**Stack:** Vite + React 19 + React Router 7, TypeScript, plain CSS in a single
`src/styles.css`. Tailwind is installed and imported but the site is built on
hand-written classes and CSS custom properties; **do not** add utility-class
soup to JSX. Icons come from `lucide-react`. JS animation uses `motion/react`,
currently only in `Header.tsx` and `FAQPage.tsx` — everything else animates in
CSS.

---

## 1. The look

The site is modeled on editorial nonprofit sites (nature.org is the explicit
reference in `MissionSection.tsx`). The governing idea:

> No card chrome, no shadow, no hover lift — the imagery and the typography do
> the work.

Three consequences that are easy to violate by accident:

- **Corners are square.** `--radius-sm` and `--radius-md` are both `0`. Never
  add a `border-radius` unless you are deliberately breaking the system.
- **Shadows are rare.** `--shadow` exists for the header, dropdowns, and the
  mobile panel. Content blocks use whitespace and rules, not elevation.
- **Separation is a 1–2px line**, not a box. See `.eyebrow::before` and
  `.desktop-nav a::after`.

---

## 2. Tokens

All tokens live in `:root` at the top of `src/styles.css`. Use them; do not
hard-code hex values, timings, or spacing in components.

### Color

| Token | Value | Use |
|---|---|---|
| `--brand-300` | `#7ec5ee` | The accent on dark grounds. Pair with navy text, never white |
| `--brand-400` | `#4aa9dd` | Icon fills |
| `--brand-600` | `#1f7aae` | Focus rings, stat icons |
| `--brand-700` | `#1c6f9f` | **The brand surface.** Primary buttons, links, active nav, and every full-width colored band (`.cta-band`, `.section-brand`, `.announcement`) |
| `--brand-800` | `#16587f` | Hero fallback background |
| `--brand-gradient-start` | `#173b71` | Deep navy. **A gradient stop only** — never a solid fill; as a flat area it reads as a colour from another site |
| `--ink-strong` / `--ink` / `--text` / `--muted` | | Heading → body → secondary text ramp |
| `--surface` / `--surface-tint` / `--surface-placeholder` | | White → tinted section → image placeholder |
| `--line` / `--line-light` | | Borders |

The palette is navy-through-sky. **There are no warm accent colors and no
multi-hue gradients.** Gradients only ever run
`--brand-gradient-start → --brand-600/700`, at `135deg` — and only across a
large area. On a thin band a gradient reads as uneven, not intentional; use a
solid fill (see `.announcement`).

Contrast, measured:

| Pair | Ratio | |
|---|---|---|
| White on `--brand-gradient-start` | 11.05:1 | ✅ |
| `--brand-300` on `--brand-gradient-start` | 5.84:1 | ✅ |
| `--brand-gradient-start` on `--brand-300` | 5.84:1 | ✅ |
| White on `--brand-700` | 5.49:1 | ✅ |
| `--brand-300` on `--brand-700` | 2.88:1 | ❌ fails AA |
| **White on `--brand-300`** | **1.89:1** | ❌ fails AA |

Two things follow. On `--brand-700`, use white — `--brand-300` is too close in
value to sit on it as text or as a large fill. And on `--brand-300`, text must
be navy: white on it is what `.button-secondary` and `.nav-donate` currently do,
and it fails badly. Don't copy that pattern.

### Spacing

A 4pt scale: `--space-1` (0.25rem) through `--space-16` (4rem). Section padding
uses `clamp()` rather than the scale, because it is viewport-responsive.

### Motion

| Token | Use |
|---|---|
| `--ease-out` | Default for everything |
| `--ease-out-snappy` | Quick UI feedback |
| `--ease-out-decisive` | Larger entrance moves |

Durations: `180ms` UI feedback, `250ms` state change, `600ms` image transforms.
**No infinite animations.** A global `prefers-reduced-motion` block near the top
of `styles.css` clamps all animation and transition durations to `0.01ms`.

---

## 3. Typography

- **Body / UI:** Inter, with `font-feature-settings: "cv01" "cv03" "cv04"`.
- **Display:** `Georgia, "Times New Roman", serif` — applied *selectively*, not
  globally, via `.feature-copy h2, .section-header h2, .hero-copy h1` and the
  stat values. Serif signals "this is a headline"; don't apply it to body copy.

Scale (`h1`/`h2` are fluid, `h3` is fixed):

```
h1  clamp(2rem, 4vw, 2.65rem)     800  -0.02em
h2  clamp(1.7rem, 3vw, 2.25rem)   700  -0.015em
h3  1.3rem                        700  -0.01em
```

Headings get `line-height: 1.15` and `text-wrap: balance`. Body `p` gets
`line-height: 1.65` and **`max-width: 68ch`** — measure is capped globally, so
don't fight it with per-component overrides.

### The eyebrow

`.eyebrow` is the site's signature label: uppercase, `0.12em` tracking, 700
weight, `--brand-700`, preceded by a 1.75rem × 2px rule. Use it above section
titles. `SectionHeader` renders it for you.

**Caps are for short labels only** — an eyebrow, a status flag, a button. Never
set a full sentence in caps: it slows reading, and once everything shouts,
nothing in the block can take emphasis. Prose is sentence case.

### One `<h1>` per page

The `<h1>` belongs to the page's `Hero`. Everything else starts at `<h2>`.
`SectionHeader` emits `<h2>` by design.

---

## 4. Layout

```css
.container { width: min(100% - clamp(2rem, 7vw, 8rem), 1120px); margin-inline: auto; }
```

**Max content width is 1120px.** Two-column blocks therefore render at roughly
520–560px per column on desktop — this is what the image `sizes` attributes
assume (§6).

Section rhythm — pick one, don't invent padding:

| Class | Padding block |
|---|---|
| `.section` | `clamp(4.75rem, 7vw, 7rem)` |
| `.section--tight` | `clamp(4rem, 5.75vw, 5.75rem)` |
| `.section--closing` | Extra bottom room before the footer |
| `.section-muted` | Adds the `--surface-tint` background |
| `.section-tournament` | Photo background + dark overlay, for white text |

**Don't stack two background classes.** `.section-muted` sets the `background`
*shorthand*, which resets `background-image` to `none`. Both it and
`.section-tournament` are single-class selectors, so whichever is declared last
in `styles.css` silently wins — `class="section-muted section-tournament"` loses
the photo and drops white text onto a near-white tint. Pick one. If you add
another background class, declare it after `.section-muted` and say so in a
comment.

### Breakpoints

Only three, and they are not negotiable without updating image `sizes`:

- **880px** — the big one. Every two-column grid (`.feature`, `.mission`,
  `.work-feature`, `.story-grid`, `.stats-grid`, `.footer-grid`,
  `.announcement-inner`) collapses to a single column, and the desktop nav swaps
  for the hamburger. Stack here, not at a value you picked for one component —
  a centered `1fr auto 1fr` row goes visibly off-center once the outer tracks
  stop matching, which happens well before the layout looks cramped.
- **720px** — minor typographic adjustments.
- **560px** — container gutter tightens, hero padding shrinks.

### The fixed header

`.site-header` is `position: fixed`, and `#main-content` clears it with
`padding-top: var(--header-height)` (106px). That number is
`24px padding × 2 + 56px nav row + 2px border`, and it describes the header
**expanded** — `Header.tsx` animates the padding down to 8px once you scroll,
but the offset is static layout, so it must match the unscrolled state.

`.nav-shell` carries `min-height: 56px` to hold that arithmetic true. Without
it, between roughly 880px and 1050px the nav crowds the logo, `img { max-width:
100% }` lets it shrink to 47px, and the header silently loses 9px.

If you change the header's padding, the logo size, or the border, update
`--header-height` with it — otherwise the header overlaps the top of every page.

---

## 5. Section components

Compose pages from `src/components/sections/`. Reach for an existing one before
writing new markup.

| Component | Shape | Use for |
|---|---|---|
| `Hero` | Full-bleed background + offset white copy card | Page header. One per page. |
| `SectionHeader` | eyebrow + `<h2>` + body | Any section intro |
| `MissionSection` | 5:4 image + copy, `imageSide` left/right | Editorial story block |
| `FeatureSection` | Image + copy, `imageFit` contain/cover | Program / offering |
| `WorkGrid` | Alternating image-left/right rows | Timeline of past work; handles `.mp4` as `<video>` |
| `StatsSection` | Serif numerals + labels | Impact figures |
| `TeamGrid` | 3:4 portraits, `minmax(280px, 1fr)` | People |
| `Announcement` | Navy strip: deadline flag + message + button | Site-wide notice, rendered once in `App.tsx` |
| `Timeline`, `TestimonialSection`, `InvolvementCards`, `CTA` | | Self-explanatory |

Alternating rows come from `index % 2` inside `WorkGrid`, not from the data.

### `Reveal`

Wraps a section to fade it in on scroll. Read the doc comment in
`src/components/Reveal.tsx` before touching it — the invariant is that **it is
never a content gate**. It starts `visible: true`, bails out for reduced-motion
users and for content already in view, and has a 1200ms failsafe. Any change
must preserve "content renders without JS, without IntersectionObserver, and
without the observer ever firing."

Don't wrap above-the-fold content, or pass `static`.

---

## 6. Images

**This is the part most likely to be got wrong. Read it before adding any image.**

Source images come off cameras at 4000–6000px. They must be resized before they
enter `public/media/`. A 6240px camera JPEG renamed to `.webp` is not a WebP —
check with `file`, not the extension.

### Naming convention

The base file is the **largest** variant; smaller steps sit beside it with a
width suffix:

```
26-tournament.webp        1600w   ← base, the largest
26-tournament-1024.webp   1024w
26-tournament-640.webp     640w
```

`src/lib/images.ts` encodes this. `buildSrcSet()` returns a `srcset` from a
`widths` array; `backgroundUrls()` returns 1x/2x url() pairs for CSS.

### Adding a responsive image

1. Generate the variants:
   ```bash
   cwebp -mt -q 80 -resize 1600 0 -metadata none source.jpg -o public/media/name.webp
   cwebp -mt -q 80 -resize 1024 0 -metadata none source.jpg -o public/media/name-1024.webp
   cwebp -mt -q 80 -resize  640 0 -metadata none source.jpg -o public/media/name-640.webp
   ```
   `-metadata none` matters: camera EXIF is kilobytes of GPS and lens data.
2. Add `widths: [640, 1024, 1600]` to the `ImageAsset` in `src/data/pages.ts`
   or the page.
3. The section component handles `srcSet`/`sizes`.

### Target sizes

| Context | Base width | Ladder |
|---|---|---|
| Two-column content (work, mission, feature) | 1600 | 640 / 1024 / 1600 |
| Portrait (story grid) | 1200 | 480 / 800 / 1200 |
| Full-bleed background | 2560 | 1440 (1x) / 2560 (2x) |
| Team portrait | 600 | single size |

Quality: `-q 80` for photos, `-q 76` for backgrounds behind a dark overlay,
`-q 75` for grainy sources (high-ISO shots inflate at higher q — check the byte
count with `ls -l`, since `du` rounds to the allocation block).

### `sizes`

Each component declares a `SIZES` constant matching its column width at the
880px breakpoint. If you change a grid's proportions, update the constant.

```
Work rows      (max-width: 880px) 100vw, 560px
Mission/Feature (max-width: 880px) 100vw, 520px
Story grid     (max-width: 880px) 100vw, 420px
```

### Backgrounds

CSS backgrounds can't use `srcset`. They use `image-set()` behind an `@supports`
guard, with a plain `url()` 1x fallback in the base rule — see `.hero` and
`.section-tournament`. `Hero` takes an `imageOneX` prop to opt in.

**`image-set()` resolves on pixel ratio alone — it knows nothing about viewport
width.** For a full-bleed background that is not enough on its own: a 1920px
DPR-1 monitor would take the 1x file and upscale it. Both backgrounds therefore
pair `image-set()` with a `@media (min-width: 1441px)` rule that promotes the 1x
candidate to the large file.

That media query only works if the variable it overrides is **declared in the
stylesheet**. `Hero` passes raw files as `--hero-src-small` / `--hero-src-large`
and lets `.hero` derive `--hero-pick-1x` from them, precisely because an inline
`style` outranks every stylesheet rule — set the picked value inline and the
media query is silently ignored.

Prefer a CSS class over an inline `style={{ backgroundImage }}`, so the
`@supports` upgrade can apply.

### Video

`WorkGrid` renders `.mp4` in `image.src` as a `<video>` with a `poster`. Encode
web video as H.264 with `-movflags +faststart`. **Video should not live in the
repo** — large binaries can't be delta-compressed and stay in git history
permanently. Host it externally and reference the URL.

### Always

- `loading="lazy"` on every `<img>` (the hero background is exempt — it's CSS).
- Real `alt` text describing the scene. Not the filename, not "image".
- A container with a fixed `aspect-ratio` + `object-fit: cover` so nothing
  reflows as images load.

---

## 7. Content

Copy and structured content live in `src/data/pages.ts` and `src/data/site.ts`,
typed by `src/types/content.ts`. Components render data; they don't hold strings.

Add a field to `src/types/content.ts` before using it. `ImageAsset.widths` is
optional — images without it simply render at their base size.

---

## 8. Accessibility

Non-negotiable, and mostly already wired:

- Focus ring is `2px solid var(--brand-600)` at `2px` offset on
  `:focus-visible`. Don't remove outlines.
- There's a `.skip-link` to `#main-content`.
- `target="_blank"` requires `rel="noopener noreferrer"`.
- Interactive elements need a real `<button>`/`<a>`, not a click handler on a
  `<span>`. (`WorkGrid`'s play overlay currently violates this — don't copy it.)
- Respect `prefers-reduced-motion`; the global block covers CSS, but JS-driven
  animation must check for itself — `Reveal` uses `matchMedia`, `Header` and
  `FAQPage` use `useReducedMotion()` from `motion/react`.
- Body text is `--text` on `--surface`. Don't lighten below `--muted`.
- Check any new color pair against the table in §2. White on `--brand-300` is
  the trap — it's 1.89:1.

### Writing UI copy

- One job per element. A flag flags, a message informs, a button acts.
- Lead with the fact that drives the decision. A deadline beats "now open."
- Keep a verb's name stable across the site: the sign-up action says "sign up"
  everywhere, not "register" in one place and "join" in another.
- Sentence case, active voice, no filler.

---

## 9. Quick checklist

Before you call a change done:

- [ ] `npm run build` passes (this runs `tsc -b` first)
- [ ] No new `border-radius`, no new hex literals, no new breakpoints
- [ ] New images are actually WebP, resized, EXIF-stripped, with variants
- [ ] Every `<img>` has `alt` and `loading="lazy"`
- [ ] One `<h1>` per page
- [ ] Checked at 375px, 880px, and 1440px

`npm run lint` currently reports 15 pre-existing errors (unused imports, an
unused `videoStatus` state, a stray `gradient()` stub in `ProgramsPage`). Don't
add to the count; fixing them is welcome.
