# AssetHub — Figma to Code (Responsive)

Next.js (App Router) + TypeScript + Tailwind CSS v4 recreation of the two AssetHub
screens — the Assets list table and the Asset Details view — fully responsive
from phone to large desktop.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/assets`. Visit `/assets/168`
for the details screen. Resize the window or open dev tools' device toolbar
to see the breakpoints below in action.

## Structure

```
app/
  layout.tsx              root layout, background, font
  globals.css              Tailwind import + CSS variables
  page.tsx                 redirects "/" -> "/assets"
  assets/
    page.tsx               Assets list screen (table on tablet+/cards on phone)
    [id]/page.tsx           Asset Details screen (responsive grid)
components/
  AppShell.tsx             shared responsive shell: owns the mobile-menu state,
                            renders Sidebar + TopBar + <main> for both pages
  Sidebar.tsx               static column on desktop, slide-in drawer + backdrop
                            below lg (1024px)
  TopBar.tsx                hamburger button below lg; search/icons scale down
                            on small screens
  StatusBadge.tsx           colored status pill
  DetailField.tsx           label/value pair used in the details grid
```

## Responsive behavior

| Breakpoint | What changes |
|---|---|
| `< 640px` (phone) | Sidebar becomes an off-canvas drawer opened via the hamburger icon in the top bar, with a tap-to-close backdrop. Theme toggle + settings icon hide from the top bar to save space. Details grid is a single column. Assets table is replaced by a stacked card list (checkbox, thumbnail, key/value pairs, full-width action button). Header buttons (Approve/Reject/Close, Export/Add Asset) stretch to fill the row. |
| `640–767px` (large phone / small tablet) | Details grid becomes 2 columns. Top bar controls reappear. Card list still used for assets (table needs md). |
| `768–1023px` (tablet) | Assets table returns, horizontally scrollable if the viewport is still narrower than its 900px min-width. Sidebar is still a drawer (hamburger visible) since there usually isn't room for a fixed 240px rail + content on a portrait tablet. |
| `≥ 1024px` (`lg`, laptop/desktop) | Sidebar becomes a permanent static column, hamburger disappears. Details grid moves to 3 columns. This matches the original Figma layout exactly. |

## Notes

- Icons: `lucide-react`
- Avatars: placeholder images from pravatar.cc — swap for real employee photos
- Font: system font stack (swap for Inter via `next/font/google` once you have
  network access)
