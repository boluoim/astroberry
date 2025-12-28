# Theme Toggle Ripple Animation

Added a circular ripple animation effect when toggling between light and dark themes.

## Changes

- **ThemeToggle.astro**: Implemented View Transitions API to create a circular clip-path animation that expands from the click position
- **env.d.ts**: Added TypeScript declarations for the View Transitions API

## Features

- Animation starts from the user's click position and expands outward
- Graceful fallback for browsers that don't support View Transitions API
- Different animation directions for light→dark vs dark→light transitions
