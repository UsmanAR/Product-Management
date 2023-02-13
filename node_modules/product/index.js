'use strict'

/*!
 * imports.
 */

var curry2 = require('curry2')

/*!
 * exports.
 */

module.exports = curry2(product)

/**
 * Curried muliplication.
 *
 * @param {Number} multiplicand
 * Number to be multiplied by the multiplier.
 *
 * @param {Number} multiplier
 * Number by which the multiplicand is to be multiplied.
 *
 * @return {Number}
 * The product.
 */

function product (multiplicand, multiplier) {
  return (multiplicand * 10) * (multiplier * 10) / 100
}
