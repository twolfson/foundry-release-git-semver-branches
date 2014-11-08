// Load our dependencies
var shell = require('shelljs');
var quote = require('shell-quote').quote;

// Specify what spec versions we support
exports.specVersion = '1.1.0';

// Define our release process
exports.publish = function (params, cb) {
  // If we are in a git directory
  if (shell.test('-d', '.git')) {
    // Calculate the semver branches (e.g. `1.2.3` -> `1.2.x`, `1.x.x`)
    shell.exec('git push');
    shell.exec('git push --tags');
  }
  process.nextTick(cb);
};
