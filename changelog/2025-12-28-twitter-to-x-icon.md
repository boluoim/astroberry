# Replace Twitter Icon with X Icon

Updated the social media icon from Twitter to X (formerly Twitter).

## Changes

- **src/config/index.ts**: Changed social link name from "Twitter" to "X" and icon from `mdi:twitter` to `simple-icons:x`
- **src/components/SocialBar.astro**: Added padding adjustment for X icon to match visual size of other icons
- **package.json**: Added `@iconify-json/simple-icons` dependency for the X icon
