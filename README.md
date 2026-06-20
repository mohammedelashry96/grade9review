# Grade 9 Science — Term 3 End-of-Term Revision Site

A lightweight, mobile-friendly, bilingual (English / العربية) interactive revision
website for the Grade 9 Science (Inspire) Term 3 End-of-Term exam. It runs entirely
in the browser with no build step and no server — just static HTML, CSS and JavaScript.

موقع مراجعة تفاعلي ثنائي اللغة (إنجليزي/عربي) لمادة العلوم للصف التاسع، اختبار نهاية
الفصل الثالث. يعمل بالكامل في المتصفح بدون أي إعداد.

## What's inside

- **6 lessons**, each with bilingual notes, colour-coded boxes (key idea / formula /
  common mistake / try it), inline SVG diagrams, and a short quiz (5–8 MCQs).
  1. Kinetic Theory and States of Matter
  2. Changes of State and Heating/Cooling Curves
  3. Fluids, Buoyancy, Pressure, Pascal, and Bernoulli
  4. Properties of Matter and Chemical Changes
  5. Conservation of Mass, Elements, Compounds, and Mixtures
  6. Energy Resources and the Environment
- **Mock exam**: 25 mixed multiple-choice questions (4 marks each = 100), mirroring
  the real format (MCQ only, 120 minutes, calculator allowed, SwiftAssess platform).
- Progress bar, score view with feedback bands, and a bilingual explanation on
  **every** question.
- Optional progress saving via `localStorage` (no personal data) with a reset button.
- Accessibility: bilingual alt text, keyboard focus, high-contrast and
  reduced-motion support, and feedback that never relies on colour alone.

All diagrams are inline SVG, so the site is fully self-contained — no image files,
no external assets except web fonts (which fall back gracefully if blocked).

## Run locally

Just open `index.html` in any modern browser. No build, no install.

Or serve the folder (recommended, so routing/fonts behave exactly as in production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a new GitHub repository and push these files to it (keep the folder
   structure — `index.html` at the root, with the `assets/` folder beside it):

   ```bash
   git init
   git add .
   git commit -m "Grade 9 Science Term 3 revision site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set the branch to **main** and the folder to **/ (root)**, then **Save**.
5. Wait a minute, then open the published URL GitHub shows you
   (`https://<your-username>.github.io/<your-repo>/`).

That's it — the site is static, so no further configuration is needed.

## File structure

```
index.html              # Page shell: topbar, language toggle, progress bar, footer
assets/
  css/styles.css        # Full design system, responsive + accessibility styles
  js/content.js         # All lesson content, quizzes, and the 25-question mock exam
  js/diagrams.js        # 21 inline bilingual SVG diagrams
  js/app.js             # Routing, rendering, quiz engine, scoring, progress saving
```

## Notes for editing

- **Content** lives in `assets/js/content.js`. Each lesson has `sections` (notes,
  lists, boxes, diagrams) and a `quiz`. The mock exam is in `finalQuiz`. Every quiz
  question carries `q`, four `options`, the `correct` index, and a bilingual
  `explain`. (Answer positions are shuffled automatically at runtime, so it's fine
  to author them in any order.)
- **Diagrams** are in `assets/js/diagrams.js`, keyed by id and referenced from a
  section's `diagram` id. Each is bilingual SVG.
- **Styling** and colours are centralised as CSS variables at the top of
  `assets/css/styles.css`.
