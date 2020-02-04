class Letter{
    constructor(letter){
        this.letter = letter.toUpperCase()
        this.guessed = false
    }   

    display(){
        if (this.guessed){
            return this.letter
        }
        return "_"
    }

    guess(guess){
        if(guess.toUpperCase() === this.letter){
            this.guessed = true
           // console.log("Your guess was correct!")
        }else{
            this.guessed = false
           // console.log("Your guess was wrong!")
        }
    }
}
module.exports = Letter
//Testing
// var myLetter = new Letter("a")
// var myGuess = "b"
// myLetter.guess("b")
// console.log(myLetter.display())
