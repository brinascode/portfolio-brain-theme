class Character{
    constructor(name,strength,hitPoints){
        if(!name){
            throw new Error("You need to give your character a name!")
        }if(!strength){
            throw new Error("You need to give your character strength")
        }if(!hitPoints){
            throw new Error("You need to give your character hitPoints!")
        }
        this.name = name
        this.strength = strength
        this.hitPoints = hitPoints
    }

    printStats(){
        console.log(`Name: ${this.name}`)
        console.log(`Strength: ${this.strength}`)
        console.log(`Hitpoints: ${this.hitPoints}`)
    }

    attack(opponent){
        opponent.hitPoints -= this.strength
        console.log(`${this.name} attacked ${opponent.name}`)
        console.log(`${this.name}' Stats:`)
        this.printStats()
        console.log(`${opponent.name}'s Stats: `)
        opponent.printStats()

    }

    isAlive(){
        if(this.hitPoints > 0){
            return true
        }else{
            console.log(`${this.name} has been defeated!`)
            return false
        }
    }
}

var superWoman = new Character("Superwoman",50,100)
var superGirl = new Character("Supergirl",40,90)

var firstPlayerAttacks = true //toggles between true and false
var gameOver = false
var endGame = function(){
    if(gameOver){
        clearInterval(turnInterval)
    }
}
var turnInterval = setInterval(()=>{
    if(superWoman.isAlive() === false || superGirl.isAlive() === false){
        console.log("Game over!")
        gameOver = true
    }else if(firstPlayerAttacks){
        superWoman.attack(superGirl)
        firstPlayerAttacks = false
    }else if(!firstPlayerAttacks){
        superGirl.attack(superWoman)
        firstPlayerAttacks = true
    }
    endGame()
},2000)

