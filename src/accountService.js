function AccountService(db) {
  this.db = db;
}

AccountService.prototype.findById = function (accountId, callback) {
  return this.db
    .query('account', { id: accountId })
    .then((results) => results[0]);
};

module.exports = AccountService;
