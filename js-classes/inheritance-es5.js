function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function(name, model) {
    alert("Your car is " + this.name + ': ' + this.model);
}

Car.prototype.getAge = function(year) {
    let age = (2019 - this.year);
    alert('Your car is : ' + age + ' years old');
}

Car.prototype.changeColor = function(newColor) {
    if (newColor === this.color) {
        alert('WTF Man, your car is already ' + newColor);
    }
    else {
        alert('Now your car has ' + newColor + ' color');
        return newColor;
    }
}

Car.prototype.calculateWay = function(kilometers, fuel) {
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

function BMW(model, version, year, color, wheelDisc, maxSpeed) {
    Car.apply(this, arguments);
    this.model = model;
    this.version = version;
    this.wheelDisc = wheelDisc;
}

BMW.prototype = Object.create(Car.prototype);

BMW.prototype.getModel = function(model, version) {
    alert('You have BMW ' + this.model + this.version);
}

function Lexus(model, year, color, autopilot, headlights, maxSpeed) {
    Car.apply(this, arguments);
    this.autopilot = autopilot;
    this.headlights = headlights;
}

Lexus.prototype = Object.create(Car.prototype);

Lexus.prototype.pilot = function(autopilot) {
    if(this.autopilot == true || this.autopilot.length >= 1) {
        alert('You have autopilot system!');
    }
    else {
        alert('You do not have autopilot system');
    }
}

function Zaporozhets(wheels, steeringWheel, windows, year, color, maxSpeed) {
    Car.apply(this, arguments);
    this.wheels = wheels;
    this.steeringWheel = steeringWheel;
    this.windows = windows;
}

Zaporozhets.prototype = Object.create(Car.prototype);

Zaporozhets.prototype.getWheelsInfo = function(wheels) {
    if (this.wheels >= 1 && this.wheels < 6) {
        alert("Congratulations, your car has " + this.wheels + " wheels!")
    }
    if (this.wheels > 5) {
        alert("Your car looks like tank")
    }
}

Zaporozhets.prototype.getSteeringWheel = function(steeringWheel) {
    if (this.steeringWheel == true || this.steeringWheel.length >= 1) {
        alert('Congratulations, you can drive your car!')
    }
    else {
        alert("Unfortunately we dont know how you will drive your car...")
    }
}

Zaporozhets.prototype.getWindow = function(windows) {
    if (this.windows >= 1) {
        alert('Your car has ' + this.windows + ' window');
    }
    else {
        alert('We recomended to take glasses with you - very strong wind outside');
    }
}

var car = new Car();
var bmw = new BMW();
var lexus = new Lexus();
var notCar = new Zaporozhets();