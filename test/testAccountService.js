const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

const AccountService = require('../src/accountService');

describe('AccountService', () => {
  let db = null;
  let accountService = null;

  beforeEach(() => {
    db = {
      querySync: sinon.stub()
    };
    accountService = new AccountService(db);
  });

  describe('.findById()', () => {
    describe('when called for an existing account', () => {
      it('should return the account', () => {
        db.querySync.withArgs('account', { id: 1 }).returns([{
          id: 1,
          name: 'John Doe'
        }]);

        const callback = sinon.spy();

        accountService.findById(1, callback);

        expect(callback).to.have.been.calledWith({
          id: 1,
          name: 'John Doe'
        });
      });
    });
  });
});
