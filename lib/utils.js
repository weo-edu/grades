/**
 * Libs
 */

var grades = require('./tags')

/**
 * Vars
 */

// canonical grade format
var gradeReg = /grade (\w+)/

// alias exports
var utils = exports

utils.synonyms = function (name) {
  if (!utils.isGrade(name)) {
    throw new Error(name + ' is not a canonical grade')
  }

  var i = 0
  while (grades[i].displayName !== name && i < grades.length) {
    i++
  }

  return grades[i].tags
}

utils.isGrade = function (name) {
  var match = gradeReg.exec(name)
  var grade = match && match[1]
  return !!grade && (grade === 'k' || parseInt(grade, 10) <= 12)
}
