# Code Collider Website

Modern website for Code Collider, built with Next.js 15, TailwindCSS v4, and Framer Motion.

## 🚀 Tech Stack

- **Next.js 15+** - React framework with SSR
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS v4** - Utility-first CSS framework
- **Framer Motion** - Animations and interactivity
- **pnpm** - Package manager
- **Node.js 22** - Runtime environment

## 📋 Prerequisites

- Node.js >= 22.0.0
- pnpm >= 10.0.0

## 🛠️ Installation & Setup

### Step 1: Check Node.js Version

```bash
# If using nvm
nvm use

# Or manually check version
node --version
# Should be v22.x.x or higher
```

### Step 2: Install Dependencies

```bash
pnpm install
```

### Step 3: Run Development Server

```bash
pnpm dev
```

The site will be available at: **http://localhost:3000**

## 💻 Development

### Available Commands

```bash
# Run development server with turbopack (faster)
pnpm dev

# TypeScript type checking
pnpm tsc --noEmit

# Code linting
pnpm lint

# Production build
pnpm build

# Run production build locally
pnpm start
```

## 📂 Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles with TailwindCSS v4
├── components/
│   ├── sections/           # Website sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Counters.tsx
│   │   ├── TwoColumn.tsx
│   │   ├── Sectors.tsx
│   │   ├── FiftyFifty.tsx
│   │   ├── Testimonials.tsx
│   │   ├── LatestBlogs.tsx
│   │   ├── Partners.tsx
│   │   └── Footer.tsx
│   └── ui/                 # UI components (future)
├── public/                 # Static files
│   └── images/            # Images and icons
└── package.json
```

## 🎨 Features

### Website Sections:

1. **Header/Navigation** - Fixed header with transparent background and scroll animation
2. **Hero Section** - Main section with neon effects and gradients
3. **Services** - 6 service cards with hover animations
4. **Counters** - Statistics with animated counters
5. **Two Column** - Section with custom list and gradients
6. **Sectors** - Gallery with 8 industry sectors
7. **Fifty-Fifty** - Section with glow effect
8. **Testimonials** - Client testimonials slider
9. **Latest Blogs** - Latest blog posts
10. **Partners** - Partner logos
11. **Footer** - Footer with newsletter subscription form

### Animations & Effects:

- ✨ Neon text effects
- 🌟 Gradient glow effects
- 🎭 Smooth transitions and hover states
- 📱 Fully responsive design
- ♿ Accessibility-friendly
- 🚀 Optimized for speed

## ⚙️ Configuration

### TailwindCSS v4

All custom colors and variables are defined in `app/globals.css`:

```css
@theme {
  --color-neon: #00ff94;
  --color-neon-blue: #4d65ff;
  --color-dark-bg: #0a0b0f;
  --color-dark-secondary: #171d2f;
  --color-grey-light: #8e9aaf;
  --color-grey-lighter: #b4bcc9;
}
```

Uses the new architecture with `@theme` directive for custom CSS variables.

### Framer Motion

All animations are optimized for performance:
- Scroll-triggered animations using `whileInView`
- `viewport={{ once: true }}` for one-time animations
- GPU-accelerated transformations
- Hover effects
- Page transitions
- Slider animations

### Image Optimization

Next.js automatically optimizes all images through the `Image` component.

### SSR (Server-Side Rendering)

All components are server-rendered by default, except those marked with `'use client'` (for animations and interactivity).

## 🐛 Troubleshooting

### Issue: Dev server won't start

**Solution:**
1. Delete `node_modules` and `pnpm-lock.yaml`
2. Run `pnpm install` again
3. Check Node.js version (should be >= 22.0.0)

### Issue: TailwindCSS errors

**Solution:**
1. Verify you're using TailwindCSS v4
2. Make sure `postcss.config.mjs` contains `@tailwindcss/postcss`

### Issue: Images not displaying

**Solution:**
1. Check that the `public/images/` folder exists
2. Verify all images are in the correct location

## 🚀 Deployment

The site is ready to deploy on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any hosting with Node.js support

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Create production build
pnpm build

# Run (requires Node.js server)
pnpm start
```

### Environment Variables

Create `.env.local` for local environment variables:

```env
# Add your variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## ⚡ Performance

The site is optimized for:
- ⚡ Fast loading (Lighthouse 90+)
- 📱 Mobile-first design
- ♿ Accessibility (WCAG 2.1 AA)
- 🎨 Smooth animations (60 FPS)

## 📝 License

Developed by ZealousWeb | Powered by Webflow

## 🤝 Contact

- Email: info@zealconsult.com
- Phone: +1 (800) 555-1234
- Address: 1234 Innovation Drive Suite 567, Cityville, State 89012

---

Built with ❤️ using Next.js 15 and TailwindCSS v4
