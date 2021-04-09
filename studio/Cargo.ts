import {Payload} from './Payload';

export class Cargo implements Payload{
    massKg: number;
    material: string;

    constructor(n: number, s: string){
        this.massKg = n;
        this.material = s;
    }
 }