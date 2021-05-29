import {KeyInterface} from '../interfaces/key.interface'

export class Key implements KeyInterface{
    
    keyNumber: number

    constructor(keyNumber:number){
        this.keyNumber = keyNumber
    }

    equals(sample: number): boolean {
        if(sample === this.keyNumber){
            return true
        } else {
            return false
        }
    }

    getNumber(): number {
        return this.keyNumber;
    }
}