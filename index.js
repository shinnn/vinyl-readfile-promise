/*!
 * vinyl-readfile-promise | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/vinyl-readfile-promise
*/
'use strict';

var wrapPromise = require('wrap-promise');
var vinylFile = require('vinyl-file');

module.exports = function vinylReadFilePromise(filePath, options) {
  return wrapPromise(function(resolve, reject) {
    vinylFile.read(filePath, options, function(err, file) {
      if (err) {
        reject(err);
        return;
      }
      resolve(file);
    });
  });
};
