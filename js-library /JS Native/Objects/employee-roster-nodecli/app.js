var inquirer =  require("inquirer")

class Application{
    constructor(){
        
    }

    prompt(){
        inquirer.prompt([{
            name:"manager",
            message:"What is the name of the manager?"
        }]).then((answers)=>{
            console.log(answers)
        })
    }
}

var app = new Application()
var word = {content:"Ayyee im a word"}
var hey = `${word.content.toUpperCase()}`
console.log(hey)
//app.prompt()