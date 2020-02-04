var Vehicle = require("./vehicle.js.js")

class Car extends Vehicle{
    constructor(id, numberOfWheels, sound,color,passengers){
        super(id,numberOfWheels,sound)
        this.color = color
        this.passengers = passengers
    }

    checkPassengers(){
        if(passengers>4){
            console.log("Too many passengers")
        }
    }

    useHorn(){
        console.log(this.sound)
    }
}

var mercedes = new Car("1",4,"Brripp","pink",5)
mercedes.useHorn()