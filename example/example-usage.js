'use strict'

const sgCompiler = require('sg-compiler')
const co = require('co')

// Compile es 6 script
co(function * () {
  let compiler = sgCompiler()

  let compiled = yield compiler.compile(`
    let {foo, bar} = { foo: 'this is foo', bar: 'This is bar' }
    console.log(foo, bar)
  `)
  console.log(compiled)
})
