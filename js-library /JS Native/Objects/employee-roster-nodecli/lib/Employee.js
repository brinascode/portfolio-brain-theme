var fs = require("fs")
class Employee{
    constructor(role,title,name,id,email){
        this.role = role.toLowerCase() //manager, engineer, intern
        this.title = title.toLowerCase()
        this.name = name
        this.id = id
        this.email = email.toLowerCase()
        this.infoProvided = ["role","title","name","id","email"]
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.role
    }

    addToTemplate(){
        var templateFile = `../templates/${this.role}.html`
        fs.readFile(templateFile,"utf8",(err,data)=>{
            //We go through every info items (every properties) and search for a placeholder for it in the template. If we find one we replace it with the matching property.
            for(var i=0;i<this.infoProvided.length;i++){
                var property = this.infoProvided[i]
                if(typeof property === "string" && data.search(`--${property.toUpperCase()}--`)){ //If the property item is a string and is found in the template
                    var property2 = property.toUpperCase()
                    data = data.replace(`--${property.toUpperCase()}--`,property) //If our info variable is a string and is found in the template

                 }
                if(typeof property === "number"){ //If it's not a string but its 
                    data = data.replace(`--ID--`,property)
                }

            }
            console.log(data)
        })
    }
}
var myTest = new Employee("manager","Super Manager","Sabrina",1,"sak@ya.com")
myTest.addToTemplate("manager.html")
module.exports = Employee

