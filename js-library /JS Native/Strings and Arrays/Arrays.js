(function (notes){
//********** Basics
var name = ["hi", "beautiful", "person"];
name[0] = "beautiful";
name.indexOf("beautiful");

//********** Basic methods
var flavors = ["Vanilla", "Chocolate", "Strawberry"];
flavors.shift(); //Removes the first item
flavors.unshift("Passion Fruit"); //inserts at beginning
flavors.push("Lemon"); //insert at end
flavors.splice(2, 0, "Bubble Gum"); //Starting at index 3, will delete 0 items, and insert "Bubble Gum" at that index

//********** array.join()   --> Combines the elements in the array and makes them a string. THe elements will be separated by the specified separator (the default is a comma). Does not alter the original array.
var flavors = ["Vanilla", "Chocolate", "Strawberry"];
const flavorsString = flavors.join()
const flavorsStringSpaced = flavors.join(" ")
console.log(flavorsString)
console.log(flavorsStringSpaced)

//********** array.includes()  --> checks whether the array includes a specific item and then returns a boolean
var myFruits = ["apple","banana","orange","pear"]
console.log(myFruits.includes("apple"))

//********** array.some() --> similar to array.includes() but instead of checking whether an array includes an item, it checks if the array includes items  that meet a condition (at least one) and returns a boolean. 
                              //Hence the name 'some'. Checks that the array has 'some' items that match the condition :)
var shoppingCart = [
  {name:"Chair",price:50},
  {name:"Table",price:20},
  {name:"Book",price:20},
  {name:"Shoes",price:10}
]
const cartHasExpensiveItems = shoppingCart.some((item)=>{return item.price === 50})
console.log(cartHasExpensiveItems)

//********** array.every() --> very similar to array.some() but checks that every item meets the condition before returning true
var shoppingCart = [
  {name:"Chair",price:50},
  {name:"Table",price:20},
  {name:"Book",price:20},
  {name:"Shoes",price:10}
]
const isEverythingCheap = shoppingCart.every((item)=>{return item.price < 50})
console.log(isEverythingCheap)

//********** array.filter() --> filters an array (great with objects). Returns a new array with the matches */
var shoppingCart = [
  {name:"Chair",price:50},
  {name:"Table",price:20},
  {name:"Book",price:20},
  {name:"Shoes",price:10}
]
const lessThan100 = shoppingCart.filter((item)=>{
  return item.price < 50
})

//********** array.forEach() --> Loop an array + do stuff + affect the original array
                                 //Long: Loops your array and allows you to do things. But it alters the actual array if you make any changes. (Good to use instead of a for loop :)) 
  //Example 1
  var hellos = ["Hello","Bonjour","Bom dia","Buenos dias"]
    hellos.forEach((item,index)=>{
        alert(item)
    })

  //Example 2
  var shoppingCart = [
    {name:"Chair",price:50},
    {name:"Table",price:20},
    {name:"Book",price:20},
    {name:"Shoes",price:10}
  ]
  shoppingCart.forEach((item,index)=>{
    item.name = "Changed"
  })
  console.log(shoppingCart)

//********** array.map() --> Loop an array + do stuff + return a new array containing your changes
                            //It's like forEach (also loops your array and allows you to do things) but it returns a new array instead of changing the original array it returns a new array. 
    //Example 1 
    var names = ["Claudia", "Ariel", "Lily", "Laurel"];
    let introduceYourself = () =>
      names.map(name => console.log("Hi my name is " + name)); //(NCO)Allows to create stuff with the items in an array without having to use a loop...
    introduceYourself()

    //Example 2 -> will return/create a new array with only the prices of the shopping cart items
    var shoppingCart = [
      {name:"Chair",price:50},
      {name:"Table",price:20},
      {name:"Book",price:20},
      {name:"Shoes",price:10}
    ]
    const cartPrices = shoppingCart.map((item)=>{
      return item.price
    })

  //********** array.reduce() --> Use whenever you want to do a cumulative operation on all the elements of an array
  var shoppingCart = [
    {name:"Chair",price:50},
    {name:"Table",price:20},
    {name:"Book",price:20},
    {name:"Shoes",price:10}
  ]
  //Note: Our first argument this time is the value that contains the result of our operations and that will be returned once the reduce is completed.
  // Note: The 0 is the initial value of our total variable/argument.
  const totalPrice = shoppingCart.reduce((total,index)=>{
    return index.price + total
  },0)
  console.log(totalPrice)

})
