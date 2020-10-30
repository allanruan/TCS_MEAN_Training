abstract class BankAccount{
    welcomeMessage(): void{
        console.log('Welcome to my Bank')
    }

    abstract deposit();
    abstract withdrawal();
    abstract balance();

}

/**
 * By Default, Methods declared inside interface are abstract.
 * Interface can not have any non-abstract method.
 */
interface IMyBank{
    openBankAccount():void;
    closeBankAccount():void;
}

interface IBankAccount extends IMyBank{
    deposit(): void;
    withdraw(): void;
    balance(): void;

}

class SavingAccount implements IBankAccount{
    openBankAccount(): void {
        console.log('Open Saving Account..')
    }
    closeBankAccount(): void {
        console.log('Close Saving Account..')

    }
    deposit(): void {
        console.log('Deposit in to Saving Account..')
    }
    withdraw(): void {
        console.log('Withdrawal from Saving Account..')
    }
    balance(): void {
        console.log('Balance in Saving Account..')
    }
    
}

class CurrentAccount implements IBankAccount{
    openBankAccount(): void {
        console.log('Open Current Account..')
    }
    closeBankAccount(): void {
        console.log('Close Current Account..')

    }
    deposit(): void {
        console.log('Deposit into Current Account..')
    }
    withdraw(): void {
        console.log('Withdrawal From Current Account..')
    }
    balance(): void {
        console.log('Balance in Current Account..')
    }

}



var savingAccount = new SavingAccount();
savingAccount.openBankAccount();
savingAccount.closeBankAccount();
savingAccount.balance();
savingAccount.deposit();
savingAccount.withdraw();

var currentAccount = new CurrentAccount();
currentAccount.openBankAccount();
currentAccount.closeBankAccount();
currentAccount.balance();
currentAccount.deposit();
currentAccount.withdraw();