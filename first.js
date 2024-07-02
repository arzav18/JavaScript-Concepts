/* Class is a program code for template for creating objects
These objects have some state and some behavior inside it. */

class ToyotaCar {
    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");