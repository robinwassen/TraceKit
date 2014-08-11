/**
 * _has, a better form of hasOwnProperty
 * Example: _has(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */
function _has(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}

/**
 * Helper to check if object is undefined
 * Example: if (_isUndefined(someObject)) { }
 *
 * @param {Object} object to check if undefined
 */

function _isUndefined(what) {
    return typeof what === 'undefined';
}