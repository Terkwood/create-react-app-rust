const execSync = require('child_process').execSync;
const chalk = require('chalk');
const commandExistsSync = require('command-exists').sync;

module.exports = {
  build: () => {
    try {
      // first build app.wasm and then optimize with wasm-gc
      execSync(
        'rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib src/App.rs -o build/app.wasm && wasm-gc build/app.wasm',
        { stdio: 'inherit' }
      );
    } catch (error) {
      console.log(chalk.bold.red('error compiling rust'));
    }
  },
  isRustInstalled: () => commandExistsSync('rustup'),
  installRustWebAssemblyTools: () => {
    if (!commandExistsSync('wasm-gc')) {
      try {
        execSync('cargo install wasm-gc', { stdio: 'inherit' });
      } catch {
        console.log(`${chalk.bold.red('error installing wasm-gc')} please install manually ${chalk.red('cargo install wasm-gc')}')`);
      }
    }
    execSync(
      'rustup target add wasm32-unknown-unknown --toolchain nightly',
      { stdio: 'inherit' }
    );
  },
};
