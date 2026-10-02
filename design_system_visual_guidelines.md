# Design System & Visual Guidelines

## 1. Core Design Principles

To leave a lasting impression on technical recruiters and engineering managers, the visual design adheres to four key principles:

* **Modern & Technical:** A dark-mode first, glassmorphic aesthetic featuring neon accents that evoke a cutting-edge software environment.
* **Clarity & Readability:** High contrast between typography and background layers to ensure effortless scanning of skills, project descriptions, and experience.
* **Delightful Interactivity:** Subtle micro-interactions, smooth hover transitions, and scroll-triggered animations that convey high polish without sacrificing performance.
* **Mobile-First Responsiveness:** Fluid grid layouts and adaptive UI components that look flawless on screens of all sizes.

---

## 2. Color Palette

The portfolio uses a sleek, dark-themed color system with vibrant accent colors to highlight interactive elements and key technical information.

### Primary & Background Colors

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Background Dark** | `#0B0F17` | Main page background color |
| **Card Surface** | `#111827` | Background for project cards, skill badges, and section containers |
| **Card Border** | `#1F2937` | Subtle borders for structured card separation |
| **Glass Overlay** | `rgba(17, 24, 39, 0.7)` | Semi-transparent background for sticky navigation headers |

### Accent & Highlight Colors

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Primary Accent (Cyan)** | `#06B6D4` | Main CTA buttons, active state highlights, and primary icons |
| **Secondary Accent (Indigo/Violet)** | `#6366F1` | Gradient accents, badge background highlights, and decorative blurs |
| **Success / Live Demo** | `#10B981` | Live project indicators, availability badges |

### Neutral & Text Colors

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Text Primary** | `#F9FAFB` | Main headlines, titles, and high-emphasis text |
| **Text Secondary** | `#9CA3AF` | Body paragraphs, subtitle descriptions, and metadata |
| **Text Muted** | `#6B7280` | Subtle captions, timestamps, and subtle borders |

---

## 3. Typography System

The typography uses clean, highly readable modern sans-serif fonts paired with a monospaced font for code snippets and technical tags.

### Font Families

* **Primary Body & Headings:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
* **Code & Technical Accents:** `Fira Code`, `JetBrains Mono`, `monospace`

### Type Scale & Hierarchy

| Scale Level | Class / Size | Weight | Usage |
| :--- | :--- | :--- | :--- |
| **Display / Hero Headline** | `text-4xl md:text-6xl` | Bold (700) | Main greeting & headline on the Hero section |
| **Heading 1 (H1)** | `text-3xl md:text-4xl` | Semi-Bold (600) | Section titles (`#Projects`, `#Skills`, `#About`) |
| **Heading 2 (H2)** | `text-xl md:text-2xl` | Semi-Bold (600) | Project titles, modal titles, card headers |
| **Subheading / Body Lead** | `text-lg` | Regular (400) / Medium (500) | Section descriptions, taglines, intro paragraphs |
| **Body Text** | `text-base` | Regular (400) | Main readable text in project descriptions |
| **Caption / Code Badge** | `text-xs md:text-sm` | Medium (500) | Tech stack tags, dates, metadata labels |

---

## 4. Visual Components & Styling Tokens

### Card & Surface Design
* **Border Radius:** `rounded-xl` (`12px`) for main cards and `rounded-2xl` (`16px`) for primary section containers.
* **Glassmorphism Effect:** `backdrop-blur-md bg-opacity-70 border border-gray-800` used on sticky navigation and overlay cards.
* **Glow & Shadow Effects:** Hover states use soft ambient glow effects (`box-shadow: 0 0 20px rgba(6, 182, 212, 0.15)`).

### Interactive States & Micro-Interactions
* **Buttons:**
  * **Primary CTA:** Solid Cyan background (`bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg transition-all`).
  * **Secondary CTA:** Transparent outline with accent border (`border border-gray-700 hover:border-cyan-500 text-gray-200`).
* **Hover Animations:** `transform hover:-translate-y-1 transition-all duration-300` on project cards to signify clickability.
* **Links:** Subtle color shift from `text-gray-400` to `text-cyan-400` on hover.

---

## 5. Responsive Layout Guidelines

* **Grid Strategy:**
  * **Projects Grid:** 1 column on mobile, 2 columns on tablet/desktop (`grid grid-cols-1 md:grid-cols-2 gap-6`).
  * **Skills Grid:** Fluid grid using `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4`.
* **Container Widths:** Standardized maximum content container `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.