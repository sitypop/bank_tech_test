# The Bank Tech Test

### Requirements
* Deposits, withdrawal
* Account statement (date, amount, balance)
* Statement printing

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see  


```
DATE || AMOUNT || BALANCE
14/01/2012 || 500.00 || 2500.00
13/01/2012 || 2000.00 || 3000.00
10/01/2012 || 1000.00 || 1000.00
```

### Additional extensions

* Statement filters (just deposits, withdrawals, date ascending, date descending)
* Graphical interface

### User Stories

```
As a customer
So I can save money
I want to be able to make a deposit into my account

As a customer
So I can spend my money
I want to be able to make a withdrawal from my Account

As a customer
So I can keep track of my finances
I want to have an account statement

As a customer
So I can see my finances
I want to be able to print my account summary in a legible format
```

### Instructions

Clone this repo:

`$ git@github.com:sitypop/bank_tech_test.git`

Change into the `bank_tech_test` directory

### Testing

In your terminal, type `$ open SpecRunner.html` under `bank_tech_test`

### Tools
* Javascript
* Jasmine

### Author

Sity Shah 🐧
