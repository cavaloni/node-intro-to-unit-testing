const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
  it('should return fizz-buzz for multiples of 15', function () {

    const normalCases = [{
      num: 15,
      expected: 'fizz-buzz'
    }, {
      num: 45,
      expected: 'fizz-buzz'
    }, {
      num: 30,
      expected: 'fizz-buzz'
    }];

    normalCases.forEach(function (input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should return fizz for multiples of 3', function () {
    const normalCases = [{
      num: 3,
      expected: 'fizz'
    }, {
      num: 9,
      expected: 'fizz'
    }, {
      num: 12,
      expected: 'fizz'
    }];

    normalCases.forEach(function (input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    })
    });

    it('should throw an error if the input is not a number', function () {
      const badInputs = ['butt', 'face', 'word'];
      badInputs.forEach(function (input) {
        (function () {
          fizzBuzzer(input)
        }).should.throw(Error);
      });
    });
  });
