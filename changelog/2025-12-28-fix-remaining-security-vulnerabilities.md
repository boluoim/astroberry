# Fix remaining security vulnerabilities

## Summary

Fixed 3 remaining security vulnerabilities by adding pnpm overrides.

## Details

### 1. mdast-util-to-hast (CVE-2025-66400) - Medium
- **Issue**: Unsanitized class attribute could allow multiple classnames via character references in markdown
- **Fixed by**: Upgrade to >= 13.2.1
- **Alert**: https://github.com/boluoim/astroberry/security/dependabot/63

### 2. undici (Alert #20) - Medium
- **Fixed by**: Upgrade to >= 6.21.1
- **Alert**: https://github.com/boluoim/astroberry/security/dependabot/20

### 3. undici (Alert #29) - Low
- **Fixed by**: Upgrade to >= 6.21.2
- **Alert**: https://github.com/boluoim/astroberry/security/dependabot/29

## New versions
- mdast-util-to-hast: 13.2.1
- undici: 7.16.0
