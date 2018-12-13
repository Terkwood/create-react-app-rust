# react-scripts-rust

This package includes scripts and configuration used by [Create React App (Rust)](https://github.com/thomashorrobin/create-react-app-rust).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.


## Quick Overview

First install Rust if you haven't already
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

After the project has loaded in Chrome any changes in `src/lib.rs` should result in an instant update in the browser.
