/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function processExitCodeAtLeast(n) {
  n = (+n || 0);
  var old = (+process.exitCode || 0);
  if (old > n) { return old; }
  process.exitCode = n;
  return n;
}

module.exports = processExitCodeAtLeast;
