# Contributing

## Setup

This repo is a Yarn 4 workspace: the library lives at the root (`src/`), the demo app in `example/` (Expo) and the docs site in `docs/` (Docusaurus, installed separately).

```sh
yarn            # install root + example
yarn prepare    # build lib/ with builder-bob and install git hooks
```

Node 20+ is required (see `.nvmrc`).

## Scripts

| Command            | What it does                                             |
| ------------------ | -------------------------------------------------------- |
| `yarn typecheck`   | `tsc` over `src/` and `example/`                         |
| `yarn lint`        | ESLint (flat config) + Prettier                          |
| `yarn lint:fix`    | Same, auto-fixing                                        |
| `yarn test`        | Jest + `@testing-library/react-native`                   |
| `yarn build`       | Build `lib/` (commonjs, module, typescript declarations) |
| `yarn example ios` | Run the demo app on iOS (`android`, `web` also work)     |
| `yarn release`     | Bump version, tag and publish with release-it            |

The example app resolves `rn-inkpad` straight from `src/` through the
`rn-inkpad-source` export condition, so no rebuild is needed while developing.

## Commit hooks

Husky runs `lint-staged` on every commit: ESLint + Prettier on staged files.

## Publishing

`npm pack --dry-run` shows exactly what will be published. Only `src/` and `lib/`
are shipped; tests, fixtures and dotfiles are excluded through the `files` field.

## Example app

`example/` is a gallery: a list of every component, tapping one opens its demo screen.
Navigation is plain React state, so there are no extra dependencies.

To add or change a demo:

1. Create `example/src/demos/<Name>Demo.tsx` exporting a component. Use `Section`
   and `Result` from `example/src/ui/Section.tsx` to keep the layout consistent.
2. Register it in `example/src/demos/registry.ts` (title, description, icon, category).

Run it with `yarn example ios`, `yarn example android` or `yarn example web`.

## Docs

`docs/` is a Docusaurus site (English + Spanish), deployed to Firebase.

```sh
cd docs && npm install
npm start          # dev server
npm run build      # validates both locales
```

Pages live in `docs/docs`; Spanish copies in `docs/i18n/es/docusaurus-plugin-content-docs/current`.
`<Snack code={`...`} />` embeds a live Expo Snack (registered globally in `src/theme/MDXComponents.tsx`).

## Releasing

Releases are cut with [release-it](https://github.com/release-it/release-it) from a clean `main`:

```sh
yarn release            # stable: bumps, tags vX.Y.Z, publishes to npm (latest), GitHub release
yarn release:beta       # prerelease: X.Y.Z-beta.N published under the `next` tag
```

`before:init` runs typecheck, lint and tests; `after:bump` builds `lib/`. You need `npm login`
(or an `NPM_TOKEN`) and a `GITHUB_TOKEN` with repo scope for the GitHub release.
Alternatively push the tag and let `.github/workflows/release.yml` publish (requires the
`NPM_TOKEN` repository secret).

After publishing, rebuild and deploy the docs so the Snacks pin the new version:

```sh
yarn docs:deploy   # build + firebase deploy (firebase-tools is a docs devDependency, no global install needed)
```
