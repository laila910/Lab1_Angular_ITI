class Account{
    Acc_no:number;
    Balance:number;
    constructor(NewAcc_no:1,NewBalance:5000){
       this.Acc_no=NewAcc_no;
       this.Balance=NewBalance;
    }
    debitAmount(){
      return 'this is Debit Amount Method From Account Class';
    }
    creditAmount(){
        return 'this is credit Amount Method From Account Class';
    }
    getBalance(){
        return this.Balance;
    }
}
interface Acccount{
    Date_Of_Opening:Date;
    addCustomer();
    removeCustomer();
}
class Current_Account extends Account implements Acccount{
    Interest_rate:number;
    Date_Of_Opening:Date;
    constructor(NewAcc_noChild:1,NewBalanceChild:5000){
        super(NewAcc_noChild, NewBalanceChild);
       
    }
    addCustomer(){
        return 'add new customer from Current_Account class';
    }
    removeCustomer() {
        return 'remove customer from Current_Account Class';
    }
}
class Saving_Account extends Account implements Acccount{
    Min_Balance:number;
    Date_Of_Opening:Date;
    constructor(NewAcc_noChild:1,NewBalanceChild:5000){
        super(NewAcc_noChild, NewBalanceChild);
    }
    addCustomer(){
        return 'add new customer from Saving_Account class';
    }
    removeCustomer() {
        return 'remove customer from Saving_Account Class';
    }
}