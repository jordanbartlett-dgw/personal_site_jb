# Task Completion Checklist

When completing a coding task in this project, run these steps:

## 1. Lint
```bash
npm run lint
```
Must pass with zero warnings/errors.

## 2. Build
```bash
npm run build
```
Must compile successfully. Verifies all routes render correctly.

## 3. Manual Verification
- Run `npm run dev` and visually check affected pages
- Check browser console for runtime errors

## 4. Git
- Stage only relevant files
- Write concise commit messages following conventional commits:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `design:` for design system changes
  - `refactor:` for code restructuring

## Notes
- The Beehiiv API client gracefully returns empty results when env vars are missing, so builds succeed without API keys
- The Supabase client will error at runtime without env vars but won't break the build
- Blog routes use ISR with 1-hour revalidation (`revalidate = 3600`)
