import { Database } from "./classes/database.class";
import { Key } from "./classes/key.class";
import { BankAccount } from "./classes/bankAccount.class";

const dataBaseArray:[] = []

let db = new Database(dataBaseArray);

let firstKey = new Key(12345);
let firstAccount = new BankAccount(5000, firstKey);
let firstResult = db.insert(firstAccount);

let secondKey = new Key(5678);
let secondAccount = new BankAccount(10000, secondKey);
let secondResult = db.insert(secondAccount);

let lookupAccount = db.find(secondKey);
console.log(lookupAccount.getBalance());