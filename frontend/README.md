# Agreemetrics Frontend 🎨📊

Welcome to the **frontend** of **Agreemetrics**, the contract risk analysis platform! This app is your gateway to signing in with DocuSign, viewing your documents, and generating risk dashboards in a beautifully crafted interface.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Folder Structure](#folder-structure)
5. [Routes](#routes)
6. [Dependencies](#dependencies)
7. [Development](#development)
8. [What's Next?](#whats-next)

---

## Project Overview

The frontend is built using **React** with a focus on creating an intuitive and visually appealing user experience. From signing in with DocuSign to exploring clause risks in your documents, this app does it all with a sprinkle of flair! ✨

---

## Features

- **DocuSign Authentication:** Secure sign-in with OAuth for a seamless experience.
- **Profile Dashboard:** View your profile and access documents synced from DocuSign.
- **Dynamic Risk Analysis:** Charts and graphs powered by **Recharts** for detailed insights.
- **Responsive Design:** Fully optimized for desktops and mobile devices. 📱💻

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dukeofhazardz/agreemetrics.git
   cd agreemetrics-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # Or if you're using Yarn:
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # Or with Yarn:
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## Folder Structure

Here's the project's file structure:

```
src/
├── assets/           # Images, logos, and static files
├── components/       # Reusable UI components (e.g., Navbar, Footer)
├── lib/              # Utility functions and helpers (e.g., API client, LocalStorage)
├── pages/            # Page-level components (e.g., HomePage, UserProfile, Dashboard)
├── App.jsx           # Main application component
├── index.jsx         # Application entry point
```

---

## Routes

Here's a breakdown of the app's main routes:

1. **Home Page (`/`)**  
   - Displays the welcome screen and allows users to sign in via DocuSign.
   - Component: `HomePage`

2. **Profile Page (`/profile`)**  
   - Shows the user's DocuSign profile and a summary of their documents.
   - Component: `UserProfile`

3. **Dashboard Page (`/dashboard`)**  
   - A detailed analysis of clauses, risks, and remedies with interactive graphs.
   - Component: `Dashboard`

---

## Dependencies

Here are the key libraries used in this project:

- **React Router:** For managing navigation and routes.
- **Axios:** For making HTTP requests to the backend.
- **Recharts:** For rendering interactive charts and graphs.
- **Moment.js:** For date formatting.
- **Vite:** For a fast development build process.

Install these with:
```bash
npm install react-router-dom axios recharts moment
```

---

## Development

### Commands
- **Start Development Server:**
  ```bash
  npm run dev
  ```
- **Build for Production:**
  ```bash
  npm run build
  ```
- **Linting and Formatting:**
  ```bash
  npm run lint
  ```

---

## What's Next?

Here are some features we’d love to add:
- **Multi-Language Support:** Expand the app for global users.
- **Enhanced Charts:** Add interactivity and drill-down features to charts.
- **Notifications:** Keep users updated on document analysis status.

---

I hope you enjoy exploring the Agreemetrics frontend as much as I enjoyed building it! 🎉