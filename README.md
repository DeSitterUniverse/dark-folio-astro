My personal website and portfolio

---

Accessibility:
Off-white (`#E9E4DA`) or a warmer light peach (`#F7D6C8`) text colours, with reduced-motion support and accessible keyboard controls.


## Technology Stack

- **Framework**: [Astro v7](https://astro.build/)
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

The portfolio includes the
[WebGPU Galaxy Merger](https://github.com/DeSitterUniverse/webgpu-galaxy-merger)
repository as a pinned Git submodule. Clone it with:

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
