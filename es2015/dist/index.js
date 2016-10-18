'use strict';

var _widgets = require('./widgets');

var _widgets2 = _interopRequireDefault(_widgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var test = "test";

// import { getAll, add } from './widgets';

_widgets2.default.add({ name: 'first widgets', color: 'red', size: 'small' });

console.log(_widgets2.default.getAll().length);