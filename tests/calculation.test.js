var describe = require('mocha').describe
var it = require('mocha').it
var sumAll = require('../calculation')
var expect = require('chai').expect

describe('calculation', () => {
    describe('sumAll', () => {
        it('return the sum of all the numvers in the array', () => {
            //set up our test data
            var testData = [42, 76, 100]

            //call the function from our outside file
            var total = sumAll(testData)

            //assert what should be true
            expect(total).to.equal(218)
        })
    })