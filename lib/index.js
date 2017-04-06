'use strict';
/**
 * Simultaneously satisfy require('fb') and Babel based ES2015 `import`
 * by exporting an object using Babel's __esModule which contains the normal
 * exports; and bound versions of the methods on FB.
 */

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod = require('./fb'),
    FB = mod.FB;


for (let key of (0, _getOwnPropertyNames2.default)((0, _getPrototypeOf2.default)(FB))) {
	if (key === 'constructor') continue;
	if (typeof FB[key] === 'function') {
		exports[key] = FB[key].bind(FB);
	} else {
		exports[key] = FB[key];
	}
}

for (var key in mod) {
	exports[key] = mod[key];
}

Object.defineProperty(exports, '__esModule', { value: true });