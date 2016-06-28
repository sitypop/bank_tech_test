describe('Transaction', function() {
  var transaction;
  var amount;
  var balance;
  var date;

  beforeEach(function() {
    amount = 30;
    balance = 100;
    date = new Date();
    transaction = new Transaction(amount, balance);
  });

  it('should initialize with the current date', function () {
    expect(transaction._date).toEqual(date);
  });

  it('has an amount', function () {
    expect(transaction._amount).toEqual(amount);
  });

  it('has a balance', function () {
    expect(transaction._balance).toEqual(balance);
  });


});
