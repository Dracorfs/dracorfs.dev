# Francisco Santopietro's Portfolio

A minimalist, elegant portfolio website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, inspired by the design of [Brittany Chiang](https://brittanychiang.com/).

## Features

- 🎨 **Modern Design**: Clean, minimalist aesthetic with cyan accent colors
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **High Performance**: Static generation with Next.js for fast loading
- 🎯 **Accessible**: Built with accessibility best practices (WCAG compliant)
- 🌙 **Dark Theme**: Professional dark navy theme with cyan accents
- ✨ **Smooth Animations**: Elegant transitions and hover effects
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Main layout
│   └── page.tsx             # Home page
├── components/
│   ├── common/
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   └── Footer.tsx       # Footer section
│   └── sections/
│       ├── Hero.tsx         # Hero/intro section
│       ├── About.tsx        # About section
│       ├── Experience.tsx   # Experience/jobs timeline
│       └── Projects.tsx     # Featured projects showcase
├── public/
│   └── favicon.png          # Site icon
└── tailwind.config.js       # Tailwind configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### 1. Update Navigation & Sidebar
**File**: `components/common/Sidebar.tsx`
- Change the logo/initials (currently "FS")
- Update social media links
- Modify resume download link

### 2. Update Hero Section
**File**: `components/sections/Hero.tsx`
- Update your name and title
- Modify the introduction text
- Update the CTA button text

### 3. Update About Section
**File**: `components/sections/About.tsx`
- Replace the bio text
- Add/remove skills from the list
- Update the description

### 4. Update Experience Section
**File**: `components/sections/Experience.tsx`
- Edit the `jobs` array with your work history
- Update company names, positions, dates
- Modify job descriptions and skill lists
- Add or remove job entries

### 5. Update Projects Section
**File**: `components/sections/Projects.tsx`
- Edit the `projects` array
- Update project titles and descriptions
- Add project images to `/public/` folder
- Update live links and GitHub URLs
- Modify technology tags

### 6. Update Footer
**File**: `components/common/Footer.tsx`
- Update the email address
- Modify social media links
- Change contact text

## Color Scheme

The portfolio uses a carefully selected color palette inspired by Brittany Chiang's design:

- **Background**: `#0a192f` (Navy)
- **Accent**: `#64ffda` (Cyan)
- **Text**: `#8892b0` to `#ccd6f6` (Slate)
- **Hover**: Cyan accent color (#64ffda)

Edit `tailwind.config.js` to customize colors.

## Animations

The site includes smooth transitions and hover effects:
- Easing function: `cubic-bezier(0.645, 0.045, 0.355, 1)`
- Transition duration: `0.25s`
- Scroll behavior: Smooth

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### GitHub Pages / Other Platforms

Simply push to your GitHub repository and connect it to your deployment platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this as a template for your own portfolio!

---

**Built with Next.js & Tailwind CSS**
**Inspired by [Brittany Chiang](https://brittanychiang.com/)**
