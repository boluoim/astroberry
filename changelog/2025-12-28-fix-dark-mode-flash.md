# Fix Dark Mode Flash on Page Load

Prevent flash of light theme when dark mode is active.

## Changes

- **src/layouts/Layout.astro**: Add inline script in `<head>` to set theme before page renders
