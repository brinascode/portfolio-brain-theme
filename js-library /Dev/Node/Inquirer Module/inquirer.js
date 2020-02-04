var inquirer = require("inquirer")
var fs = require("fs")

inquirer.prompt([{
    name:"name",
    message:"Hi, what's your name?"
},
{
    name:"language",
    message:"What languages do you speak?"
},
{
    name:"communication",
    message:"What's your preferred mode of communication?"

}]).then(answers => { //THe result is returned as an object of this form: 
                                // {
                                //     question1:answser,
                                //     question2:answer
                                // }
    fs.writeFile("answers",JSON.stringify(answers),function(err){
        if(err) throw err
        console.log("Done!")
    })
}).catch((err)=>{
    if (err) throw err
})