var fs = require("fs")
file = "write_to_me.txt"

function writeFile(file){
    fs.writeFile(file,"Hey I'm amazing", function(err){
        if (err) throw err
        console.log("Saved!")
    })
}

function appendFile(file){
    fs.appendFile(file,"Append meee",function(err){
        if(err) throw err
        console.log("It got appended!!")
    })
}

function readFile(file){
    fs.readFile(file,"utf8",function(err,data){
        if (err) throw err
        console.log(data)
    })
}


//writeFile()
//readFile(file)
appendFile(file)