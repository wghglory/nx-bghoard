# NxBghoard

Create the repo:

```
npx create-nx-workspace nx-bghoard

? What to create in the new workspace react-express     [a workspace with a full stack application (React + Express)]
? Application name                    review
? Default stylesheet format           emotion           [ https://emotion.sh]
```

## Create a shared ui-tile react library

```bash
nx g @nrwl/react:lib ui-tile --directory=review  # create ui-tile lib under review folder
nx g @nrwl/react:lib util-formatters --directory=review
nx g @nrwl/react:lib data-access-games --directory=review

nx g @nrwl/react:lib feature-list --directory=review
nx g @nrwl/react:lib feature-details --directory=review
```

## Create angular store app

```bash
nx g @nrwl/angular:app store --routing --style=scss
```

and then modify `workspace.json schematics @nrwl/angular:library` with `style: scss`.

Last run `tools/create-store-libs.sh`.

## Create shared library that both react and angular app can use it.

```bash
nx g @nrwl/workspace:lib shared/util-formatters

nx g @nrwl/workspace:lib shared/assets
# Add below into workspace.json for both react and angular section
# {
#   "input": "libs/shared/assets/src/lib",
#   "glob": "*.png",
#   "output": "assets"
# }

```

## Create ui-tile webComponent

```bash
nx g @nrwl/workspace:lib shared/ui-tile
```

## Adding capabilities to your workspace

Below are some plugins which you can add to your workspace:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@nx-bghoard/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
