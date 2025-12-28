# Fix Theme Persistence and Avatar Navigation

Fixed two bugs related to View Transitions navigation.

## Changes

- **src/components/ThemeToggle.astro**: Add `astro:after-swap` event listener to persist theme after page navigation, and apply theme immediately on script load
- **src/components/Avatar.astro**: Replace JavaScript click handler with semantic `<a>` tag for reliable home navigation
