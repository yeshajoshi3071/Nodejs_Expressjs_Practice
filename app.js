// Modules
// CommonJs, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)
// Modules - Caching (once a module is loaded, it is cached and not loaded again)
//node uses CommonJS library under the hood to load modules

const names = require('./4-names')
console.log(names);
const sayHi = require('./5-utils')

sayHi('susan')
sayHi(john)
sayHi(peter)