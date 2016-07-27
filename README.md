# object-picker [![NPM version](https://img.shields.io/npm/v/object-picker.svg)](https://npmjs.com/package/object-picker) [![NPM downloads](https://img.shields.io/npm/dm/object-picker.svg)](https://npmjs.com/package/object-picker) [![Build Status](https://img.shields.io/circleci/project/egoist/object-picker/master.svg)](https://circleci.com/gh/egoist/object-picker)

> Pick only what you want in an object.

## Install

```bash
$ npm install --save object-picker
```

## Usage

```js
const picker = require('object-picker')

const obj = {
  foo: undefined,
  bar: '',
  baz: 'lol',
  zip: 'leave me alone'
}

picker(obj, 'foo bar barbee')
//=> {foo: undefined, bar: ''}
```

## API

### objectPicker(obj, selections)

#### obj

Type: `Object`

The input object.

#### selections

Type: `String`  
Default: `''`

Split each selection by comma `,` or space ` `.

## License

MIT © [EGOIST](https://github.com/egoist)
