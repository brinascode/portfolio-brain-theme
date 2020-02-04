//Retrieving a string letter at an index
// var myString1 = "Aey, I'm Brina"
// console.log(myString1[0].toLowerCase())

// var vowels = ["a","e","i","o","u"]
// var first = myString1[0]
// console.log(vowels.includes(first))

(function file(){
    var toGoatLatin = function(S) {
        var firstLetter = S[0].toLowerCase()
        var vowels = ["a","e","i","o","u"]
        if(vowels.includes(firstLetter)){
            S+="ma"
            console.log(S)
        }
        
     }
     toGoatLatin("a")

    // ****************** .split() --> convert string to array
    var myString = "Hey there how are you"
    var newArrayFromString = myString.split(" ")
    console.log(newArrayFromString)

     // ****************** .replace--> replaces a piece of the string with something else
     var myString = "Hey, I'm fine!"
     var newString = myString.replace("fine","Sabrina")
     console.log(newString)
})

var myString = "Hey, I'm fine!"
var newString = myString.replace("fine","Sabrina")
console.log(newString)



