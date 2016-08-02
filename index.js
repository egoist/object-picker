'use strict'

module.exports = function objectPicker(obj, selections) {
  if (typeof obj !== 'object') {
    throw new TypeError('Expected an object')
  }

  var res = {}
  selections = selections || []
  selections.forEach(function (selection) {
    if (selection && {}.hasOwnProperty.call(obj, selection)) {
      res[selection] = obj[selection]
    }
  })

  return res
}
