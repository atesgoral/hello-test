const chai = require('chai');
const expect = chai.expect;

const arithmetic = require('../src/arithmetic');

describe('arithmetic', () => {
  describe('.sum()', () => {
    describe('when called with two numbers', () => {
      it('should return their sum', () => {
        expect(arithmetic.sum(2, 2)).to.equal(4);
      });
    });
  });
});
