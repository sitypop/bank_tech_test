$(document).ready(function () {
  var account = new Account();
  updateBalance();

  $('#transact').click(function () {
    var amount = $('#amount').val();
    account.transact(parseInt(amount));
    updateBalance();
  });

  function updateBalance() {
    $('#balance').text(account._balance);
  }
});
