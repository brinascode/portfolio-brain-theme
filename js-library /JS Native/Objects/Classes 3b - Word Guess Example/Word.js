var Letter = require("./Letter.js")
class Word{
    constructor(word){
        this.wordString = word
        this.letters = word.split("")
        this.letters = this.letters.map((item)=>{
            return new Letter(item)
        })
    }

    guessLetter(guess){
        //We only try to match with the letters that haven't been guessed yet.
        //Or else by running the letter.guess we cancel the previous successful guesses because this is a new letter
        this.letters.forEach((letter)=>{
            if(!letter.guessed){
                letter.guess(guess)
            }  
        })
    }

    display(){
        var displayString = ""
        this.letters.forEach((letter)=>{
            displayString += letter.display()
        })
        console.log(displayString)
    }
    
}

//Testing
// var myWord = new Word("Sabrina")
// myWord.guessLetter("s")
// myWord.guessLetter("a")
// myWord.guessLetter("b")
// myWord.guessLetter("r")
// myWord.guessLetter("i")
// myWord.guessLetter("n")
// myWord.guessLetter("a")
// myWord.display()
// console.log(myWord.letters)