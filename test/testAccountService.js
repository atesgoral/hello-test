const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const sinonAsPromised = require('sinon-as-promised');
const expect = chai.expect;

chai.use(sinonChai);

const AccountService = require('../src/accountService');

describe('AccountService', () => {
  let db = null;
  let accountService = null;

  beforeEach(() => {
    db = {
      query: sinon.stub()
    };
    accountService = new AccountService(db);
  });

  describe('.findById()', () => {
    describe('when called for an existing account', () => {
      it('should return the account', () => {
        db.query.withArgs('account', { id: 1 }).resolves([{
          id: 1,
          name: 'John Doe'
        }]);

        return accountService.findById(1)
          .then((account) => {
            expect(account).to.deep.equal({
              id: 1,
              name: 'John Doe'
            });
          });
      });
    });
  });
});
