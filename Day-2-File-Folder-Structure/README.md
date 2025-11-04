Welcome to React Arc 160 — my personal 160-day React learning journey, where I explore one concept, one commit, every single day.  
Each day covers a new part of React — from fundamentals to real-world projects.

---

## Day 2 — File & Folder Structure of a React App  

When you first open a React project, it can look messy — so many files and folders everywhere.  
But once you understand what each file does, it all starts making sense.  
Let’s decode the essentials.

---

### package.json  
This file defines your project’s identity and dependencies.  
It contains:
- Project name, version, and metadata  
- Build commands and scripts  
- Dependencies and devDependencies  

**Dependencies:** Required for running the project (e.g., React, ReactDOM)  
**DevDependencies:** Required only during development (e.g., ESLint, Vite, Babel)  

These packages are installed inside the node_modules folder.

---

### package-lock.json  
- Locks the exact version of each installed dependency  
- Contains a nested structure of dependencies  
- Ensures consistent installs across all devices  

---

### README.md  
A documentation file about your project.  
Usually includes:
- Project purpose  
- How to install and run  
- Author information  

---

### vite.config.js  
Contains configuration settings for Vite (the build tool).  
Used to:
- Set aliases  
- Add plugins  
- Configure server ports  

---

### eslint.config.js  
Contains ESLint rules that define JavaScript code standards.  
Helps maintain code quality and consistent formatting.

---

### .gitignore  
Lists files and folders that should not be pushed to Git.  
Common ones:
- node_modules/  
- .env  
- dist/  

---

### Project Files Overview  
- index.html — Browser entry point (root div is here)  
- main.jsx — React/JS entry point; renders the App component  
- App.jsx — Main React component  
- App.css, index.css — Styling files for components and global styles  

---

### Best Practices  
- Create React components inside src/components folder  
- If something is meant for public access (like images, favicon, etc.), use the public folder  
- For assets used internally (like logos, icons, CSS files), use an assets folder inside src  

---

### node_modules  
Contains all installed libraries and packages.  
Automatically created when you run npm install or yarn install.  

---

### Why You Should Not Push node_modules to Git  
- It is very large in size  
- Other developers can simply run npm install to recreate it from package.json  

---

### Common Commands  
```bash
npm install       # Install dependencies  
npm run dev       # Run development server  
npm run build     # Build for production
