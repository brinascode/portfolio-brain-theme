var maths = require("./maths.js/index.js")
var operation = process.argv[2]
var numOne = parseInt(process.argv[3])
var numTwo = parseInt(process.argv[4])
var result = 0

switch(operation){
    case "add":
        result = maths.add(numOne,numTwo)
        break;
    case "subtract":
        result = maths.subtract(numOne,numTwo)
        break;
    case "multiply":
        result = maths.multiply(numOne,numTwo)
        break;
    case "divide":
        result = maths.divide(numOne,numTwo)
        break;
    default:
        result = "Welp, we dont know how to do that"
}

console.log(result)
