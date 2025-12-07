# AI Product Designer

A professional tool for Product Designers to transform ideas into actionable AI prompts and implementation plans.

## Features
- **Research Module**: Import context from NotebookLM (text/markdown).
- **Product Definition**: Structured inputs for problem, solution, and features.
- **Implementation Planner**: Auto-generate or write custom dev plans.
- **Design Blueprint**: Define UI/UX structure.
- **Prompt Generator**: Synthesizes all data into a "Mega-Prompt" for coding agents.

## Tech Stack
- React (Vite)
- Vanilla CSS (Glassmorphism, CSS Variables)
- Lucide React (Icons)

## Development
1. Install dependencies: `npm install`
2. Run local server: `npm run dev`

## Deployment (GitHub Pages)
1. Update `vite.config.js` with your repo name if needed:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```
2. Build the project: `npm run build`
3. Deploy the `dist` folder.
