# Suggested Commands

## Development
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build (validates all routes)
npm run start        # Start production server
npm run lint         # Run ESLint (eslint-config-next with core-web-vitals + typescript)
```

## Git
```bash
git log --oneline -10    # Recent commits
git status               # Working tree status
git diff                 # Unstaged changes
```

## System (macOS/Darwin)
```bash
ls -la                   # List files with details
find . -name "*.tsx"     # Find files by pattern
grep -r "pattern" src/   # Search in source
```

## Deployment (when ready)
```bash
npx vercel               # Deploy to Vercel (interactive)
npx vercel --prod        # Deploy to production
```

## Package Management
```bash
npm install              # Install dependencies
npm install <pkg>        # Add dependency
npm install -D <pkg>     # Add dev dependency
```
