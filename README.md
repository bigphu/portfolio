# Personal Portfolio Website

A modern, interactive personal portfolio website built with React, TypeScript, and Vite. This project showcases professional skills, projects, and provides a way to connect with visitors through contact functionality.

## 📋 Overview

This is a full-featured portfolio website designed to present a software developer's work, skills, and experience in an engaging and interactive manner. The site features smooth animations, responsive design, and is deployed on Cloudflare Workers for optimal performance and global distribution.

**Developer:** Phạm Trần Gia Phú  
**Live Site:** [Click here to visit](https://portfolio.bigphu2005.workers.dev)

## ✨ Features

- **Hero Banner Section**: Eye-catching introduction with gradient text, personal description, and call-to-action buttons
- **Skills Showcase**: Organized display of technical skills categorized by type (Languages, Frameworks, Tools, Libraries)
- **Projects Portfolio**: Grid-based project showcase with thumbnails, technology stacks, and links
- **Interactive Components**: 
  - Shooting stars background animation for visual appeal
  - Scroll progress indicator
  - Animated preloader
  - Smooth page transitions
- **Contact Integration**: Direct email contact functionality via pre-filled email composer
- **GitHub Integration**: Quick links to GitHub profile
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Performance Optimized**: React Compiler enabled for better performance

## 🛠️ Technologies

### Frontend Framework & Build
- **React** 19.2.4 - UI library
- **TypeScript** ~5.9.3 - Type-safe JavaScript
- **Vite** 8.0.1 - Lightning-fast build tool
- **React Router DOM** 7.13.1 - Client-side routing

### Styling & UI
- **CSS** - Classic CSS styling
- **Lucide React** 1.7.0 - Icon library
- **CSS Modules** - Component-scoped styling

### Development Tools
- **ESLint** 9.39.4 - Code quality and linting
- **React Compiler** 1.0.0 - Automatic optimization compilation
- **Babel** 7.29.0 - JavaScript transpiler
- **TypeScript ESLint** 8.57.0 - TypeScript-aware linting

### Deployment & DevOps
- **Cloudflare Workers** - Edge computing deployment via Wrangler
- **Wrangler** 4.77.0 - Cloudflare's CLI tool

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Outputs optimized files to the `dist/` directory

5. **Preview production build locally**
   ```bash
   npm run preview
   ```

6. **Deploy to Cloudflare Workers**
   ```bash
   npm run deploy
   ```

### Development Commands
- `npm run dev` - Start Vite development server with hot module replacement (HMR)
- `npm run build` - Compile TypeScript and build with Vite
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Build and preview the production bundle locally using Wrangler
- `npm run deploy` - Build and deploy to Cloudflare Workers

## 📁 File Structure & Purpose

```
client/
├── public/                      # Static assets served directly
├── src/                        # Source code directory
│   ├── App.tsx                 # Main app component with routing logic
│   ├── main.tsx                # React DOM entry point
│   ├── App.css                 # Global app styles
│   │
│   ├── assets/                 # Images, logos, and static media
│   │   ├── logo-bk.png         # University/education logo
│   │   └── ...thumbnails       # Project and skill icon assets
│   │
│   ├── components/             # Reusable React components
│   │   ├── index.ts            # Component barrel export file
│   │   ├── button/             # Reusable button component with variants
│   │   ├── footer/             # Footer section component
│   │   ├── preloader/          # Loading animation shown on mount
│   │   ├── scroll-indicator/   # Visual scroll progress bar
│   │   ├── shooting-stars/     # Animated background particle effect
│   │   ├── stat-box/           # Stat display component (for education, GPA, etc)
│   │   └── ui/                 # Additional UI component folder
│   │
│   ├── contexts/               # React Context API contexts
│   │   └── (theme, auth, etc)  # Global state management
│   │
│   ├── data/                   # Static data and global styles
│   │   └── global.css          # Global CSS reset and utilities
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── index.ts            # Hook barrel export
│   │   ├── useFetchRepo.ts     # Fetch GitHub repository data
│   │   ├── useOpenGithub.ts    # Navigate to GitHub profile
│   │   ├── useScrollProgress.ts# Track scroll position for indicator
│   │   └── useSendEmail.ts     # Generate mailto links for contact
│   │
│   ├── pages/                  # Page components (one per route)
│   │   ├── index.ts            # Page barrel export
│   │   ├── banner/             # Hero/intro section component
│   │   ├── skills/             # Skills showcase section
│   │   └── projects/           # Projects portfolio section
│   │
│   └── services/               # API and external service handlers
│       └── (empty - ready for API integration)
│
├── dist/                       # Build output directory (generated after npm run build)
├── eslint.config.js            # ESLint configuration
├── vite.config.ts              # Vite build configuration
├── wrangler.jsonc              # Cloudflare Workers configuration
├── tsconfig.json               # TypeScript base configuration
├── tsconfig.app.json           # TypeScript app-specific config
├── tsconfig.node.json          # TypeScript node environment config
├── package.json                # Project dependencies and scripts
└── index.html                  # HTML entry point
```

### Key Directories Explained

- **`src/components/`**: Reusable UI components with isolated styling. Each component has its own `.tsx` and `.css` file.
- **`src/pages/`**: Full page sections that make up the main portfolio. Sections are lazy-loaded for better performance.
- **`src/hooks/`**: Custom React hooks encapsulating logic like email sending, GitHub navigation, and scroll tracking.
- **`src/data/`**: Global styling and constants. Ready to be expanded with shared data structures.
- **`src/services/`**: Currently empty, reserved for API call handlers and external service integrations.

## 🚀 Performance Optimizations

- **React Compiler**: Automatic memoization and component optimization enabled
- **Code Splitting**: Pages are lazy-loaded with React.lazy() and Suspense
- **Tree Shaking**: Unused code is eliminated during build
- **Asset Optimization**: Images and icons are optimized via Vite
- **Edge Deployment**: Cloudflare Workers provides global distribution with low latency

## 📝 Configuration Files

- **eslint.config.js**: Code linting rules for JavaScript/TypeScript
- **vite.config.ts**: Build configuration with React plugin, path aliases (`@` → `src`), and Cloudflare integration
- **tsconfig.json**: TypeScript compilation options with strict mode enabled
- **wrangler.jsonc**: Cloudflare Workers deployment configuration for SPA handling

## 🔮 Future Plans & Roadmap

### Short Term
- [ ] **API Integration**: Connect to backend API to dynamically load projects and skills data instead of mock data
- [ ] **Blog Section**: Add a blog page for technical articles and insights
- [ ] **Dark/Light Theme Toggle**: Implement theme switching with Context API
- [ ] **Enhanced Contact Form**: Add form validation and server-side email sending via backend
- [ ] **SEO Optimization**: Add meta tags, Open Graph, and structured data

### Medium Term
- [ ] **CMS Integration**: Connect to a headless CMS (Contentful, Strapi) for easier content management
- [ ] **Analytics Dashboard**: Track portfolio visitor stats and interactions
- [ ] **Project Details Pages**: Individual pages for each project with detailed descriptions
- [ ] **Search Functionality**: Full-text search for projects and blog posts
- [ ] **Internationalization (i18n)**: Support multiple languages (English, Vietnamese)

### Long Term
- [ ] **Comment System**: Allow visitors to comment on projects and blog posts
- [ ] **Admin Panel**: Build management interface for content updates
- [ ] **Database Integration**: Implement persistent data storage (PostgreSQL, MongoDB)
- [ ] **Newsletter**: Add email newsletter subscription functionality
- [ ] **Real-time Notifications**: WebSocket integration for real-time updates
- [ ] **PWA Features**: Make the site installable as a progressive web app

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements or suggestions.

## 📄 License

This project is personal and intended for portfolio purposes. Feel free to use as a template for your own portfolio.

## 📞 Contact

- **Email**: giaphu.pham.dev@gmail.com
- **GitHub**: [bigphu](https://github.com/bigphu)
- **Portfolio**: [Click here to visit](https://portfolio.bigphu2005.workers.dev)

---

**Last Updated**: April 2026
