class Shape {
    constructor(area,perimeter){
        this.area = area
        this.perimeter = perimeter
    }

    printInfo(){
        console.log(`Area: ${this.area}`)
        console.log(`Perimeter: ${this.perimeter}`)
    }
}

//🔑 When we extend a class, we must use super() before we try to use the keyword this. The super keyword calls the parent constructor function of the subclass.
//📝 super can also be used as a keyword to access methods from the parent class.

class Square extends Shape{
    constructor(area,perimeter){
        super(area,perimeter) //Super calls the constructor function of the parent class
    }
}

var mySquare = new Square(20,50)
mySquare.printInfo()
var hi = "hiii"
console.log(this)