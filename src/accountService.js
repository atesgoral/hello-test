function AccountService(db) {
  this.db = db;
}

AccountService.prototype.findById = function (accountId, callback) {
  if (accountId === -1) {
    return Promise.resolve({
      id: -1,
      name: 'Negative One'
    });
  }
  return this.db
    .query('account', { id: accountId })
    .then((results) => results[0]);
};

module.exports = AccountService;
