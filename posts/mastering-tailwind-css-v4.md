---
title: Mastering Tailwind CSS v4
date: '2026-03-10'
summary: Tailwind v4 rewrites the engine from scratch. Here is what the new CSS-first config means for your workflow.
tags:
  - CSS
  - Tailwind
---

Tailwind CSS v4 is a ground-up rewrite. The JavaScript config file is gone — configuration now lives in CSS using `@theme`. This post walks through the key changes and how to adapt your workflow.

## The New CSS-First Config

Instead of `tailwind.config.js`, you configure Tailwind inside your CSS file:

```css
@import 'tailwindcss';

@theme {
  --color-primary: #6366f1;
  --font-sans: 'Inter', ui-sans-serif;
  --spacing-18: 4.5rem;
}
```

Every `--variable` you define under `@theme` automatically becomes a utility class. `--color-primary` generates `bg-primary`, `text-primary`, `border-primary`, and so on.

## Design Tokens as CSS Variables

Your theme values are now real CSS custom properties on `:root`. That means you can read them in JavaScript, use them in `style` props, and override them per-component with a wrapping selector — no Tailwind plugins needed.

```tsx
<div style={{ color: 'var(--color-primary)' }}>Hello</div>
```

## What Stayed the Same

- All the utility classes you know work exactly the same
- `@apply` still works
- The JIT engine is still there (faster than ever)

## Migration Tips

1. Delete `tailwind.config.js` and `postcss.config.js`
2. Move theme values into `@theme {}` in your CSS
3. Replace `theme('colors.primary')` in CSS with `var(--color-primary)`
4. Run `npx tailwindcss upgrade` to auto-migrate most of the syntax

## Conclusion

The CSS-first approach aligns Tailwind with the direction the web platform is heading. Once you internalize that your theme _is_ CSS variables, v4 feels like a natural evolution.
