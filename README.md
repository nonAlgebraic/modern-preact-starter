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
Snowpack to re-install all imported dependencies as ESM-importable files into `/public/web_modules`.

## Local development

Run `yarn dev` to start a local web server, as well as a Babel watcher. When you
make changes to any files inside the `/src` directory, they will be
re-transpiled and the browser will reload the page.

**Important notes:**

- When importing NPM packages in your source code, **do not** use package names
  as the path:

  ```TypeScript
   // DON'T DO THIS
   import { h } from 'preact';
  ```

  This is because the browser is unable to resolve
  modules by name, and there is no bundler around to transform traditionial Node
  imports to something the browser can understand.

  Instead, use the path to the Snowpack-generated file, like so:

  ```TypeScript
  // DO THIS INSTEAD
  import { h } from '/web_modules/preact.js'
  ```

  TypeScript is pre-configured to intepret paths starting with "`/web_modules`"
  aliases for "`node_modules`".

- When adding any new dependency imports to your soure code, always
  run `yarn prepare` afterwards in order to ensure that Snowpack makes them available in `/public/web_modules`.

## Build

Just run `yarn build` to transpile all TypeScript into the `/lib` directory.
This also runs Snowpack with minification and tree-shaking of dependencies.

## Other available scripts

- `babel` - transpiles TypeScript source files into `/public/lib`
- `prepare` - runs `babel`, and then runs Snowpack to re-install any
  dependencies imported in `/public/lib` files into `/public/web_modules` as
  single ES6 module files. This also automatically runs whenever `yarn install` is run.
- `babel-clean` - removes the `/public/lib` directory.
- `test` - runs all test suites using Jest.
- `typecheck` - runs a type check against all TypeScript code (without
  emitting transpiled files).
- `lint` - runs ESLint and Stylelint against all TypeScript code and Emotion
  CSS, respectively.
