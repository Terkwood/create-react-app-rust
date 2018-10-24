const execSync = require('child_process').execSync;
const chalk = require('chalk');

module.exports = {
  build: () => {
    try {
      // first build app.wasm and then optimize with wasm-gc
      execSync(
        'rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib src/App.rs -o build/app.wasm',
        { stdio: 'inherit' }
      );
      try {
        // check to see if wasm-gc is installed and if not install it
        execSync('wasm-gc');
      } catch (err) {
        execSync('cargo install wasm-gc', { stdio: 'inherit' });
      } finally {
        // think of this like running --gc-sections on the app.wasm file
        execSync('wasm-gc build/app.wasm', { stdio: 'inherit' });
      }
    } catch (error) {
      console.log(chalk.bold.red('error compiling rust'));
    }
  },
  isRustInstalled: () => {
    try {
      execSync('rustup show');
      return true;
    } catch (error) {
      return false;
    }
  },
  installRustWebAssemblyTools: () => {
    execSync(
      'rustup target add wasm32-unknown-unknown --toolchain nightly',
      { stdio: 'inherit' }
    );
  },
};
