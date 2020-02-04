export default class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  //External functions vs internal functions inside of the constructor?
  //Ways to define function here?
}

let whatsMyName = person => console.log(person.name);
let whatsMyAge = person => console.log(person.age);
let whatsMyCountry = person => console.log(person.country);

/*

We have created a Person Class and will use it to understand
ES6 modules.
-------There are 2 ways to export-------

First of all what do we export? Objects! Not JS object Object but any object (small caps). So this includes:
arrays, Objects, Classes, functions etc 


1. EXPORT DEFAULT: export default + nameOfClassToExport or thing to export
    a. Export the class as you're making it:
       export default class Person{
         etc
       }
    b. Export in the end:
       export default Person;
 
2. NAMED EXPORT : to export individual items or functions,classes etc
    export {whatsMyName, whatsMyAge} 
    Note: Do not forget the curly braces!


*/

export { whatsMyName, whatsMyAge, whatsMyCountry };
