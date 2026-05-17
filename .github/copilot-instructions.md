# Anniversary Website - Development Instructions

This is a beautiful React + Vite anniversary website with romantic design and interactive features.

## Project Overview

- **Type**: React + Vite Frontend Application
- **Purpose**: Anniversary celebration website with multiple interactive pages
- **Status**: Production-ready

## Key Features

1. **Landing Page**: Full-screen romantic welcome
2. **Surprise Page**: 3 interactive cards (Music, Letter, Gallery)
3. **Music Player**: Embed your special song
4. **Love Letter**: Typing animation effect
5. **Photo Gallery**: Carousel for memories

## Tech Stack

- React 18
- Vite (dev server, build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)

## Development Commands

```bash
npm install    # Install dependencies
npm run dev    # Start development server (auto-opens at localhost:5173)
npm run build  # Production build
npm run preview # Preview production build
```

## Customization Checklist

- [ ] Replace placeholder images in `src/App.jsx` (memories array)
- [ ] Update love letter message in `src/App.jsx`
- [ ] Add music player (YouTube embed or Spotify)
- [ ] Adjust colors if needed in `tailwind.config.js`
- [ ] Test on mobile devices

## File Structure

- `src/App.jsx` - Main component (all features included)
- `src/main.jsx` - React entry point
- `src/index.css` - Global styles
- `index.html` - HTML template
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind theme
- `package.json` - Dependencies

## Important Notes

- All components are in a single `App.jsx` file for simplicity
- Fully responsive design
- No external database required
- Static site (can be deployed anywhere)

## Deployment

Ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build first with `npm run build`, then deploy the `dist` folder.
