//Banking System

// 1. Saving Account - Deposit, withdraw, Balance
// 2. Current Account - Deposit, withdraw, Balance
// 3. DMAT Account - Deposit, withdraw, Balance
// 4. Fixed Account - Deposit, withdraw, Balance
// 5. RD Account - Deposit, withdraw, Balance
// 6. Loan Account - Deposit, withdraw, Balance

abstract class BankAccount {
    welcomeMessage():void{
        console.log('Welcome to My Bank');
    }
    abstract deposit();
    abstract withdrawal();
    abstract balance();
}


class SavingAccount extends BankAccount{
    deposit(){
        console.log('Deposit in Saving Account')
    }
    withdrawal(){
        console.log('Withdrawl in saving Account')
    }
    balance(){
        console.log("Balance in Saving Account")
    }
}
class CurrentAccount extends BankAccount{
    deposit(){
        console.log('Deposit in Current Account')
    }
    withdrawal(){
        console.log('Withdrawl in Current Account')
    }
    balance(){
        console.log("Balance in Current Account")
    }
}

var savingAccount = new SavingAccount();
savingAccount.welcomeMessage();
savingAccount.deposit();
savingAccount.withdrawal();
savingAccount.balance();
console.log("**********************************")
var currentAccount = new CurrentAccount();
currentAccount.welcomeMessage();
currentAccount.deposit();
currentAccount.withdrawal();
currentAccount.balance();


/**
 * we will create saving account and current account from an abstract class BankAccount.
 * we cannot withdraw more than a limit per day (20000)
 * No limit to withdraw from current account for current account
 */