/**
 * @class SgCompiler
 */
'use strict'

const co = require('co')
const { transform } = require('babel-core')

/** @lends SgCompiler */
class SgCompiler {
  constructor () {

  }

  /**
   * Compile script
   * @param {string} script - Script to compile
   * @param {Object} options - Optional settings
   * @param {string} [options.presets='react,es2015'] - Babel presets
   */
  compile (script, options = {}) {
    return co(function * () {
      let { code, map, act } = transform(script, {
        sourceMaps: 'inline',
        presets: options.presets || 'react,es2015'
      })
      return code
    })
  }
}

module.exports = SgCompiler

