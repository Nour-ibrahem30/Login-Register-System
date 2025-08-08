# Login‑Register System

A clean and responsive web interface for **user sign-up and login**, built using **Bootstrap**, **SCSS**, and **TypeScript**.  
It features an animated switch between forms, local storage-based authentication logic, and a clean UI.

---

##  Project Overview

- **HTML** structuring for page layout and forms.
- **SCSS** for styling and animations (including loading overlay and transitions).
- **TypeScript** powering:
  - Sign-up and login form logic.
  - LocalStorage-based user data handling.
  - Animated transitions between Sign-In and Sign-Up.
  - Modal popups for feedback.
  - Dynamic user info display in the sidebar.

---

##  Project Structure

```text
/Login‑Register‑System
│
├── css/           → Compiled CSS files (including Bootstrap and custom styles)
├── dist/          → Built and bundled assets ready for production
├── scss/          → Source SCSS files (styles, mixins, variables)
├── src/           → TypeScript source code (main logic)
├── index.html     → Main HTML entry point
├── package.json   → Project dependencies and scripts
├── tsconfig.json  → TypeScript configuration
└── README.md      → Project overview and setup guide
Demo Screenshots
(Optional: Add your screenshots inside an assets/screenshots/ folder and update these paths)

Sign-Up Form

Sign-In Form

Dashboard Sidebar

Getting Started
Clone the repository

bash
Copy
Edit
git clone https://github.com/Nour-ibrahem30/Login-Register-System.git
cd Login-Register-System
Install dependencies

bash
Copy
Edit
npm install
Build the project

bash
Copy
Edit
npm run build
Open in browser

Open index.html in your favorite browser. No server setup needed.

How It Works
Animations & UI
Overlay animations using SCSS + keyframes, controlled via class toggles in TypeScript.

Sign-Up Flow
Stores credentials (username & password) in localStorage.

Sign-In Flow
Validates credentials and launches post-login UI (sidebar, content reveal).

Sidebar Actions

View user info (username and password)

Logout (clears localStorage and reloads the page)

Future Improvements
Feature	Description
Backend Integration	Replace localStorage with real backend auth
Form Validation	Improve UX with validation messages and password strength checking
Responsive Enhancement	Better mobile experience, animations
Dark Mode	Add light/dark theme toggle
User Profiles	Expand to personalized user dashboard

About the Author
Nour Ibrahem

GitHub: Nour-ibrahem30

LinkedIn: (Add your LinkedIn URL if available)

© 2025 Nour Ibrahim. All rights reserved.