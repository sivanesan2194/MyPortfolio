# AI Coding & Architecture Rules

## 1. Package & Dependency Restrictions

* **Zero Unnecessary Packages:** Do NOT install extra third-party libraries unless explicitly requested or strictly required.

* **Approved Stack Only:**

  * **Build Tool:** Vite

  * **Framework:** React.js (v18+)

  * **Styling:** CSS

  * **Animations:** Framer Motion (only if required for UI transitions)

  * **Icons:** `lucide-react` or `react-icons`

* **Forbidden Libraries:**

  * Do NOT install heavy UI component libraries (e.g., Material UI, Ant Design, Bootstrap) when Tailwind CSS can achieve the same result.

  * Do NOT install additional HTTP clients (e.g., `axios`) if native `fetch()` is sufficient.

  * Do NOT install complex state management libraries (e.g., Redux, Zustand) for single-page portfolio needs. Use React Hooks (`useState`, `useContext`).

## 2. Code Quality & Formatting Rules

* **Single Responsibility Components:** Keep React components small, focused, and modular.

* **Data Separation:** Store all static text, project details, skills list, and timeline info in `src/data/` files (JSON or JS objects). Do NOT hardcode project arrays or skills directly inside render components.

* **Clean & Readable Code:** Use modern ES6+ JavaScript syntax (arrow functions, destructuring, optional chaining).

* **Self-Contained Styling:** Use standard Tailwind CSS utility classes directly in `className` tags instead of writing verbose custom CSS classes.

## 3. Architecture & File Structure Guidelines

* Stick strictly to the directory structure defined in `system_architecture.md`.

* Place reusable components in `src/components/ui/` and section layouts in `src/components/sections/`.

* Maintain environment variables securely: Never hardcode API keys or sensitive variables directly in code. Always reference `.env`.

## 4. Performance & Deployment Constraints

* **Optimized Assets:** Optimize image assets (convert to WebP/compressed formats) to keep build sizes light.

* **Clean Build Output:** Ensure the project builds cleanly via `npm run build` with zero errors or unresolved imports before pushing to Vercel.

* **No Breaking Changes:** Always preserve existing functionality when refactoring or adding new UI elements.