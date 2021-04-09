import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import {Payload} from './Payload';

export class Rocket{
 name: string;
 totalCapacityKg : number;
 cargoItems: Cargo[];
 astronauts: Astronaut[]

 constructor(s: string, n: number){
     this.name = s;
     this.totalCapacityKg = n;
     this.cargoItems = [];
     this.astronauts = [];
 }

 sumMass( items: Payload[] ): number{
     let i: number = 0
     let mass: number = 0
     while (i< items.length){
         mass = mass + items[i].massKg
         i++
     }
     return mass
 }

 currentMassKg(): number {
     return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)
 }

 canAdd( item: Payload ): boolean {
     let mass: number = item.massKg + this.currentMassKg()
     if (mass <= this.totalCapacityKg){
         return true
     } else{
         return false
     }
 }

 addCargo(cargo: Cargo): boolean {
     if (this.canAdd(cargo) == true){
         this.cargoItems.push(cargo)
         return true
     } else {
         return false
     }
 }

 addAstronaut (astronaut: Astronaut): boolean{
     if(this.canAdd(astronaut) == true){
         this.astronauts.push(astronaut)
         return true
     } else {
         return false
     }
 }
 }