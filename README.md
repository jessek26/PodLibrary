# PodLibrary - Podcast Episode Library

This is a starter application for learning responsive design principles. The app currently only works well on desktop screens.

## Setup Instructions

1. Fork and clone down the repository to your machine. Don't forget to install the dependencies.
```bash
git clone REPO_URL_HERE
cd REPO_NAME_HERE
npm install
```

2. Open in VS Code and explore the files
```bash
code .
```

3. Start the development server and explore the application.
```bash
npm run dev
```

## Current State

This application is **desktop-only** and will break on smaller screens:
- The sidebar stays at 280px fixed width
- The episodes grid tries to maintain 3 columns even on phones
- Font sizes are too large for mobile
- No responsive units are used (everything is pixels)

Your task is to make it responsive!