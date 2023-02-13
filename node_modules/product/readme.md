# product
> Curried calculation of the product of multiplying multiplicand and multiplier.

[![Build Status](http://img.shields.io/travis/wilmoore/product.js.svg)](https://travis-ci.org/wilmoore/product.js) [![Code Climate](https://codeclimate.com/github/wilmoore/product.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/product.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install product --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/product.svg)](https://www.npmjs.org/package/product) [![NPM downloads](http://img.shields.io/npm/dm/product.svg)](https://www.npmjs.org/package/product) [![Dependency Status](https://gemnasium.com/wilmoore/product.js.svg)](https://gemnasium.com/wilmoore/product.js)

## Examples

###### require

```js
var product = require('product')
```

###### full application

```js
product(10, 2)
//=> 20
```

###### partial application

```js
var tenTimes = product(10)
tenTimes(2)
//=> 20
```

###### functor

```js
var tenTimes = product(10)
var multipliers = [1, 2, 3, 4, 5]

multipliers.map(tenTimes)
//=> [ 10, 20, 30, 40, 50 ]
```

## API

### `product(multiplicand, multiplier)`

###### arguments

 - `multiplicand: (Number)` Number to be multiplied by the multiplier.
 - `multiplier: (Number)` Number by which the multiplicand is to be multiplied.

###### returns

 - `(Number)` The result of multiplying `multiplicant` and `multiplier`.

## License

[![GitHub license](https://img.shields.io/github/license/wilmoore/product.js.svg)](https://github.com/wilmoore/product.js/blob/master/license)
