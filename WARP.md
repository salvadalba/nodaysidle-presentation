# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository summary
- Minimal static portfolio (no build system). Everything runs directly in the browser from index.html with styles.css and script.js.
- Good default accessibility: skip link, ARIA on the mobile nav toggle, focus-safe patterns.

Common commands (WSL Ubuntu, zsh/bash)
- Serve locally (no build step needed):
  - Python 3 (preferred minimal dev server):
    python3 -m http.server 5173
    # Then open http://localhost:5173
  - Node (if installed):
    npx http-server -p 5173
    # Then open http://localhost:5173

Notes
- Build: not applicable (static site).
- Lint: not configured (no ESLint/Prettier in repo).
- Tests: not configured (no test runner).

Big-picture architecture
- index.html
  - Single page with sections: Hero, About, Projects, Skills, Contact.
  - Primary nav is accessible and uses: 
    - .nav-toggle button with aria-expanded
    - #nav-menu list for links
  - Anchors (#about, #projects, #skills, #contact) are used for in-page navigation and smooth scrolling.
  - Includes styles.css and script.js; no external bundler.
- styles.css
  - Theme tokens in :root (colors, borders) to make it easy to restyle.
  - Layout primitives: .container, .section, responsive .grid.
  - Mobile nav pattern relies on toggling .open on .nav-menu via JS.
  - Accessibility helpers: .skip-link and .sr-only.
- script.js
  - Lightweight IIFE with three responsibilities:
    1) Inject current year into #year in the footer.
    2) Toggle mobile menu: clicks on .nav-toggle add/remove .open on #nav-menu and keep aria-expanded in sync.
    3) Smooth-scroll for in-page anchors using event delegation.
- assets/
  - Holds images or other static files referenced by the HTML.

What to edit and how it flows
- Content updates
  - Change portfolio text, email, and links directly in index.html.
  - Add or remove projects by duplicating/removing <article class="card"> blocks.
- Styling
  - Adjust site-wide look and feel by changing :root variables in styles.css.
  - Grid and spacing are controlled in styles.css; no build tools involved.
- JS interactions
  - If you modify the nav markup, keep these hooks intact or update script.js accordingly:
    - .nav-toggle button
    - #nav-menu list
    - .open class used for mobile visibility

Important notes from README.md
- Features: plain HTML/CSS/JS, responsive dark theme, accessible nav, simple sections.
- Getting started options are the same as the commands listed above (Python http.server or Node http-server).
- Customization: edit index.html content, tweak styles.css, add assets/ images.

Troubleshooting
- If http://localhost:5173 doesn’t load, verify the server started without errors and that your firewall isn’t blocking localhost.
- On Windows PowerShell, you can run the same Python command:
  python -m http.server 5173

Scope boundaries for future changes
- This repo intentionally has no build/test pipeline. If you introduce ESLint/Prettier/tests later, document those in this file with the exact commands.