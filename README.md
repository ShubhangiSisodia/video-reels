# Video Reels Page

## Overview

This project is a **Video Reels Page** built using **React, Tailwind CSS, and Framer Motion**. It allows users to scroll through a series of videos, interact with them via likes, comments, and sharing options, and view associated product links.

## Features

- **Autoplaying Videos:** The active video plays automatically, and others pause.
- **Like Button:** Users can toggle the like button, changing its appearance.
- **Comments Button:** Placeholder for future commenting functionality.
- **Sharing Options:** Users can share via **WhatsApp, Email, or Copy Link**.
- **Progress Bar:** Displays the video playback progress.
- **Product Links:** Clickable product links appear over the video.
- **Infinite Scrolling:** Users can seamlessly scroll through the reels.

## Thought Process & Design Choices

### 1. **Component Structure**

- `index.js` - Handles individual video rendering, interactions, and UI elements, Manages scrolling behavior and active video state.

### 2. **User Experience Considerations**

- **Autoplay Behavior:** The currently visible video plays automatically for an immersive experience.
- **Snap Scrolling:** Ensures each video takes up the full viewport, mimicking social media reel behavior.
- **Fixed Header:** The "Reels" title remains at the top for context.
- **Progress Indicator:** Provides real-time feedback on video playback.
- **Share Modal:** Opens smoothly and contains multiple sharing options.

### 3. **State Management**

- **`useState` Hooks:** Manage states like `isMuted`, `liked`, `progress`, and `showShareModal`.
- **`useEffect` Hooks:** Handle video autoplay, progress tracking, and setting share links.

### 4. **Performance Optimizations**

- **Lazy Loading Videos:** Uses `preload='auto'` for a smoother experience.
- **Framer Motion for Animations:** Ensures lightweight and smooth transitions.

## Installation & Running the Project

### Prerequisites

- Node.js & npm/yarn installed
- A React environment setup

### Steps to Run

```sh
# Clone the repository
git clone <repo-link>
cd video-reels-page

# Install dependencies
npm install

# Run the development server
npm start
```

## Future Improvements

- Implement comments functionality.
- Add backend support for likes and shares.
- Improve video caching and preloading.
- Add more sharing options.

## Technologies Used

- **React** - UI rendering
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **React Icons** - Icons for UI elements

This README provides an overview of the project, its features, and design considerations. 🚀
