// Load in dependencies
var exec = require('child_process').exec;
var path = require('path');
var expect = require('chai').expect;
var sinon = require('sinon');
var shell = require('shelljs');
var wrench = require('wrench');
var gitRelease = require('../');
var fixtureUtils = require('./utils/fixtures');

describe('Publishing', function () {
  describe('in a git folder', function () {
    fixtureUtils.bundle.mkdir('publish_test');
    fixtureUtils.bundle.exec('git init');
    fixtureUtils.bundle.exec('touch a');
    fixtureUtils.bundle.exec('git add -A');
    fixtureUtils.bundle.exec('git commit -m "Initial commit =D"');

    // DEV: Ideally we would override `child_process.exec` but it causes complications with `shelljs`
    before(function stubExec () {
      this.execStub = sinon.stub(shell, 'exec');
    });
    after(function restoreExec () {
      this.execStub.restore();
    });

    before(function publish (done) {
      this.inBundle(function () {
        gitRelease.publish({
          version: '1.0.0',
          message: 'Release 1.0.0',
          description: null
        }, done);
      });
    });

    it('updates and publishes the minor variable branch', function () {
      expect(this.execStub.args[0]).to.deep.equal(['git checkout -B 1.x.x']);
      expect(this.execStub.args[1]).to.deep.equal(['git push']);
      expect(this.execStub.args[2]).to.deep.equal(['git checkout -']);
    });

    it('publishes the tags', function () {
      expect(this.execStub.args[3]).to.deep.equal(['git checkout -B 1.0.x']);
      expect(this.execStub.args[4]).to.deep.equal(['git push']);
      expect(this.execStub.args[5]).to.deep.equal(['git checkout -']);
    });
  });
});
