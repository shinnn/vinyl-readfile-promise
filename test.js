'use strict';

var path = require('path');

var test = require('tape');
var vinylReadFilePromise = require('./');

test('vinylReadFilePromise()', function(t) {
  t.plan(9);

  t.equal(vinylReadFilePromise.name, 'vinylReadFilePromise', 'should have a function name.');

  vinylReadFilePromise('.gitattributes').then(function(file) {
    t.equal(
      file.path,
      path.resolve('.gitattributes'),
      'should read a file from a path.'
    );
    t.ok(file.isBuffer(), 'should create a vinl object.');
    t.equal(
      file.contents.toString(),
      '* text=auto\n',
      'should assign file contents to .contents property.'
    );
  }, t.fail);

  vinylReadFilePromise('../.gitignore', {
    base: '../..',
    cwd: 'node_modules',
    buffer: false
  }).then(function(file) {
    t.equal(
      file.path,
      path.resolve('.gitignore'),
      'should support `cwd` option.'
    );
    t.equal(
      file.relative,
      path.relative('../../', '.gitignore'),
      'should support `base` option.'
    );
    t.ok(file.isStream(), 'should support `buffer` option.');
  }, t.fail);

  vinylReadFilePromise('node_modules', null).catch(function(err) {
    t.equal(err.code, 'EISDIR', 'should be rejected when it fails to read a file.');
  });

  t.throws(
    vinylReadFilePromise.bind(null, 1),
    /TypeError.*string/,
    'should throw a type error when the path is not a string.'
  );
});
