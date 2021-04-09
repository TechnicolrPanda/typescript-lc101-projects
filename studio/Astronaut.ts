import {Payload} from './Payload';

export class Astronaut implements Payload {
    
    name: string;
    massKg: number;
    
    constructor(n: number, s: string) {
        this.massKg = n;
        this.name = s
    }
 }
