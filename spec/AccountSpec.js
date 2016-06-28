describe('Account', function() {
  var account;
  var transaction;

  beforeEach(function() {
    transaction = jasmine.createSpy('Transaction');
    account = new Account(transaction);
  });

  it('starts with an initial balance of 0', function() {
    expect(account.getCurrentBalance()).toEqual(0);
  });

  it('starts with an empty history of transactions', function(){
    expect(account.getTransactionHistory()).toEqual([]);
  });

  describe('#transact', function(){

    beforeEach(function() {
      account.transact(1000);
    });

    it('deposits money to the balance', function(){
      account.transact(50);
      expect(account.getCurrentBalance()).toEqual(1050);
    });

    it('withdraws money from the balance', function(){
      account.transact(-50);
      expect(account.getCurrentBalance()).toEqual(950);
    });

    it('records the transaction', function(){
      expect(account.getTransactionHistory().length).toEqual(1);
    });

  });

});
