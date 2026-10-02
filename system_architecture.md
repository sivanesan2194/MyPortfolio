# System Architecture Specification

## 1. High-Level Architecture Overview

The system is designed as a **Single Page Application (SPA)** using React.js. It follows a client-side rendering (CSR) architecture deployed via a Content Delivery Network (CDN) through Vercel.

```
                  +-------------------------------------------------+
                  |                   Client Browser                |
                  |                                                 |
                  |  +-------------------------------------------+  |
                  |  |          React.js SPA Application          |  |
                  |  |                                           |  |
                  |  |  +------------------+  +---------------+  |  |
                  |  |  | State / Assets   |  | UI Components |  |  |
                  |  |  +------------------+  +---------------+  |  |
                  |  |           |                     |         |  |
                  |  +-----------|---------------------|---------+  |
                  +--------------|---------------------|------------+
                                 |                     |
                                 v                     v
                    +--------------------+   +-------------------+
                    | External API /     |   | Static CDN        |
                    | Contact Endpoint   |   | Hosting           |
                    | (EmailJS / Web3)   |   | (Vercel Edge)     |
                    +--------------------+   +-------------------+

```

### Architecture Highlights:

* **Client-Side Rendering (CSR):** Fast initial load times and instant navigation across single-page anchor sections.

* **Component-Driven UI:** Modular and re-usable React components for each section (`Hero`, `Projects`, `Skills`, etc.).

* **Third-Party Service Integration:** Form handling powered by EmailJS/Web3Forms without requiring a dedicated custom backend server.

## 2. Technology Stack Specifications

| Layer | Technology | Purpose / Justification | 
 | ----- | ----- | ----- | 
| **Build Tooling** | Vite | Lightning-fast HMR (Hot Module Replacement) and optimized production bundling. | 
| **Frontend Core** | React.js (v18+) | Component-based UI framework for scalable web applications. | 
| **Styling** | CSS | Utility-first CSS framework for rapid, responsive UI design. | 
| **Animations** | Framer Motion | Smooth scroll-triggered animations, page transitions, and interactive visual effects. | 
| **Icons** | Lucide React | Lightweight and customizable vector icons. | 
| **Form Handling** | EmailJS / Web3Forms | Serverless contact form handling via client-side API calls. | 
| **Version Control** | Git & GitHub | Source code management and CI/CD triggers. | 
| **Hosting & CI/CD** | Vercel | Automatic deployments on Git pushes with global CDN distribution. | 

## 3. Recommended Project Folder Structure

```
portfolio-website/
├── .github/
│   └── workflows/          # GitHub Actions (optional continuous checks)
├── public/
│   ├── favicon.ico         # Website favicon
│   ├── resume.pdf          # Downloadable PDF Resume
│   └── assets/             # Static public assets (images, profile pictures)
├── src/
│   ├── assets/             # Raw media assets (SVGs, screenshots, graphics)
│   ├── components/         # Modular React components
│   │   ├── layout/         # Navigation & Footer components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/       # Main portfolio page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/             # Reusable UI primitives (Buttons, Cards, Modals)
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Badge.jsx
│   ├── data/               # Static JSON data files for clean code separation
│   │   ├── projects.js     # Projects array with titles, tags, and links
│   │   ├── skills.js       # Skills categories and competencies
│   │   └── experience.js   # Education and experience timeline data
│   ├── hooks/              # Custom React hooks (e.g., useTheme, useScroll)
│   ├── styles/             # Global CSS and Tailwind directives
│   │   └── index.css
│   ├── App.jsx             # Main root layout component
│   └── main.jsx            # Application entry point
├── .env.example            # Environment variables template
├── .eslintrc.cjs            # Linting configuration
├── index.html              # HTML shell
├── package.json            # NPM dependencies and scripts
├── tailwind.config.js      # Tailwind CSS theme configuration
└── vite.config.js          # Vite configuration

```

## 4. Component Hierarchy & Data Flow

### Component Hierarchy Tree

```
App
├── Navbar
├── Hero
│   └── SocialLinks
├── About
├── Skills
│   └── SkillCard (Repeated)
├── Projects
│   └── ProjectCard (Repeated)
├── Experience
│   └── TimelineItem (Repeated)
├── Contact
│   └── ContactForm
└── Footer

```

### Data Flow Diagram

```
 [ src/data/*.js ] 
        |
        v  (Imports static JSON/JS objects)
 [ Parent Section Components ] (Projects.jsx, Skills.jsx)
        |
        v  (Passes props)
 [ Child UI Components ] (ProjectCard.jsx, SkillBadge.jsx)

```

## 5. Deployment & CI/CD Pipeline

```
[ Local Development ] ---> [ Git Commit & Push ] ---> [ GitHub Repository (main) ]
                                                                 |
                                                                 v
                                                      [ Vercel Auto-Trigger ]
                                                                 |
                                                                 v
                                                      [ Build: npm run build ]
                                                                 |
                                                                 v
                                                      [ Global CDN Deployment ]

```

1. **Local Development:** Code built locally using Vite dev server (`npm run dev`).

2. **Version Control:** Changes pushed to the `main` branch of the remote GitHub repository.

3. **Automated Build:** Vercel detects updates, runs `npm run build`, and generates static assets.

4. **Live Deployment:** Production bundle is deployed across Vercel Edge Network.