# Francisco Santopietro's Portfolio

A minimalist, elegant portfolio website built with **Astro**, **React**, **TypeScript**, and **Tailwind CSS**, inspired by the design of [Brittany Chiang](https://brittanychiang.com/).

## Features

- 🎨 **Modern Design**: Clean, minimalist aesthetic with evergreen accent colors
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **High Performance**: Static generation with Astro for lightning-fast loading (zero JS by default)
- 🎯 **Accessible**: Built with accessibility best practices (WCAG compliant)
- 🌲 **Evergreen Theme**: Professional dark theme with evergreen green accents
- ✨ **Smooth Animations**: Elegant transitions and hover effects with cursor-tracking gradient
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- 🛡️ **Secure**: Zero known vulnerabilities, regular dependency updates

## Tech Stack

- **Framework**: Astro 5 (with React islands for interactivity)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (from rsms.me/inter)
- **Deployment**: Vercel / Static hosting

## Project Structure

```
src/
├── layouts/
│   └── RootLayout.astro        # Main layout wrapper
├── pages/
│   └── index.astro             # Home page
├── components/
│   ├── common/
│   │   ├── Sidebar.tsx         # Navigation sidebar (React island)
│   │   ├── CursorGradient.tsx  # Cursor-tracking gradient (React island)
│   │   └── Footer.astro        # Footer section
│   └── sections/
│       ├── Hero.astro          # Hero/intro section
│       ├── About.astro         # About section
│       ├── Experience.astro    # Experience/jobs timeline
│       └── Projects.astro      # Featured projects showcase
├── styles/
│   └── globals.css             # Global styles & animations
├── consts.ts                   # Site data (jobs, projects, nav items)
└── env.d.ts                    # Type definitions

public/
├── favicon.png
├── bi-portfolio.png            # Project image
└── icons/

astro.config.mjs               # Astro configuration
tailwind.config.js             # Tailwind configuration
tsconfig.json                  # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:4321](http://localhost:4321) in your browser to see the result.

## Customization

### 1. Update Site Data
**File**: `src/consts.ts`
- Update `SITE_TITLE` and `SITE_DESCRIPTION`
- Modify `NAV_ITEMS` for navigation links
- Update `SOCIAL_LINKS` for GitHub and LinkedIn
- Edit `JOBS` array with your work experience
- Edit `PROJECTS` array with your featured projects

### 2. Update Navigation & Sidebar
**File**: `src/components/common/Sidebar.tsx`
- Change the title and subtitle
- Update the introduction text
- Modify social media links
- Adjust sticky positioning and responsive behavior

### 3. Update About Section
**File**: `src/components/sections/About.astro`
- Replace the bio text
- Update company links
- Modify the professional description

### 4. Update Experience Section
The experience data comes from `src/consts.ts`:
- Edit the `JOBS` array with your work history
- Update company names, positions, dates
- Modify job descriptions and skill lists
- Add or remove job entries

### 5. Update Projects Section
The project data comes from `src/consts.ts`:
- Edit the `PROJECTS` array
- Update project titles and descriptions
- Add project images to `/public/` folder
- Update live links and GitHub URLs
- Modify technology tags

### 6. Update Cursor Gradient
**File**: `src/components/common/CursorGradient.tsx`
- Modify the gradient color (currently `rgba(121, 187, 168, 0.15)`)
- Adjust the gradient size (currently `600px`)
- Change the opacity or transparency

## Color Scheme

The portfolio uses the **Evergreen** custom color palette:

- **Background**: `#0c1814` (evergreen-950 - very dark)
- **Accent**: `#77bba8` (evergreen-400 - medium green)
- **Text**: `#ddeee9` to `#bbddd3` (evergreen-100/200 - light)
- **Primary**: `#55aa92` (evergreen-500)
- **Hover**: Evergreen-400

Edit `tailwind.config.js` to customize colors by modifying the `evergreen` color palette.

## Animations

The site includes smooth transitions and hover effects:
- Easing function: `cubic-bezier(0.645, 0.045, 0.355, 1)`
- Transition duration: `0.25s`
- Scroll behavior: Smooth
- Cursor gradient: Tracks mouse position on desktop (1024px+)

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Static Hosting

The build output in `dist/` is a static website, so it works with:
- GitHub Pages
- Netlify
- AWS Amplify
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Static Generation**: All pages are pre-rendered at build time
- **Zero JavaScript (by default)**: Core content is pure HTML/CSS
- **React Islands**: Only interactive components (Sidebar, CursorGradient) use React
- **Image Optimization**: Astro automatically optimizes images
- **CSS Minification**: Tailwind automatically purges unused styles

## Lighthouse Scores

Expect excellent Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## License

MIT License - Feel free to use this as a template for your own portfolio!

---

**Built with Astro & Tailwind CSS**
**Inspired by [Brittany Chiang](https://brittanychiang.com/)**
