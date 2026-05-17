# Anniversary Website 💕

A beautiful, romantic React + Vite web application designed to celebrate love and create unforgettable memories.

## Features

✨ **Stunning Design**
- Romantic gradient backgrounds (pink, rose, purple)
- Glassmorphism cards with smooth animations
- Fully responsive design for all devices
- Elegant typography and premium UI

🎨 **Interactive Sections**
- **Landing Page**: Full-screen romantic welcome with animated hearts
- **Music Player**: Embed your special song with custom player
- **Love Letter**: Beautifully styled letter with typing animation
- **Photo Gallery**: Carousel to showcase your favorite memories

🎬 **Smooth Animations**
- Framer Motion for fluid transitions
- Floating heart animations
- Hover effects and scale transformations
- Page transitions with fade effects

## Tech Stack

- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd anniversary-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will automatically open at `http://localhost:5173`

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization

### Add Your Photos

Replace the placeholder images in `src/App.jsx` (the `memories` array) with your own image URLs:

```javascript
const memories = [
  'YOUR_IMAGE_URL_1',
  'YOUR_IMAGE_URL_2',
  // ... add more images
];
```

### Customize the Love Letter

Edit the `loveLetterContent` in `src/App.jsx` to write your personal message:

```javascript
const loveLetterContent = `Your custom message here...`;
```

### Add Music

To embed your song, replace the music player section with:
- YouTube embed: Use an iframe
- Spotify: Use Spotify web player embed
- Any other music platform

### Change Colors

Modify Tailwind colors in `tailwind.config.js`:
- Adjust gradient colors
- Change text colors
- Modify hover states

## Project Structure

```
anniversary-website/
├── src/
│   ├── App.jsx          # Main component with all features
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## Features Guide

### Landing Page
- Displays after page load
- Shows romantic greeting and main message
- "Open My Surprise" button transitions to surprise page

### Surprise Page
Three interactive cards appear:

1. **🎵 Our Song**
   - Click to open music player
   - Customize with your special song

2. **💌 Love Letter**
   - Opens letter popup with typing animation
   - Personalize with your message

3. **📸 Memories**
   - Interactive photo gallery/carousel
   - Navigate with arrow buttons
   - Thumbnail selection

## Tips for Best Experience

- Replace placeholder images with your actual photos
- Personalize the love letter message
- Add your favorite song
- Test on mobile devices for responsive design
- Use high-quality images for best visual impact

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized animations with GPU acceleration
- Lazy loading for images
- Minimal bundle size (~100KB gzipped)
- Fast loading and smooth interactions

## License

Free to use for personal projects. Created with ❤️

---

**Made with love for your special someone 💕**
