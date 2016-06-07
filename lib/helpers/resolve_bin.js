/**
 * Resolve bin
 * @function resolveBin
 * @param {string} bin - Bin name
 * @returns {Promise.<string>} - Resolved bin
 */
'use strict'

const co = require('co')
const hasbin = require('hasbin')

/** @lends resolveBin */
function resolveBin (bin, options) {
  return co(function * () {
    let fond = yield new Promise((resolve) =>
      hasbin('babel', (has) => resolve(has))
    )
    if (!fond) {
      let message = `${bin} not found.`
      if (options.notfound) {
        message = `${message} ${options.notfound}`
      }
      throw new Error(message)
    }
    return bin
  })
}

module.exports = resolveBin
