# @x12i/xentra-core usage example

Pure domain business logic for Xentra.

This consuming application demonstrates **create account and membership domain models** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Embed Xentra domain operations without starting its HTTP application.
- Compose the domain layer with explicit identity, permission and store dependencies.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/xentra-core)
- [Implementation monorepo](https://github.com/x12i/xentra)
- [Reviewed package source](https://github.com/x12i/xentra/tree/004372e6695509bf2e95d2e4e53d4534e81dd312/packages/core)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
