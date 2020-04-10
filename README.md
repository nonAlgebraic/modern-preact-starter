# Preact Modern Starter Pack

This is a very opinionated starter pack for a web application built with
[Preact](https://preactjs.com/), and using [Snowpack](https://www.snowpack.dev/)
to do away with the need for a module bundler. The only build step is running
[Babel](https://babeljs.io/) to transpile the source code, which is written in
[TypeScript](https://www.typescriptlang.org/).

Other technologies/libraries that this starter pack uses:

- [Emotion](https://emotion.sh/), for CSS-in-JS styling
- [normalize.css](https://necolas.github.io/normalize.css/), for CSS resetting
- [Jest](https://jestjs.io/), for testing
- [ESLint](https://eslint.org/), for linting TypeScript code
- [Stylelint](https://stylelint.io/), for linting CSS (with support for Emotion CSS-in-JS)
- [Prettier](https://prettier.io/), for code style
- [Servør](https://github.com/lukejacksonn/servor), for local development (with
  live reloading)

## Setup

Just run `yarn install` (or `npm install`). This will also automatically run
Snowpack to re-install all dependencies as ESM-importable files into `/web_modules`.

## Local development

Run `yarn dev` to start a local web server, as well as a Babel watcher. When you
make changes to any files inside the `/src` directory, they will be
re-transpiled and the browser will reload the page.

Other available scripts:

- `prepare` - runs Snowpack for local development, and is also
  automatically run after any new package is installed.
- `babel` - transpiles TypeScript source files once.
- `test` - runs all test suites using Jest.
- `typecheck` - runs a type check against all TypeScript code (without
  emitting transpiled files).
- `lint` - runs ESLint against all TypeScript code.

## Build

Just run `yarn build` to transpile all TypeScript into the `/lib` directory.
This also runs Snowpack using the `--optimize` and `--include` flags, which
ensure that only packages that are actually imported in your source code are
re-installed into `/web_modules`. It also does some tree-shaking.
