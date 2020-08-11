# The NJ DHS OneApp, mk2

1. [Database Setup](/docs/oracle-setup.md)
2. [Architecture Notes](/docs/architecture-notes.md)
3. [Server Setup](/docs/server.md)

## Contributing & Versioning

We follow the semantic versioning convention, when you commit do so in the following manner;

```
git commit -m "fix: JIRA-1234 Fixed bug on foo"
git commit -m "feat: JIRA-2345 Adds new Widget"
git commit -m "chore: JIRA-3456 Updated README"
git commit -m 'feat: JIRA-4567 Added new theme
```

We use [standard_version](https://github.com/conventional-changelog/standard-version) to automate versioning and release notes.

Simply run `yarn run release` to bump the version number appropriately and generate release notes. Run `git push --follow-tags origin main` to publish.


## Project setup

```bash
yarn install

# Compiles and hot-reloads for development
yarn serve

# Compiles and minifies for production
yarn build

# Run your unit tests
yarn test:unit

# Lints and fixes files
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Build production server

```bash
yarn dist
```

Fully bundled server artifacts can be found in `oneapp-server/dist`.
