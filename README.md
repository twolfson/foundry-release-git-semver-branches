# foundry-release-git-semver-branches [![Build status](https://travis-ci.org/twolfson/foundry-release-git-semver-branches.png?branch=master)](https://travis-ci.org/twolfson/foundry-release-git-semver-branches)

[Foundry][] plugin that creates semver branches (e.g. `1.x.x`, `1.2.x`)

This was built for [`gratipay/gratipay-badge`][], a donation button for Gratipay. We needed a variable way to reference the latest image without hotlinking to `master`.

[foundry]: https://github.com/twolfson/foundry
[`gratipay/gratipay-badge`]: https://github.com/gratipay/gratipay-badge

## Getting Started
Install the module with: `npm install foundry-release-git-semver-branches`

After installation, `foundry` will automatically detect it in your `node_modules`.

```bash
foundry release 1.0.0
# Releases and pushes `1.x.x` and `1.0.x` branch
```

## Documentation
This library was build to match the [foundry plugin specification][spec]. Documentation can be found at:

https://github.com/twolfson/foundry-release-spec

[spec]: https://github.com/twolfson/foundry-release-spec

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt) and test via `npm test`.

## Donating
Support this project and [others by twolfson][gratipay] via [gratipay][].

[![Support via Gratipay][gratipay-badge]][gratipay]

[gratipay-badge]: https://cdn.rawgit.com/gratipay/gratipay-badge/2.x.x/dist/gratipay.png
[gratipay]: https://www.gratipay.com/twolfson/

## Unlicense
As of Nov 07 2014, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
