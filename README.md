# ProspectRoute – Landing + Auth + Users + Tasks

Fully responsive landing page and app scaffold built with React + Vite + Tailwind. Includes Firebase Auth (persistence), Users module via Redux Toolkit (RTK Query), and Tasks module persisted per user in localStorage. English and Arabic supported with RTL.

## Live + Repo

Live: add your Vercel/Netlify URL here

Repo: add your GitHub repo URL here

## Tech Stack

- React 18 + Vite + TypeScript
- Tailwind CSS
- React Router
- Firebase Auth (email/password) with local persistence
- Redux Toolkit + RTK Query (DummyJSON `https://dummyjson.com/users`)
- React Hook Form + Yup
- i18next + LanguageDetector (EN/AR + RTL)
- react-hot-toast

## Features

- Landing page matching Figma (desktop + mobile), responsive
- Reusable UI components: `Button`, `Input`, `Card`, `Navbar`, `Footer`, `Modal`, `Spinner`
- Auth: Signup, Login, Logout; persistence across refresh
- Protected routes: `/users`, `/users/:id`, `/tasks`
- Users module: pagination (10 per page), search, details page
- Tasks module: CRUD in `localStorage` per user UID; search, sort (A–Z, Z–A, newest/oldest), modal edit, delete confirm
- Global loading state and toast notifications
- Language toggle EN/AR with automatic RTL dir switching

## Folder Structure

```
src/
  app/store.ts                 # Redux store
  components/                  # Reusable UI components
  features/
    tasks/tasksSlice.ts        # Tasks state + localStorage sync
    users/usersApi.ts          # RTK Query endpoints for DummyJSON
  pages/                       # Landing, Auth, Users, Tasks
  routes/ProtectedRoute.tsx    # Auth guard with Firebase persistence
  utils/storage.ts             # LocalStorage helpers for tasks
  firebase.ts                  # Firebase initialization
  i18n.ts                      # i18next setup and RTL handling
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create an `.env` file in the project root with your Firebase config:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=000000000000
   VITE_FIREBASE_APP_ID=1:000000000000:web:xxxxxxxxxxxxxxxxxxxxxx
   ```

   Note: If your environment blocks creating dotfiles, create `env.local` and rename to `.env`.
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

## Deployment (Vercel/Netlify)

- Add the above env vars in your hosting dashboard.
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- Users API uses server-side pagination via DummyJSON (`limit`/`skip`), and client-side sorting/searching fallback where needed.
- Tasks are isolated per user under keys like `pr_tasks_<uid>` in `localStorage`.
- The language toggle updates `document.dir` to `rtl` for Arabic automatically.

## Pages & Routes

- `/` Landing
- `/login`, `/signup` Authentication
- `/users` Users dashboard (protected): name/email list, 10 per page, search, A–Z/Z–A sort
- `/users/:id` User details (protected)
- `/tasks` My tasks (protected): per‑user LocalStorage CRUD, search, sort (A–Z/Z–A/newest/oldest), edit modal, delete confirmation

## Optional Enhancements Implemented

- Global auth loader overlay (brand yellow + logo) with minimum display to avoid flicker
- Mobile navbar hamburger for center links (AR/EN + auth always visible)
- “How it works” expand/collapse synced for both columns
- Hero heading forced line breaks (desktop two-line, mobile three-line) and responsive hero image
- Mobile hero form shows essential fields only (Email, Mobile); others on md+
- Pricing cards rebuilt with header/body/footer, label/value colors, and footer background
- Footer per Figma with full-width divider and centered copyright
