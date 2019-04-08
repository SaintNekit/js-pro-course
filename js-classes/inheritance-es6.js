class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    getFullName(name, model) {
        alert("Your car is " + this.name + ': ' + this.model);
    }

    getAge(year) {
        let age = (2019 - this.year);
        alert('Your car is : ' + age + ' years old');
    }

    changeColor(newColor) {
        if (newColor === this.color) {
            alert('WTF Man, your car is already ' + newColor);
        }
        else {
            alert('Now your car has ' + newColor + ' color');
        }
    }

    calculateWay(kilometers, fuel) {
        if (fuel < 10) {
            alert('You need to find gasoline!')
        }
            let time = Math.round(kilometers / this.maxSpeed);
            alert('Your way will take ' + time + 'hours');
            let requestedFuel = this.fuelConsumption * time;
            if (requestedFuel > fuel) {
                let refuelTimes = Math.floor((requestedFuel - fuel) / this.fuelCapacity) + 1;
                alert('You need to visit gas station ' + refuelTimes + ' times in your trip');
        }
    }
}

class BMW extends Car {
    constructor(model, version, year, color, wheelDisc, maxSpeed) {
        this.model = model;
        this.version = version;
        this.year = year;
        this.color = color;
        this.wheelDisc = wheelDisc;
        this.maxSpeed = maxSpeed;
    }

    getAge(year) {
        super.getAge();
    }

    changeColor(newColor) {
        super.changeColor();
    }

    getModel(model, version) {
        alert('You have BMW ' + this.model + this.version);
    }
}

class Lexus extends Car {
    constructor(model, year, color, autopilot, headlights, maxSpeed) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.autopilot = autopilot;
        this.headlights = headlights;
        this.maxSpeed = maxSpeed;
    }
    getAge(year) {
        super.getAge();
    }

    changeColor(newColor) {
        super.changeColor();
    }

    pilot(autopilot) {
        if(this.autopilot == true || this.autopilot.length >= 1) {
            alert('You have autopilot system!');
        }
        else {
            alert('You do not have autopilot system');
        }
    }
}

class Zaporozhets extends Car {
    constructor(wheels, steeringWheel, windows, year, color, maxSpeed) {
        this.wheels = wheels;
        this.steeringWheel = steeringWheel;
        this.windows = windows;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    getAge(year) {
        super.getAge();
    }

    changeColor(newColor) {
        super.changeColor();
    }

    getWheelsInfo(steeringWheel) {
        if (this.steeringWheel == true || this.steeringWheel.length >= 1) {
            alert('Congratulations, you can drive your car!')
        }
        else {
            alert("Unfortunately we dont know how you will drive your car...")
        }
    }

    getWindow(windows) {
        if (this.windows >= 1) {
            alert('Your car has ' + this.windows + ' window');
        }
        else {
            alert('We recomended to take glasses with you - very strong wind outside');
        }
    }
}

const car = new Car();
const bmw = new BMW();
const lexus = new Lexus();
const notCar = new Zaporozhets();