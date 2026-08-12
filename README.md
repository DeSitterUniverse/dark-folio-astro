# Skye Ibrahim — Portfolio

A dark, editorial developer portfolio built with **Astro**, **Tailwind CSS**, **WebGPU**, and **Phosphor Icons**. It combines a readable project-first layout with an optional real-time galaxy merger background.

---

## Key Features

- **GPGPU N-Body Galaxy Merger**: A real-time astrophysical simulation that can run behind the portfolio.
  - **Hardware Accelerated**: Uses raw WebGPU compute and render pipelines to simulate and draw up to 65,536 particles.
  - **Fully Live Collisionless Model**: Both galaxies contain massive stellar disks, responsive dark-matter halos, and compact cores.
  - **Tiled $O(n^2)$ Gravity**: Every particle samples every other particle through a workgroup-tiled WGSL compute shader.
  - **Selectable Gravity Solvers**: The exact tiled solver is joined by a compact Barnes-Hut octree that stores only occupied nodes and directly sums terminal buckets.
  - **Solver-Specific Resolution**: Measured interactive limits are 160x160 for All-Pairs and 256x256 for Barnes-Hut.
  - **Leapfrog Integration**: Half-step velocities improve orbital stability without increasing normal-step force evaluations.
  - **Unforced Dynamics**: Artificial core friction, stellar damping, and velocity clipping are removed.
  - **Emergent Orbital Decay**: Live halo and disk particles form gravitational wakes and absorb orbital energy and angular momentum.
  - **Fixed Component Masses**: Increasing particle count improves mass resolution without making either galaxy heavier.
  - **Component-Aware Force Resolution**: Compact cores, stellar disks, and dark-matter halos use separate symmetric pair softenings; live-particle softening decreases with particle count so higher settings resolve finer gravitational structure.
  - **Equilibrium-Oriented Initial Conditions**: A numerical force table follows the tapered flattened disk, while the smoothly truncated live halo uses composite-potential isotropic Jeans velocity moments.
  - **Mutually Inclined Disks**: Distinct stellar spin axes build three-dimensional structure into the encounter from the initial frame.
  - **Independent Component Centering**: Disk and halo positions and momenta are corrected separately before final equilibrium velocities and galaxy motion are applied.
  - **Resolution Floor**: Live-halo mode starts at 56x56 so one halo body remains below ten percent of the compact-core mass.
  - **Dark Halo Rendering**: Halo bodies participate fully in gravity but are omitted from the luminous particle layer.
  - **Protected Starts and Framing**: Disk radii determine non-overlapping initial clearance, the inner orbital period limits the timestep, and camera distance follows the system extent.
  - **Bound Core Coalescence**: Swept closest approach captures only gravitationally bound cores inside their shared softened scale, then delays coalescence through a temporary binary phase.
  - **Clear Controls**: Count changes mass resolution, disk radius changes stellar extent, and center offset selects the initial encounter scale.
  - **Stable Rebuilds**: Stateless seeded sampling preserves particle morphology and colour when controls change.
  - **Live Merger Stats**: Simulation time updates every physics frame while core separation streams back through small non-blocking GPU telemetry buffers.
  - **Animated Lifecycle**: Particle fizzle transitions handle startup, shutdown, theme changes, and simulation rebuilds.

- **Background Theme Selector**: Dark mode (`#121018`) is the default. Visitors can enable the black (`#000000`) galaxy merger background from the global selector or directly from its project controls.
- **Reading Accessibility**: A persistent text-colour selector offers the standard off-white (`#E9E4DA`) or a warmer reading tone (`#F7D6C8`), with reduced-motion support and accessible keyboard controls.
- **Editorial Layout**: A constrained reading width, collapsible project and experience details, and responsive navigation keep long technical content scannable.

## Technology Stack

- **Framework**: [Astro v7](https://astro.build/)
- **Graphics & Math**: WebGPU + WGSL tiled compute and instanced billboard shaders
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
│   ├── scripts/          # Portfolio theme controller
│   ├── data/             # Project and skills data
│   └── styles/           # Global design system
├── public/               # Résumé and favicon assets
├── vendor/
│   └── webgpu-galaxy-merger/ # Pinned simulation submodule
└── package.json          # Dependencies and scripts
```

The galaxy simulation, standalone demo, and test suites live in the
[WebGPU Galaxy Merger repository](https://github.com/DeSitterUniverse/webgpu-galaxy-merger).
Clone this portfolio with its pinned simulation source:

```bash
git clone --recurse-submodules https://github.com/DeSitterUniverse/dark-folio-astro.git
```

For an existing clone, run `git submodule update --init --recursive` before installing dependencies.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build |

---

*Built by Skye Ibrahim — 2026*
