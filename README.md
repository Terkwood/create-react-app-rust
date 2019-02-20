# Create React App  (Rust) [![Build Status](https://travis-ci.org/facebook/create-react-app.svg?branch=master)](https://travis-ci.org/facebook/create-react-app) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/pulls)

Create React apps with support for WebAssembly/Rust with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux. However Rust tools may behave diferently on Windows in certain cercumstances.

If something doesn’t work, please [file an issue](https://github.com/facebook/create-react-app/issues/new).

## Quick Overview

If you haven't already you'll need to install Rust and source it into your current context

```sh
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
```

Then you can run the tool with `npx`

```sh
npx create-react-app my-app --scripts-version react-scripts-rust
cd my-app
npm start
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.rawgit.com/facebook/create-react-app/27b42ac/screencast.svg' width='600' alt='npm start'>
</p>

## Vision

The following articles inspired the effort to combine rust, React, and WebAssembly:

- https://users.rust-lang.org/t/native-webassembly-loader-for-webpack/14407
- https://github.com/yamafaktory/rust-wasm-webpack
- https://www.hellorust.com/demos/add/index.html
