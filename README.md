# Skye Ibrahim — Portfolio

A dark, editorial developer portfolio built with **Astro**, **Tailwind CSS**, **Three.js**, and **Phosphor Icons**. It combines a readable project-first layout with an optional real-time galaxy merger background.

---

## Key Features

- **GPGPU N-Body Galaxy Merger**: A real-time astrophysical simulation that can run behind the portfolio.
  - **Hardware Accelerated**: Uses WebGL/GPGPU processing to render and calculate thousands of stars at 60 FPS, with adjustable particle counts.
  - **Emergent Astrophysics**: Models violent relaxation as two spiral systems collide and settle into an elliptical galaxy.
  - **True $O(n^2)$ N-Body Mechanics**: Every star calculates its gravitational attraction against every other star and black hole.
  - **Inelastic Core Collisions**: Central black holes use momentum-conserving collision logic when they cross the event horizon.
  - **Dynamical Friction**: Simulates the gravitational drag that drives the galaxies toward collision.
  - **Plummer Softening**: Prevents infinite acceleration during close particle encounters.
  - **Animated Lifecycle**: Particle fizzle transitions handle startup, shutdown, theme changes, and simulation rebuilds.

- **Background Theme Selector**: Dark mode is the default. Visitors can enable the galaxy merger from the global selector or directly from its project controls.
- **Reading Accessibility**: A persistent text-colour selector offers the standard palette or a warmer reading tone, with reduced-motion support and accessible keyboard controls.
- **Editorial Layout**: A constrained reading width, collapsible project and experience details, and responsive navigation keep long technical content scannable.
- **Astro Content Collections**: The separate Dark-themed Blog route is ready for typed Markdown or MDX posts.

## Technology Stack

- **Framework**: [Astro v7](https://astro.build/)
- **Graphics & Math**: [Three.js](https://threejs.org/) + GLSL compute shaders
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Language**: TypeScript
- **Output**: Static Site Generation (SSG)

## Project Structure

```text
/
├── src/
│   ├── components/       # Portfolio sections and controls
│   ├── content/blog/     # Blog posts managed by Astro collections
│   ├── layouts/          # Shared page layout
│   ├── pages/            # Portfolio and Blog routes
│   ├── scripts/          # Theme, controls, and galaxy engine
│   ├── data/             # Project and skills data
│   └── styles/           # Global design system
├── public/               # Résumé and favicon assets
└── package.json          # Dependencies and scripts
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build |

---

*Built by Skye Ibrahim — 2026*
