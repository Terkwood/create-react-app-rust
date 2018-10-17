const execSync = require('child_process').execSync;

module.exports = () => {
  try {
    execSync(
      'rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib src/lib.rs -o public/app.big.wasm && wasm-gc public/app.big.wasm public/app.wasm && rm public/app.big.wasm'
    );
  } catch (error) {
    execSync(
      'rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib src/lib.rs -o public/app.big.wasm && wasm-gc public/app.big.wasm public/app.wasm'
    );
  }
};
