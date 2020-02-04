var Vehicle = require("./vehicle.js.js")

class Boat extends Vehicle{
    constructor(id, numberOfWheels, sound,crew){
        super(id, numberOfWheels, sound,crew)
        this.crew = crew //We don't need to do this.id = id because super calls the parent constructor function for us, and that function already does this.
    }
    crewSoundOff(){
        this.crew.forEach((member)=>{
            console.log(member)
        })
    }
    useHorn(){
        console.log(this.sound)
    }
}

var theEmilia = new Boat("4",0,"bruuuump",["Sabrina","Yannick","Pauline"])
theEmilia.crewSoundOff()
theEmilia.useHorn()