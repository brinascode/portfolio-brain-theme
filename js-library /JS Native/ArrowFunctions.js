//A cooler way to define functions!

function oldSchool(message) {
  console.log(message);
}

/*Arrow functions must be stored in a var, because the old approach already does that for us. 
The function keyword implies that and already stores the function name in a variable for us :)
*/

let middleSchool = (message1, message2) => {
  console.log(message1 + message2);
};

//Want to simplify some more? If there's only one argument you dont need the parentheses!
let youngSchool = message => {
  console.log(message);
};

//Wanna simplify even further? If everything can fit in one line, you don't need curly braces!
let youngerSchool = message => console.log(message);

//Wanna go even further?? Well if there are no parameters/args, then leave the parentheses empty!
let babySchool = () => console.log("Hey I'm a baby!");
