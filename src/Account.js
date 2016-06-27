function Account() {
  this.balance = 0;
}

Account.prototype.getCurrentBalance = function(){
  return this.balance;
}
