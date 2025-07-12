# Changelog Guidelines

This directory is used to record all project change history.

## File Naming Format

`[YYYY-MM-DD]-[summary].md`

Examples:
- `2025-07-12-add-dark-mode.md`
- `2025-07-12-fix-navigation-bug.md`
- `2025-07-12-update-dependencies.md`

## File Content Format

```markdown
# [Change Type]: [Brief Description]

**Date**: YYYY-MM-DD  
**Type**: feat/fix/docs/style/refactor/perf/test/chore  

## Summary

Brief description of what was changed and why.

## Details

- Which files were modified
- What features were added/changed
- What issues were fixed
- Scope of impact

## Related Issue/PR

- Issue: #123
- PR: #456
```

## Change Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation updates
- **style**: Code formatting (no functional changes)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Test-related changes
- **chore**: Build process or tooling changes

## Notes

1. Each significant change should have a corresponding changelog file
2. The summary in the filename should be concise and use lowercase letters with hyphens
3. Multiple changes on the same day should be recorded in separate files, not combined into one