var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.welcomeMessage = function () {
        console.log('Welcome to my Bank');
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function () {
    function SavingAccount() {
    }
    SavingAccount.prototype.openBankAccount = function () {
        console.log('Open Saving Account..');
    };
    SavingAccount.prototype.closeBankAccount = function () {
        console.log('Close Saving Account..');
    };
    SavingAccount.prototype.deposit = function () {
        console.log('Deposit in to Saving Account..');
    };
    SavingAccount.prototype.withdraw = function () {
        console.log('Withdrawal from Saving Account..');
    };
    SavingAccount.prototype.balance = function () {
        console.log('Balance in Saving Account..');
    };
    return SavingAccount;
}());
var CurrentAccount = /** @class */ (function () {
    function CurrentAccount() {
    }
    CurrentAccount.prototype.openBankAccount = function () {
        console.log('Open Current Account..');
    };
    CurrentAccount.prototype.closeBankAccount = function () {
        console.log('Close Current Account..');
    };
    CurrentAccount.prototype.deposit = function () {
        console.log('Deposit into Current Account..');
    };
    CurrentAccount.prototype.withdraw = function () {
        console.log('Withdrawal From Current Account..');
    };
    CurrentAccount.prototype.balance = function () {
        console.log('Balance in Current Account..');
    };
    return CurrentAccount;
}());
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
