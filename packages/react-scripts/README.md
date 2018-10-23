# react-scripts-rust

This package includes scripts and configuration used by [Create React App (Rust)](https://github.com/thomashorrobin/create-react-app-rust).<br>
Please refer to its documentation:

- [Getting Started](https://github.com/thomashorrobin/create-react-app-rust/blob/rust/README.md) – How to create a new app.
- [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.


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
