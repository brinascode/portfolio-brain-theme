//Classess --> Provide Syntatical Sugar for creating objects.
//They emulate how classes work in other languages but they don't exactly have the same kind of inheritance

class Shape{
    constructor(area,perimeter){ //This is like an object constructor function 
        this.area = area
        this.perimeter = perimeter
    }

    printInfo(){
        console.log(`Area: ${this.area}`)
        console.log(`Perimeter ${this.perimeter}`)
    }
}

var myShape = new Shape(50,30)
myShape.printInfo()

