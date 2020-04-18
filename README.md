# React App Skeleton

## Quick start

```
npm run start
```

Starts the development server running on `http://localhost:3000`

## Commands

### Generate a new component

```
npm run generate
```

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s, and `container`s.

### Start the dev server

```Shell
npm start
```

Starts the development server and makes your application accessible at
`localhost:3000`. Changes in the application code will be hot-reloaded.

### Start the prod server

```Shell
npm run start:production
```

- Runs tests
- Builds your app
- Starts the production server

Assets are
minified and served gzipped.

### Build

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

### Run unit tests

```Shell
npm test
```


All the `test` commands allow an optional `-- [string]` argument to filter
the tests run by Jest.

### Watch unit tests

```Shell
npm run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

### Run remote tests

```Shell
npm run start:tunnel
```

Starts the development server and tunnels it with `ngrok`, making the website
available worldwide. Useful for testing on different devices in different locations!

### Analyze dependencies

```Shell
npm run analyze
```

This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/) or [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

### Lint

```Shell
npm run lint
```

Lints your JavaScript and your CSS.

```Shell
npm run lint:eslint:fix -- .
```

Lints your code and tries to fix any errors it finds.


## Tech Stack
Main  libraries this project is built with:

### Core
- React
- React Router
- Redux
- Redux Saga
- Reselect
- Immer
- Styled Components

### Unit Testing
- Jest
- react-testing-library

### Linting
- ESLint
- Prettier
- stylelint

## Project Structure

### `app/`

We use the [container/component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw). `containers/` contains React components which are connected to the redux store. `components/` contains dumb React components which depend on containers for data. **Container components care about how things work, while components care about how things look.**

### `internals/`

You can call this area the "engine" of your app. Your source code cannot be executed as-is in the web browser. It needs to pass through webpack to get converted into a version of Javascript that web browsers understand. While it's certainly helpful to understand what's happening here, for real world usage, you won't have to mess around with this folder much.

- `internals/webpack`: You'll most probably use ECMAScript 6 or ECMAScript 7 to write the source code of your app. webpack takes care of making it compatible with a majority of browsers.

- `internals/generators`: This folder has the code to scaffold out new components, containers and routes.

- `internals/mocks`: This folder contains mocks which Jest uses when testing your app, e.g. for images.

### `server/`

This folder contains development and production server configuration.


## Boilerplate

This React app is based on the [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) project.
