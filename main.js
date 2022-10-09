class Account {
    constructor(NewAcc_no, NewBalance) {
        this.Acc_no = NewAcc_no;
        this.Balance = NewBalance;
    }
    debitAmount() {
        return 'this is Debit Amount Method From Account Class';
    }
    creditAmount() {
        return 'this is credit Amount Method From Account Class';
    }
    getBalance() {
        return this.Balance;
    }
}
class Current_Account extends Account {
    constructor(NewAcc_noChild, NewBalanceChild) {
        super(NewAcc_noChild, NewBalanceChild);
    }
    addCustomer() {
        return 'add new customer from Current_Account class';
    }
    removeCustomer() {
        return 'remove customer from Current_Account Class';
    }
}
class Saving_Account extends Account {
    constructor(NewAcc_noChild, NewBalanceChild) {
        super(NewAcc_noChild, NewBalanceChild);
    }
    addCustomer() {
        return 'add new customer from Saving_Account class';
    }
    removeCustomer() {
        return 'remove customer from Saving_Account Class';
    }
}
