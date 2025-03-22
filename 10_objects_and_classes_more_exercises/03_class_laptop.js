class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1;
    }
    turnOff() {
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
}

// let info = { producer: "Dell", age: 2, brand: "XPS" };
// let laptop = new Laptop(info, 10);
// laptop.turnOn();
// console.log(laptop.showInfo()); // {"producer":"Dell","age":2,"brand":"XPS"}
// laptop.turnOff();
// console.log(laptop.quality); // 9 (after turning off)
// laptop.turnOn();
// console.log(laptop.isOn); // true
// console.log(laptop.price); // 799.5 (after quality decreased)

// info = { producer: "Lenovo", age: 1, brand: "Legion" };
// laptop = new Laptop(info, 10);
// laptop.turnOn();
// console.log(laptop.showInfo());
// laptop.turnOff();
// laptop.turnOn();
// laptop.turnOff();
// console.log(laptop.isOn);
