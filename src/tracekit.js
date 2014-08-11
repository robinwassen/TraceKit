/*
 TraceKit - Cross brower stack traces - github.com/occ/TraceKit
 MIT license
*/

var TraceKit = {};

// Export to global object
window.TraceKit = TraceKit;

// global reference to slice
var _slice = [].slice;
var UNKNOWN_FUNCTION = '?';