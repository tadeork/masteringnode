'use strict';

// const { doSomething, getItDone: git} = require('./first-module');

// git();

// los módulos son singleton
const firstMod1 = require('./first-module');
const firstMod2 = require('./first-module');

firstMod1.put('17-10-2016');
console.log(firstMod2.get());