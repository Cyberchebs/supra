# 🏎️ SUPRA — Interactive 3D Experience

A high-performance, scroll-driven 3D showcase of the Toyota GR Supra, built with React Three Fiber, GSAP, and Tailwind CSS.

---

## ✨ Features

- **3D Model Viewer** — Fully interactive Toyota GR Supra rendered in real-time with React Three Fiber
- **Scroll-Driven Animations** — GSAP ScrollTrigger animates the car through multiple cinematic scenes as you scroll
- **Animated Loader** — Custom branded loading screen with live progress tracking via `useProgress`
- **Engine Section** — Separate inline-6 engine 3D model with its own Canvas
- **FAQ Accordion** — Staggered GSAP entrance animation on a buyer's guide FAQ section
- **Order CTA** — Links directly to the official Toyota Supra configurator
- **Mobile Responsive** — Adapted camera positions, model scaling, and layout for all screen sizes
- **Scroll Lock on Load** — Scroll is locked until the 3D model is fully ready, preventing GSAP timeline desync

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | Three.js renderer for React |
| [@react-three/drei](https://github.com/pmndrs/drei) | R3F helpers (`useProgress`, `useGLTF`) |
| [GSAP](https://gsap.com/) + ScrollTrigger | Scroll-driven animations & timelines |
| [@gsap/react](https://gsap.com/resources/React/) | `useGSAP` hook for React integration |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Vite](https://vitejs.dev/) | Build tool & dev server |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Scene.jsx          # R3F Canvas wrapper
│   ├── Experience.jsx     # 3D model + GSAP scroll timelines
│   ├── Loader.jsx         # Branded loading overlay
│   ├── Hero.jsx           # First section with large SUPRA heading
│   ├── Check.jsx          # Engine model section
│   ├── Engine.jsx         # Inline-6 engine R3F component
│   ├── Faq.jsx            # Accordion FAQ with stagger animation
│   └── Buy.jsx            # Order CTA section
├── context/
│   └── Scenecontext.jsx   # Global model ref + modelReady state
├── App.jsx                # Root layout + scroll lock logic
└── index.css              # Global styles
3dcomponents/
├── Toyota_supra_dekztrax_34.glb
└── Inline_6_engine.glb
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/supra-3d.git
cd supra-3d
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 🎥 Scroll Animation Breakdown

The camera and car position are animated across four scroll sections:

| Section | Effect |
|---|---|
| **Hero** (`#first`) | Car drives in from the left on first load |
| **Engine** (`#second`) | Car moves back and rotates, camera zooms to tight FOV |
| **FAQ** (`#check`) | Car sweeps to the right as FAQ accordion staggers in |
| **Buy** (`#last`) | Car accelerates away into the distance |

---

## 📱 Mobile Support

- Camera positions and car `x` offsets adjust via `react-responsive`
- `ScrollTrigger.config({ ignoreMobileResize: true })` prevents address bar resize from breaking scrub animations
- All section heights use `dvh` units to account for dynamic viewport changes

---

## 🙏 Credits

- 3D Models sourced from [Sketchfab](https://sketchfab.com)
- Fonts: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue), [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed)

---

## 📄 License

MIT © Chebem Nzom
