/**
 * @class SgCompiler
 */
'use strict'

const co = require('co')
const resolveBin = require('./helpers/resolve_bin')
const childProcess = require('child_process')

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
      let bin = yield resolveBin('babel', {
        notfound: 'Try `npm install -g babel-cli`'
      })
      let spawned = childProcess.spawn(bin, [
        '--presets', options.presets || 'react,es2015'
      ])
      spawned.stdin.write(script)
      spawned.stdin.end()
      return yield new Promise((resolve, reject) => {
        let result = ''
        spawned.stdout.on('data', (chunk) => {
          result += chunk
        })
        spawned.stderr.on('data', (chunk) => {
          result += chunk
        })
        spawned.on('close', () => {
          resolve(result)
        })
        spawned.on('error', (err) => {
          reject(err)
        })
      })
    })
  }
}

module.exports = SgCompiler

