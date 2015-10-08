// Load our dependencies
var quote = require('shell-quote').quote;
var SemVer = require('semver').SemVer;
var shell = require('shelljs');

// Define our release process
exports.publish = function (params, cb) {
  // Calculate the semver branches (e.g. `1.2.3` -> `1.2.x`, `1.x.x`)
  var semver = new SemVer(params.version);
  var minorBranch = [semver.major, 'x', 'x'].join('.'); // 1.x.x
  var patchBranch = [semver.major, semver.minor, 'x'].join('.'); // 1.2.x

  // Update the branches, push the branches, and go back to the original branch
  // DEV: We should force push but based on some configs that could push all branches
  shell.exec(quote(['git', 'checkout', '-B', minorBranch]));
  shell.exec('git push');
  shell.exec('git checkout -');
  shell.exec(quote(['git', 'checkout', '-B', patchBranch]));
  shell.exec('git push');
  shell.exec('git checkout -');
  process.nextTick(cb);
};
