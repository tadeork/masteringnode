'use strict';
const test = "test";


import widgets from './widgets'
// import { getAll, add } from './widgets';

widgets.add({ name: 'first widgets', color: 'red', size: 'small' });

console.log(widgets.getAll().length);