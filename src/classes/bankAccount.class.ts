import { KeyInterface } from "../interfaces/key.interface";

class BankAccount {
  balance: number;
  key: KeyInterface;

  constructor(balance: number, key: KeyInterface) {
    this.balance = balance;
    this.key = key;
  }

  deposit(despositAmount: number): number {
    return this.balance + despositAmount;
  }

  getBalance(): number {
    return this.balance;
  }
  getKey(): KeyInterface {
    return this.key;
  }
}
