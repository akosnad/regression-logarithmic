# regression-logarithmic

Logarithmic Regression use ln

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

## [API Documentation](https://mljs.github.io/regression-logarithmic/)

## Installation

`$ npm i ml-regression-logarithmic`

## Usage

This calculates parameters A and B for the equation `f(x) = A + B * ln(x)`.

```js
import { LogarithmicRegression } from 'ml-regression-logarithmic';
const { LogarithmicRegression } = require('ml-regression-logarithmic');
const x = [1.5, 2.5, 3.5, 5.0, 7.5];
const y = [0, 1, 2, 3, 4];
const regression = new LogarithmicRegression(x, y);
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-regression-logarithmic.svg
[npm-url]: https://www.npmjs.com/package/ml-regression-logarithmic
[ci-image]: https://github.com/mljs/regression-logarithmic/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/mljs/regression-logarithmic/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/mljs/regression-logarithmic.svg
[codecov-url]: https://codecov.io/gh/mljs/regression-logarithmic
[download-image]: https://img.shields.io/npm/dm/ml-regression-logarithmic.svg
[download-url]: https://www.npmjs.com/package/ml-regression-logarithmic
