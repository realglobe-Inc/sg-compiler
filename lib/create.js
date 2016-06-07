/**
 * Create sg compiler instance
 * @function create
 */
'use strict'

const SgCompiler = require('./sg_compiler')

/** @lends create */
function create (...args) {
  return new SgCompiler(...args)
}

module.exports = create
