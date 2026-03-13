# Premium Accountant Portfolio Website

## 🎨 Design Overview

This is a premium, visually stunning portfolio website designed for a professional accountant. The site features modern animations, 3D elements, and a sophisticated finance-industry inspired design.

## 🎯 Key Features

### Design Theme
- **Primary Color**: Deep Navy (#0f172a)
- **Secondary Color**: Emerald Green (#10b981)
- **Accent Color**: Gold (#f59e0b)
- **Typography**: Geist Variable Font
- **Dark Mode**: Enabled by default

### Sections

1. **Hero Section**
   - Fullscreen animated hero with 3D background
   - Three.js floating orb with stars
   - Animated statistics cards
   - Smooth GSAP entrance animations
   - Scroll indicator

2. **About Section**
   - Professional bio with visual elements
   - Animated counter statistics
   - Scroll-triggered GSAP animations
   - Glassmorphism cards

3. **Services Section**
   - 8 comprehensive service cards
   - Swiper carousel for mobile
   - Hover animations and gradient effects
   - Services include:
     - Tax Planning & Filing
     - Bookkeeping Services
     - Financial Consulting
     - Audit Support
     - Business Advisory
     - Financial Reporting
     - Compliance Management
     - Payroll Management

4. **Experience Section**
   - Interactive timeline with GSAP animations
   - Detailed work history
   - Key achievements for each role
   - Alternating layout for visual interest

5. **Skills Section**
   - Animated skill bars with percentage
   - 8 core competencies
   - Gradient icons and progress bars
   - Scroll-triggered animations

6. **Portfolio/Case Studies**
   - Swiper carousel showcasing 6 projects
   - Real client success stories
   - Key results and metrics
   - Gradient overlays on hover

7. **Testimonials Section**
   - Client testimonials with ratings
   - Swiper slider
   - Trust badges with statistics
   - Quote animations

8. **Education Section**
   - Academic qualifications
   - Professional certifications
   - Gradient card designs

9. **Contact Section**
   - Modern contact form
   - Contact information cards
   - Form validation and success states
   - Animated inputs

### Premium Features

- **Loading Screen**: Animated loader with brand elements
- **Smooth Scrolling**: Lenis integration for buttery smooth scrolling
- **3D Elements**: React Three Fiber with floating orbs and stars
- **Animations**: 
  - GSAP for scroll-triggered animations
  - Framer Motion for UI micro-interactions
  - Parallax effects
  - Hover animations
- **Glassmorphism**: Modern glass effect cards
- **Gradient Text**: Eye-catching gradient text effects
- **Responsive Design**: Fully responsive across all devices
- **Performance**: Optimized animations and lazy loading

## 🛠️ Tech Stack

- **React 19** - Latest React features
- **Vite** - Lightning fast build tool
- **TailwindCSS v4** - Utility-first CSS
- **Shadcn UI** - High-quality UI components
- **Framer Motion** - Production-ready animations
- **GSAP** - Professional-grade animations
- **Lenis** - Smooth scrolling library
- **Three.js + React Three Fiber + Drei** - 3D graphics
- **Swiper.js** - Touch slider
- **Lottie React** - Animation library
- **Zustand** - State management
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx          # Premium navigation with scroll effects
│   │   ├── Footer.jsx          # Comprehensive footer
│   │   └── Loader.jsx          # Animated loading screen
│   ├── sections/
│   │   ├── Hero.jsx            # 3D hero section
│   │   ├── About.jsx           # About with animated counters
│   │   ├── Services.jsx        # Service cards with Swiper
│   │   ├── Experience.jsx      # Timeline with GSAP
│   │   ├── Skills.jsx          # Animated skill bars
│   │   ├── Portfolio.jsx       # Case studies carousel
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   ├── Education.jsx       # Academic background
│   │   └── Contact.jsx         # Contact form
│   └── ui/                     # Shadcn UI components
├── hooks/
│   └── useLenis.js            # Smooth scroll hook
├── store/
│   └── useStore.js            # Zustand state management
├── utils/
│   └── animations.js          # Reusable animation utilities
├── pages/
│   └── Home.jsx               # Main page layout
├── App.jsx                    # App wrapper with loader
└── index.css                  # Global styles & theme
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --navy: #0f172a;
  --emerald: #10b981;
  --gold: #f59e0b;
}
```

### Content
Update content in respective section files:
- Personal info: `src/components/sections/Hero.jsx`
- Services: `src/components/sections/Services.jsx`
- Experience: `src/components/sections/Experience.jsx`
- Skills: `src/components/sections/Skills.jsx`
- Portfolio: `src/components/sections/Portfolio.jsx`
- Testimonials: `src/components/sections/Testimonials.jsx`

### Animations
Modify animation settings in `src/utils/animations.js`

## 🌟 Premium Touches

1. **Glassmorphism Effects**: Modern frosted glass aesthetic
2. **Gradient Animations**: Smooth color transitions
3. **3D Backgrounds**: Subtle Three.js elements
4. **Micro-interactions**: Hover effects on all interactive elements
5. **Scroll Animations**: GSAP-powered reveal animations
6. **Loading Experience**: Branded loading screen
7. **Smooth Scrolling**: Lenis integration
8. **Performance**: Optimized for 60fps animations

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All sections are fully responsive with mobile-first approach.

## 🔧 Performance Optimization

- Lazy loading for images
- Code splitting
- Optimized animations (GPU-accelerated)
- Minimal bundle size
- Fast initial load

## 📄 License

This is a custom portfolio website. All rights reserved.

## 👤 Contact

For inquiries about this portfolio:
- Email: khushpanchal0308@gmail.com
- Location: Delhi, India

---

Built with ❤️ using React, TailwindCSS, and modern web technologies.
