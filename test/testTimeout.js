const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const timeout = require('../src/timeout');

describe('timeout', () => {
  let clock = null;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  describe('.set()', () => {
    describe('when called with a callback and a delay', () => {
      it('should call the callback after the delay', () => {
        const callback = sinon.spy();

        timeout.set(callback, 100);

        clock.tick(100);

        expect(callback).to.have.been.called;
      });
    });
  });
});
