"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(s, n) {
        this.name = s;
        this.totalCapacityKg = n;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var i = 0;
        var mass = 0;
        while (i < items.length) {
            mass = mass + items[i].massKg;
            i++;
        }
        return mass;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        var mass = item.massKg + this.currentMassKg();
        if (mass <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) == true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) == true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
