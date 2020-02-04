//Promises: a cleaner way of doing callbacks (taking advantage of asynchronous JS)

/* Why use them?
  1. Replaces a bunch of if statements, which is what callbacks. So makes syntax cleaner.
  2. JS is synchronous: Interpreter reads the code in order and executes whatever finishes first, first.
    So Asynchronous JS allows us to decide when we want something to be executed, and not be at the mercy of the interpreter's synchronous order
    Things like Promise.race() allow us to do that. 
    Promise.all() make sure that all promises are returned before the process passes on to the next step.
    For example in React, using this would be useful in ajax calls to make sure the data actually came before we update the state!
*/

// ----------------------------BASIC EXAMPLE---------------------------

//We create the promise, and then we execute it
let p = new Promise((resolve, reject) => { //resolve and reject are functions that get passed in the Promise as arguments
  let a = 1 + 1;
  if (a === 2) {
    resolve("success!"); //We can pass anything we want back in this resolve
  } else {
    reject("Failed!"); //We can pass anything we want back in this reject
  }
});

p.then(message => {
  console.log("This is in the then (success): " + message);
}).catch(message => {
  console.log("This is in the catch: " + message);
});



// ----------------------------Promise.all([])---------------------------
/*Promise.all() is useful anytime you have more than one promise and 
  your code wants to know when all the operations 
  that those promises represent have finished successfully.
  So that stuff doesn't hang or end up empty cause another area did not finish cause JS
  is synchronous so if something doesn't happen or takes too long on one line, it will just continue.
  This can result in fragmented code if we need everything to be in order.
  For example, suppose you need to gather information from three separate remote API calls and when you have the results from all three API calls, you then need to run some further code using all three results. 
  That situation would be perfect for Promise.all(). 
  But note that the arguments (promises) in the array all run at the same time tho. In parallel, so its not sequential, though only get returned once they're all ready.
  You could so something like this:
*/
const recordVideo1 = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideo2 = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideo3 = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideo1, recordVideo2, recordVideo3]).then(messages => {
  console.log(messages);
}); //This runs multiple promises together and when they're done, it calls the .then()



// ----------------------------Promise.race([])---------------------------
/*Just like Promise.all() only that it will return after the first promise has completed.
  And for that reason it will only return one output.
*/


// ----------------------------Case Example 1---------------------------
/* Just another example to understand Promises better and to see how to chain them :)
  You can use this if you want your promises to be returned in order!
  Also shows that if you want to use a promise within a function, you can use it as the return for a function.
*/

let makeRequest = location => {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google here sorry!");
    }
  });
};

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

makeRequest("Google")
  .then(message => {
    console.log(message);
    return processRequest(message); //we must return this promise so we can use it in our chained then!
  })
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  });


//----------------------------Chaining promises----------------------------
//Just to show what's possible. This function is returning a Promise, so we use the .then() naturally
//And also in our .then() we can return another promise, so consequently we can also add a .then() to that
//And we give both (or as many of them as they are) one .catch() that will catch whatever error there is
var myNumber = 5
function checkNumber(number){
  return new Promise((resolve,reject)=>{
    if(number < 10){
      resolve({number:number})
    }else{
      reject({message:"Number is less than 5"})
    }
  })
}

checkNumber(myNumber)
.then((resolveObj)=>{
  return new Promise((resolve,reject)=>{
    if(resolveObj.number === 5){
      resolve({message:"Ouh, we got a 5!"})
    }else{
      reject({message:"We didn't get a 5"})
    }
  })
})
.then((resolveObj)=> console.log(resolveObj))
.catch((err)=> console.log(err))






//   // WHat was I even doing?----------------------------Case Example 1---------------------------
// var flavors = ["Vanilla", "Chocolate", "Strawberry"];
// flavors.push("Lemon"); //insert at end
// flavors.unshift("Passion Fruit"); //inserts at beginning
// //console.log(flavors);
// flavors.splice(2, 0, "Bubble Gum"); //Starting at index 2, will delete 0 items, and insert "Bubble Gum" at that index
// //console.log(flavors);
// /* 
// I have an array and I am performing 3 actions: push, unshift, and splice in this order.
// I console.log before and after the splice.
// But for some reason, the 2 console.log output the same array- which is the updated array with the splice.
// Why? Because read above on synchronous code. JS reads its anyhow. 
// To make sure our code will be executed only in a specific order, we use promises:
// */
// var flavors2 = ["Vanilla", "Chocolate", "Strawberry"];
// let part1 = new Promise((resolve, reject) => {
//   if (true) {
//     setTimeout(() => {
//       flavors2.push("Lemon"); //insert at end
//       flavors2.unshift("Passion Fruit"); //inserts at beginning
//       resolve("Part 1: " + flavors2);
//     }, 3000);
//   }
// });

// let part2 = new Promise((resolve, reject) => {
//   if (true) {
//     flavors2.splice(2, 0, "Bubble Gum"); //Starting at index 3, will delete 0 items, and insert "Bubble Gum" at that index
//     resolve("Part 2" + flavors2);
//   }
// });

// Promise.all([part1, part2]).then(messages => {
//   console.log(messages);
//   /*
//     But is it guaranteed that they will be in the good order tho?
//     It's actually not. It just happens that our output is in order! 
//     But even if we delay with the setTimeout, we can see that Part 1 still comes before P2.
//     This is just the way they are returned tho, cause they all get returned together, maybe the thing just orders them the way we entered them in the array.
//     If we want to specifically make them come in an order then we use async/await. :)
//   */
// });
