function AccountService(db) {
  this.db = db;
}

AccountService.prototype.findById = function (accountId, callback) {
  const results = this.db.querySync('account', { id: accountId });
  callback(results[0]);
};

module.exports = AccountService;
