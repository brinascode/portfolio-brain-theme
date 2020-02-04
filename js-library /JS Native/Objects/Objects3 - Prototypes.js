/* 
Prototypes are another way to give methods to a constructor. 
Instead of creating the methods in the constructor, we create the regular constructor and then use .prototype to add/create the new methods.

-Also: Prototypes are also the only way we can give a constructor new functions or modify it once it has already been created.

***********************
☝️ Why don't we just declare the methods in the constructor?
🙋 When we bind a function using the this keyword, the method only exists on that instance of the object. For any method bound to this, it will be re declared with each new instance of an object.
☝️ How does the prototype help us solve this problem?
🙋 The prototype allows us to declare methods that will be attached to all instances of an object of that prototype. Because the method is applied to the prototype, it is only stored in memory once for all instances. So it saves memory and prevents the methods to be copied individually for each object instance.
*/

function Book(author,price){
    this.author = author
    this.price = price
}
var PrideAndPrejudice = new Book("Jane Austen",10)
var Hey = new Book("Sabrina Koumoin",5)

console.log(Hey) //JS console will only give us the stuff we want
console.log(Hey.hasOwnProperty("author"))
console.log("Hi there Im Brina")

//All JS objects have prototypes that they inherit. So all objects inherit a prototype from the Object constructor itself.
//A good way to see those would be to print the object in the browser's console and ipen things up
//So if you use a for..in loop on an object and print the keys, some of these 'hidden' prototype methods can also be printed.
//.hasOwnProperty is a way of finding out if an object has a specific property
''



var myArray = []
console.log(typeof myArray)