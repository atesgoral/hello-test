const chai = require('chai');
const expect = chai.expect;

const timeout = require('../src/timeout');

describe('timeout', () => {
  describe('.set()', () => {
    describe('when called with a callback and a delay', () => {
      it('should call the callback after the delay', (done) => {
        const start = Date.now();

        timeout.set(() => {
          const elapsed = Date.now() - start;
          expect(elapsed).to.equal(100);
          done();
        }, 100);
      });
    });
  });
});
