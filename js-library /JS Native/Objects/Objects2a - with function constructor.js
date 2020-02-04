//Constructors allow us to make as many objects as we need from a single blueprint.
// Prevents us from writing the same code over and over again.

//This is our constructor function. Will serve as a blueprint to create new animals.
function Animal(raining, noise){
    this.raining = raining
    this.noise = raining
    this.makeNoise = function(){
        if(this.raining){
            console.log(noise)
        }
    } 
}

// Creating new animal objects. Instantiating the Animal Constructor function into actual objects
var dog = new Animal(true,"Woof!")
var cat = new Animal(true,"Meow!")

//Calling the makeNoise functions for dogs and cats
dog.makeNoise() 
cat.makeNoise()

//We can change values of our objects
dog.raining = false
dog.makeNoise() // since it's no longer raining, the dog will not make noise anymore :)