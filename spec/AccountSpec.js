describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it('starts with an initial balance of 0', function() {
    expect(account.getCurrentBalance()).toEqual(0);
  });

});
