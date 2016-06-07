/**
 * Test case for sgCompiler.
 * Runs with mocha.
 */
'use strict'

const SgCompiler = require('../lib/sg_compiler.js')
const assert = require('assert')
const co = require('co')

describe('sg-compiler', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sg compiler', () => co(function * () {
    let compiler = new SgCompiler({})
    let compiled = yield compiler.compile(`
  let {foo, bar} = { foo: 'this is foo', bar: 'This is bar' }
  console.log(foo, bar)
    `, {})
    assert.ok(compiled)
    console.log(compiled)
  }))
})

/* global describe, before, after, it */
