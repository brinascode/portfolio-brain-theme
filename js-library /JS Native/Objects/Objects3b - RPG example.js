function Character(name,profession,age,strength,hitPoints){
    this.name = name
    this.profession = profession
    this.age = age
    this.strength = strength
    this.hitPoints = hitPoints
    this.printStats = function(){
        console.log("Name: " + this.name)
        console.log("Profession: " + this.profession)
        console.log("Age: " + this.age)
        console.log("Strength: " + this.strength)
        console.log("Hit Points: "+ this.hitPoints)
    }
}

Character.prototype.isAlive = function(){
    console.log(this.hitPoints)
    if(this.hitPoints > 0 ){
        return "Is alive :)"
    }else{
        return "Is dead :("
    }
}

Character.prototype.attack = function(character){
    character.hitPoints -= this.strength
}

Character.prototype.levelUp = function(){
    this.age += 1
    this.strength += 5
    this.hitPoints += 25
}

var Sophie = new Character("Sophie","Ballerina",25,100,60)
var Luna = new Character("Luna","Singer",20,80,50)
Luna.attack(Sophie)
Luna.printStats()
Sophie.printStats()
console.log(Sophie.isAlive())