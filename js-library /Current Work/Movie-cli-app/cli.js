var TV = require("./tv.js")

//Create a new TV object
var tv = new TV()

//Taking our search terms
var category = process.argv[2]
var searchTerm = process.argv.slice(3).join(" ")

if(!category){
    category = "show"
}
if(!searchTerm){
    searchTerm = "Andy Griffith"
}

if(category === "show"){
    tv.findShow(searchTerm)
}else if(category === "actor"){
    tv.findActor(searchTerm)
}else{
    console.log("You can only search for a show or an actor")
}

