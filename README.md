## Electron React Boilerplate

This is a modified version of the <a href="https://electron-react-boilerplate.js.org/" target="_blank">electron-react-boilerplate</a>.

The only real difference with this version is to the contents of the 'app' itself in how it's scaffolded.

- components self contained with styling, testing and tsx file in one place
- favour scss modules with postcss (for pxToRem) for styling
- layout system added
- couple of generic modules added to start with
- additional examples added, the redux setup updated a little to reflect this
- app can be opened in browser now if desired

<br>
<p>
  Electron React Boilerplate uses <a href="https://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/redux">Redux</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="https://webpack.github.io/docs/">Webpack</a> and <a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a> for rapid application development (HMR).
</p>
<hr />

## Install

First, clone the repo via git and install dependencies:

```bash
git clone --depth 1 --single-branch https://github.com/aFrontendDev/electron-react.git
your-project-name
cd your-project-name
yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn dev
```

## Starting Prod version of app

Start the app in production mode:

```bash
yarn start
```

## Run unit tests

Jest and Enzyme are the default testing tools in this boilerplate, to run tests:

```bash
yarn test
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package
```

This creates a release folder at root which contains the executables.
