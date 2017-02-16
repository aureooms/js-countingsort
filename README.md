[js-countingsort](http://aureooms.github.io/js-countingsort)
==

Countingsort code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

[![NPM license](http://img.shields.io/npm/l/@aureooms/js-countingsort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-countingsort/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/@aureooms/js-countingsort.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-countingsort)
[![Bower version](http://img.shields.io/bower/v/@aureooms/js-countingsort.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-countingsort)
[![Build Status](http://img.shields.io/travis/aureooms/js-countingsort.svg?style=flat)](https://travis-ci.org/aureooms/js-countingsort)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-countingsort.svg?style=flat)](https://coveralls.io/r/aureooms/js-countingsort)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-countingsort.svg?style=flat)](https://david-dm.org/aureooms/js-countingsort#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-countingsort.svg?style=flat)](https://david-dm.org/aureooms/js-countingsort#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-countingsort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-countingsort)
[![NPM downloads per month](http://img.shields.io/npm/dm/@aureooms/js-countingsort.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-countingsort)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-countingsort.svg?style=flat)](https://github.com/aureooms/js-countingsort/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-countingsort.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-countingsort)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-countingsort
# or
jspm install npm:@aureooms/js-countingsort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-countingsort
```

### bower
```terminal
bower install @aureooms/js-countingsort
```

### ender
```terminal
ender add @aureooms/js-countingsort
```

### jam
```terminal
jam install @aureooms/js-countingsort
```

### spm
```terminal
spm install @aureooms/js-countingsort --save
```

### npm
```terminal
npm install @aureooms/js-countingsort --save
```

## Require
### jspm
```js
let countingsort = require( "github:aureooms/js-countingsort" ) ;
// or
import countingsort from '@aureooms/js-countingsort' ;
```
### duo
```js
let countingsort = require( "aureooms/js-countingsort" ) ;
```

### component, ender, spm, npm
```js
let countingsort = require( "@aureooms/js-countingsort" ) ;
```

### bower
The script tag exposes the global variable `countingsort`.
```html
<script src="bower_components/@aureooms/js-countingsort/js/dist/countingsort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-countingsort" ] , function ( countingsort ) { ... } ) ;
```
