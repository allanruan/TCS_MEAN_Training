//Banking System
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Saving Account - Deposit, withdraw, Balance
// 2. Current Account - Deposit, withdraw, Balance
// 3. DMAT Account - Deposit, withdraw, Balance
// 4. Fixed Account - Deposit, withdraw, Balance
// 5. RD Account - Deposit, withdraw, Balance
// 6. Loan Account - Deposit, withdraw, Balance
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.welcomeMessage = function () {
        console.log('Welcome to My Bank');
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingAccount.prototype.deposit = function () {
        console.log('Deposit in Saving Account');
    };
    SavingAccount.prototype.withdrawal = function () {
        console.log('Withdrawl in saving Account');
    };
    SavingAccount.prototype.balance = function () {
        console.log("Balance in Saving Account");
    };
    return SavingAccount;
}(BankAccount));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.deposit = function () {
        console.log('Deposit in Current Account');
    };
    CurrentAccount.prototype.withdrawal = function () {
        console.log('Withdrawl in Current Account');
    };
    CurrentAccount.prototype.balance = function () {
        console.log("Balance in Current Account");
    };
    return CurrentAccount;
}(BankAccount));
var savingAccount = new SavingAccount();
savingAccount.welcomeMessage();
savingAccount.deposit();
savingAccount.withdrawal();
savingAccount.balance();
var currentAccount = new CurrentAccount();
currentAccount.welcomeMessage();
currentAccount.deposit();
currentAccount.withdrawal();
currentAccount.balance();
