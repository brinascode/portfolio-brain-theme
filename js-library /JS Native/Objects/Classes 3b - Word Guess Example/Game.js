var fs = require("fs")
var inquirer = require("inquirer")
var Word = require("./Word")
class Game{
    constructor(){
        this.wordList = fs.readFile("wordList.txt","utf-8",(err,data)=>{
           if(err) throw err
           var wordsArray = data.split(" ")
           setInterval(()=>{
            var randomNum = Math.floor(Math.random()*10)
            if(randomNum > wordsArray.length -1){
                
            }
            
           },1000)
           
        })
        
    }

    prompt(){
        //We prompt for every letter in the array. Obviously,
    }
}

var newGame = new Game()