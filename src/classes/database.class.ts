import { bankAccountInterface } from "./../interfaces/bankAccount.interface";
import { KeyInterface } from "../interfaces/key.interface";

// type findReturn = boolean | bankAccountInterface

export class Database {
  bankAccountsArray: bankAccountInterface[] = [];

  constructor(bankAccoutnsArray: []) {
    this.bankAccountsArray = bankAccoutnsArray;
  }

  insert(account: bankAccountInterface): boolean {
    if (this.bankAccountsArray.indexOf(account) === -1) {
      this.bankAccountsArray.push(account);
      return true;
    } else {
      return false;
    }
  }

  find(key: KeyInterface): bankAccountInterface {
    for (let account of this.bankAccountsArray) {
        if (key === account.key){
            return account;
        }
    }
    throw Error ("No account found with the key")  
  }

  delete(key: KeyInterface): boolean {
    for (let account of this.bankAccountsArray) {
      if (key === account.key) {
        let deleteAccountIndex: number = this.bankAccountsArray.indexOf(
          account
        );
        this.bankAccountsArray.splice(deleteAccountIndex, 1);

        return true;
      }
    }
    return false;
  }
}
