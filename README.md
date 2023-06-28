# Space Madness Docs

## A content framework that connects ideas so you can build your digital garden

[![Netlify Status](https://api.netlify.com/api/v1/badges/66fb1c54-423b-46a8-9beb-6b71efe07924/deploy-status)](https://app.netlify.com/sites/space-madness/deploys)

Docs site for [Space Madness](https://spacemadness.dev/). A modified version of the base [Space Madness stack](https://github.com/JumboLove/space-madness).

The monorepo is configured with apps as the primary hosted sites.

Packages are code that is shared across the sites.

```bash
.
├── apps
│   ├── site-docs
│   └── site-sanity
└── packages
    ├── content-models
    └── sanity-zod-types
```

Navigate to each folder's `README.md` for more details.

## Getting Started

See the [Space Madness Docs](https://spacemadness.dev/docs/) for detailed instructions on installing and runnig your app.

If you'd like to use this repo as your starting point:

```bash
npx create-turbo@latest -e https://github.com/JumboLove/space-madness-docs
```

1. `export SANITY_STUDIO_PROJECT_ID=<sanity-id>`

   or

   `set SANITY_STUDIO_PROJECT_ID=<sanity-id>`

1. `turbo dev`

## Deploying

Deploying is supported for any hosting platform that supports static site hosting.

## Hosting the Astro site

### Build command

`turbo build --filter=site-space-madness-docs`

### Publish directory

`/apps/site-docs/dist/`

## Hosting the Sanity site

Deploying is supported for any hosting platform that supports static site hosting.

### Build command

`turbo build --filter=site-space-madness-sanity`

### Publish directory

`/apps/site-sanity/dist/`

## Contributing

Contributions are welcome, but only if they're intended to fix an issue with the docs.

Changes that are rooted in the Space Madness stack itself should be made upstream at the [core template](https://github.com/JumboLove/space-madness). Changes from the core can be pulled down to this template when necessary.

If your code editor does not support Pretier out of the box, you can run `npm run format` from the `site-astro` directory before committing your changes.

Please make all pull requests to `main`.
