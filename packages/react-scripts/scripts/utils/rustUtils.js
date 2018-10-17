const execSync = require('child_process').execSync;

module.exports = { 
  build: () => {
    // first build app.big.wasm and then optimize to app.wasm with wasm-gc
    try {
      execSync(
        'rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib src/lib.rs -o public/app.big.wasm && wasm-gc public/app.big.wasm public/app.wasm && rm public/app.big.wasm'
      );
    } catch (error) {
      // on Windoze sometimes 'rm' is not reliable. if it fails try with this
      execSync(
        'Remove-File ./public/app.big.wasm'
      );
    }
  }
}
