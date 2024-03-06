// Modules
// CommonJs, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)
// Modules - Caching (once a module is loaded, it is cached and not loaded again)
//node uses CommonJS library under the hood to load modules

const names = require('./4-names')
// console.log(names);
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)