/**
 * 
 * @module 
 */

'use strict'

const create = require('./create')
const SgCompiler = require('./sg_compiler')

let lib = create.bind(this)

Object.assign(lib, SgCompiler, {
  create,
  SgCompiler
})

module.exports = lib
