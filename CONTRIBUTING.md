# Contributing to Devnose

Thank you for your interest in contributing! This document outlines our branching strategy, commit conventions, and development workflow.

## Branching Strategy (Git Flow Manual)

We use **Git Flow** (manual implementation, no tools) with the following branch structure:

| Branch | Purpose | Protection |
|--------|---------|-----------|
| `master` | Production release branch | ✅ Require PR, no force push/delete |
| `develop` | Integration/staging branch | ✅ Require PR, no force push/delete |
| `feature/*` | New features | Temporary, deleted after merge |
| `fix/*` | Bug fixes | Temporary, deleted after merge |
| `hotfix/*` | Critical production fixes | Temporary, deleted after merge |
| `release/*` | Release prep (optional) | Temporary, deleted after merge |

### Branch Naming Convention

Use **kebab-case** with task ID and description:

```
feature/DVN-XX-short-description
fix/DVN-XX-short-description
hotfix/DVN-XX-short-description
release/X.Y.Z
```

**Examples:**
```bash
feature/DVN-02-git-flow-setup
fix/DVN-03-navbar-responsive
hotfix/DVN-02-critical-build-error
release/1.0.0
```

## Conventional Commits

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

| Type | Purpose | Example |
|------|---------|---------|
| `feat` | New feature | `feat(nav): add dark mode toggle` |
| `fix` | Bug fix | `fix(layout): resolve mobile padding` |
| `docs` | Documentation | `docs(readme): update installation steps` |
| `style` | Code style (no logic change) | `style(components): format imports` |
| `refactor` | Code refactor | `refactor(utils): extract helper function` |
| `perf` | Performance improvement | `perf(images): optimize bundle size` |
| `test` | Tests | `test(utils): add unit tests` |
| `chore` | Build, deps, tooling | `chore(deps): upgrade astro to 5.16` |
| `ci` | CI/CD config | `ci: add pre-commit linting` |

### Commit Subject Rules

- Start with **lowercase** letter (except proper nouns)
- **No period** at the end
- **Imperative mood**: "add feature" not "added feature"
- **Maximum 50 characters** (be concise)
- Reference task ID if applicable: `feat(dvn-02): add branch protection rules`

### Commit Body (Optional)

Use for complex changes:

```
feat(search): implement full-text indexing

- Add Pagefind integration for static site search
- Index all blog posts and pages
- Add search UI component with keyboard nav

Closes #42
```

### Commit Footer (Optional)

Reference issues or breaking changes:

```
fix(api): handle null responses

Fixes #123
Breaking-Change: API responses now require authentication
```

## Workflow: Feature Development

### 1. Create Feature Branch

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create feature branch from develop
git checkout -b feature/DVN-XX-description
```

### 2. Develop & Commit

```bash
# Make changes, commit frequently
git add .
git commit -m "feat(scope): add specific feature"
git commit -m "fix(scope): resolve issue found during dev"

# Keep commits atomic (one logical change per commit)
```

### 3. Push & Create PR

```bash
# Push feature branch
git push -u origin feature/DVN-XX-description

# Create Pull Request on GitHub with:
# - Title: feat(scope): add feature
# - Description: What & Why (not How)
# - Link to ClickUp task
# - Checklist: linting, build success, manual testing
```

### 4. Review & Merge

- **Code review required** (self-review if solo)
- **All checks must pass**: linting, build
- **Merge strategy**: Squash or conventional merge (keep history clean)
- **Delete branch** after merge

```bash
# After merge on GitHub
git checkout develop
git pull origin develop
git branch -d feature/DVN-XX-description
```

## Workflow: Bug Fixes

Similar to features, but from `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b fix/DVN-XX-description

# ... make changes, commit with "fix(scope): message" ...

git push -u origin fix/DVN-XX-description
# Create PR, merge, delete branch
```

## Workflow: Hotfixes (Production)

For critical bugs on `master`:

```bash
# Branch from master
git checkout master
git pull origin master
git checkout -b hotfix/DVN-XX-critical-issue

# ... commit with "fix(scope): critical fix description" ...

git push -u origin hotfix/DVN-XX-critical-issue

# After PR merge to master:
git checkout develop
git pull origin develop
git merge --no-ff hotfix/DVN-XX-critical-issue
git push origin develop
git branch -d hotfix/DVN-XX-critical-issue
```

## Workflow: Release (Optional)

For planned releases:

```bash
# Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/X.Y.Z

# Update version in astro.config.ts, package.json, CHANGELOG.md
# Commit: chore(release): bump to X.Y.Z

git push -u origin release/X.Y.Z

# After PR merge to master:
# Tag release: git tag -a vX.Y.Z -m "Release X.Y.Z"
# Merge back to develop

git checkout develop
git merge --no-ff release/X.Y.Z
git push origin develop
```

## Pre-Commit Checklist

Before pushing, ensure:

- [ ] Code follows linting rules: `pnpm lint`
- [ ] Auto-fix applied: `pnpm lint:fix`
- [ ] Build succeeds: `pnpm build`
- [ ] Manual testing completed (no test runner configured)
- [ ] Commit messages follow Conventional Commits
- [ ] No console errors or warnings
- [ ] No hardcoded secrets or credentials

## Pull Request Template

```markdown
## Description
Brief summary of changes (what & why, not how).

## Task Link
[DVN-XX](https://app.clickup.com/t/...)

## Type
- [ ] Feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Refactor
- [ ] Performance

## Checklist
- [ ] Code lints without errors
- [ ] Build succeeds
- [ ] No breaking changes
- [ ] Manual testing completed
- [ ] Commit messages follow Conventional Commits

## Screenshots/Testing
Include relevant details or proof of testing.
```

## Branch Protection Rules (Admin Setup)

These rules are enforced on GitHub:

### `master` (Production)
- ✅ Require PR before merging
- ✅ Require 1 approval (optional for solo dev)
- ✅ Require status checks to pass (when CI enabled)
- ✅ Dismiss stale PR approvals
- ✅ Do not allow force pushes
- ✅ Do not allow deletions

### `develop` (Staging)
- ✅ Require PR before merging
- ❌ No approval required (faster iteration)
- ✅ Do not allow force pushes
- ✅ Do not allow deletions

To configure on GitHub:
1. Go to **Settings → Branches**
2. Add rule for `master` and `develop`
3. Check protection options above

## Deployment

**Automatic deployment** triggered on push to `master`:
- **Provider**: Netlify
- **Build command**: `pnpm build`
- **Publish directory**: `dist/`
- **Domain**: christiansadik.dev

Staging preview available on feature branch PRs (if Netlify configured).

## Questions?

Refer to:
- [README.md](./README.md) — Project overview
- [AGENTS.md](./AGENTS.md) — Development guidelines for agentic tools
- [Conventional Commits](https://www.conventionalcommits.org/) — Full spec
- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
