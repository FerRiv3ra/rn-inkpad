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
