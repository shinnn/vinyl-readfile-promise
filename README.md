# vinyl-readfile-promise

[![NPM version](https://img.shields.io/npm/v/vinyl-readfile-promise.svg)](https://www.npmjs.com/package/vinyl-readfile-promise)
[![Build Status](https://img.shields.io/travis/shinnn/vinyl-readfile-promise.svg)](https://travis-ci.org/shinnn/vinyl-readfile-promise)
[![Build status](https://ci.appveyor.com/api/projects/status/exsbqpeixknb679w?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/vinyl-readfile-promise)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/vinyl-readfile-promise.svg)](https://coveralls.io/r/shinnn/vinyl-readfile-promise)
[![Dependency Status](https://img.shields.io/david/shinnn/vinyl-readfile-promise.svg?label=deps)](https://david-dm.org/shinnn/vinyl-readfile-promise)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/vinyl-readfile-promise.svg?label=devDeps)](https://david-dm.org/shinnn/vinyl-readfile-promise#info=devDependencies)

[Promises/A+][Promise] version of [vinyl-file](https://github.com/sindresorhus/vinyl-file):

> Create a [vinyl file](https://github.com/wearefractal/vinyl) from an actual file

```javascript
var vinylReadFile = require('vinyl-readfile-promise');

vinylReadFile('index.js')
.then(function(file) {
  file.path; //=> /root/dir/index.js
  file.cwd; //=> /root/dir
})
.catch(), function(err) {
  throw err;
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install vinyl-readfile-promise
```

## API

```javascript
var vinylReadFile = require('vinyl-readfile-promise');
```

### vinylReadFile(*filePath* [, *options*])

*filePath*: `String`  
*options*: `Object` (directly passed to [vinyl-file options](https://github.com/sindresorhus/vinyl-file#options))  
Return: `Object` ([Promise])

When it finish reading a file, it will be [*fulfilled*](http://promisesaplus.com/#point-26) with a [vinyl file object](https://github.com/wearefractal/vinyl#file) as an argument.

When it fails to read a file, it will be [*rejected*](http://promisesaplus.com/#point-30) with an error as an argument.

```javascript
var vinylReadFile = require('vinyl-readfile-promise');

function onFulFilled(file) {
  file.isNull(); //=> false
  file.isBuffer(); //=> false
  file.isBuffer(); //=> true
}

function onRejected(err) {
  throw err;
}

vinylReadFile('path/to/file', {buffer: false}).then(onFulFilled, onRejected);
```

## License

Copyright (c) 2014 - 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[Promise]: https://promisesaplus.com/
