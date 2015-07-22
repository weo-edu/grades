var Tag = require('@weo-edu/schema-tag')
var validator = require('@weo-edu/validate')
var assert = require('assert')

var validateTag = validator(Tag)

var tags = require('../')


describe('grades', function() {
  it('should all be valid', function() {
    tags.forEach(function(tag) {
      var validation = validateTag(tag)
      assert(validation.valid)
    })
  })
})
