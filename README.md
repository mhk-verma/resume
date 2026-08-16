# Mahak Verma - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Premium Design**: Clean, professional design with a balanced color palette (Deep Navy, Royal Blue, Indigo accents)
- **Responsive Layout**: Desktop sidebar layout that transforms to mobile-friendly design
- **Smooth Animations**: Framer Motion-powered animations for page entrance, section reveals, and hover effects
- **Complete Sections**: Hero, About, Skills, Education, Certifications, Achievements, Areas of Interest, Portfolio, and Contact
- **Accessibility**: Reduced motion support for users who prefer less animation
- **Interactive Elements**: Smooth scrolling navigation, hover effects, and interactive cards

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Project Structure

```
resume/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── AreasOfInterest.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Hero.tsx
│   │   ├── MobileHeader.tsx
│   │   ├── Navigation.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Skills.tsx
│   │   └── Sidebar.tsx
│   └── data/
│       └── personal.ts
├── public/
│   └── profile.jpg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**
   ```bash
   cd C:\Users\Mahak\CascadeProjects\resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

Edit `src/data/personal.ts` to update your personal information:

- Contact details (email, phone, location)
- Social links (LinkedIn, GitHub)
- Education history
- Skills (technical and soft)
- Certifications
- Achievements
- Projects

### Profile Photo

Replace `public/profile.jpg` with your own profile photo. Recommended size: 400x400px or higher.

### Color Scheme

Modify colors in `tailwind.config.ts` under `theme.extend.colors`:

```typescript
colors: {
  background: "#F4F7FB",
  surface: "#FFFFFF",
  primary: "#173B73",
  "royal-blue": "#356AE6",
  indigo: "#6D72E8",
  // ... more colors
}
```

### Adding Projects

Add new projects to the `projects` array in `src/data/personal.ts`:

```typescript
{
  id: 2,
  title: "Your Project Name",
  description: "Project description",
  category: "Web Development",
  technologies: ["React", "Node.js", "MongoDB"],
  liveDemo: "https://your-demo.com",
  github: "https://github.com/yourusername/repo",
  features: ["Feature 1", "Feature 2", "Feature 3"],
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### GitHub Pages

1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json` scripts:
   ```json
   "scripts": {
     "export": "next build && next export",
     "deploy": "gh-pages -d out"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Contact Form Integration

The contact form is currently a demo. To enable actual email functionality:

1. Integrate with services like:
   - EmailJS
   - Formspree
   - Netlify Forms
   - SendGrid

2. Update the `handleSubmit` function in `src/components/Contact.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Font: [Inter](https://fonts.google.com/specimen/Inter)

---

**Note**: This portfolio was built specifically for Mahak Verma. Feel free to customize it for your own use!
