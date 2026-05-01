# Skye Ibrahim — Portfolio

A high-performance, dark-minimalist developer portfolio built with **Astro**, **Tailwind CSS**, and **Phosphor Icons**. Designed for speed, accessibility, and a premium interactive experience.

---

## Key Features

- **GPGPU N-Body Galaxy Merger**: A real-time astrophysical simulation running directly in the portfolio background. 
  - **Hardware Accelerated**: Achieves a locked 60 FPS while rendering and calculating the gravity of over 5,000 individual stars simultaneously by bypassing JavaScript CPU bottlenecks and utilizing raw WebGL/GPGPU processing. Particle counts can be dynamically scaled based on device capabilities.
  - **Emergent Astrophysics (Violent Relaxation)**: The engine is mathematically strict enough that it naturally replicates complex, real-world astrophysical phenomena without being explicitly scripted. As the rapidly fluctuating gravitational potential scrambles orbital kinetic energy, the two flat spiral disks authentically transform into a featureless elliptical galaxy—a documented process known as violent relaxation.
  - **True $O(n^2)$ N-Body Mechanics**: Every single star calculates its gravitational attraction against every other star and black hole in the system simultaneously.
  - **Inelastic Core Collisions**: The central Supermassive Black Holes utilize momentum-conserving inelastic collision logic ($m_1v_1 + m_2v_2$) to fuse into a single entity when crossing the event horizon.
  - **Dynamical Friction (Chandrasekhar Drag)**: Simulates the gravitational "wake" created by massive bodies moving through a sea of smaller stars, forcing an inevitable, realistic collision.
  - **Plummer Softening**: Utilizes a gravitational softening parameter ($r^2 + \epsilon^2$) to prevent division-by-zero errors and infinite acceleration spikes during close-quarters stellar encounters.

- **Technical Spec-Sheet**: Professional high-density skills grid with backdrop-blur glassmorphism for maximum readability against the active simulation.
- **Unified Experience Timeline**: Consolidated career progression showing role-based growth and technical evolution within major tenures.
- **Dynamic Title Rotation**: Custom typewriter effect seamlessly cycling through technical roles (Data Engineer → Full-Stack Developer → Automation Developer).
- **Non-Blocking Architecture**: Leverages Astro's partial hydration to guarantee that core layouts and typography render instantly with zero JavaScript overhead, deferring the heavy WebGL engine to load asynchronously without blocking the main thread.

## Technology Stack

- **Framework**: [Astro v5.0+](https://astro.build/)
- **Graphics & Math**: [Three.js](https://threejs.org/) + GLSL (Compute Shaders)
- **Styling**: [Tailwind CSS v4.0+](https://tailwindcss.com/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Language**: TypeScript
- **Deployment**: Static Site Generation (SSG)

## Project Structure

```text
/
├── src/
│   ├── components/       # Reusable UI sections (Experience, Skills, Intro, etc.)
│   ├── layouts/          # Base Page Layouts (MainLayout.astro)
│   ├── data/             # Static data for projects and skills
│   ├── styles/           # Global design tokens and resets
│   └── pages/            # Page routes (index.astro)
├── public/               # Static assets (Resume, Favicon)
└── package.json          # Dependencies and scripts
```

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Spins up a local development server |
| `npm run build` | Builds the static site for production |
| `npm run preview` | Previews the production build locally |

## 📐 Design Philosophy

- **Minimalist Dark Theme**: Deep black surfaces (`#09090b`) with monochromatic accents and soft purple glows.
- **Typography-First**: Heavy use of "JetBrains Mono" and "Inter" for a clean, schematic "developer" vibe.
- **Proximity Awareness**: Interactive elements should feel alive and aware of the user's presence without being distracting.

---

*Build by Skye Ibrahim — 2026*
