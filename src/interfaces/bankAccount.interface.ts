import { KeyInterface } from "./key.interface";

export interface bankAccountInterface {
    balance: number,
    key: KeyInterface,
    
    deposit: (despositAmount: number) => number,
    getBalance: () => number,
    getKey: () => KeyInterface
}