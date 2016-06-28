function Account () {
  this._balance = 0;
  this._transaction = Transaction;
  this._transactionHistory = [];
}

Account.prototype.getCurrentBalance = function(){
  return this._balance;
};

Account.prototype.getTransactionHistory = function(){
  return this._transactionHistory;
};

Account.prototype.transact = function(amount){
  this._balance += amount;
  var transaction = new this._transaction(amount, this._balance);
  this._recordTransaction(transaction);
};


Account.prototype._recordTransaction = function(transaction){
  this._transactionHistory.push(transaction);
};
