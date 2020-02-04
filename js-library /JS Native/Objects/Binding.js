//Understanding binding and why we have to bing the this :) Run in CodePen for live results :)
https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/




//*************************WHAT IS DEFAULT BINDING?*****************
//By default, the 'this' keyword defaults to the javascript/window/file/etc object
//So if we put:
console.log(this)  //we get details about our js environment
//If we do:
var hi = "hey there"
console.log(this.hi) //We will get our "hey there"! Because this points to our js script object itself. 
                     //So our variables are attached to it like properties 


//*************************Implicit Binding *************************
//When we create an object, and the this gets implicitly/automatically assigned to the object.
//We don't do any special action to cause this, it just happens implicitly or automatically.

var person = {
    name: "Sabrina",
    printName:function(){
        console.log(this.name)
    }
}
person.printName() //Will give us "Sabrina", because '.this' points to 'person'

//*************************Limits of Implicit Binding *************************
//The thing with implicit binding though is that since we did not explicitly define it, we are at the mercy of default JS behavior. Essentially, in JavaScript, the 'this' will point to its closest reference or containing object. So here

//When we assign our function to a new variable
var displayName = person.printName
displayName() //the .this will now point to displayName. Because in person.printName we are copying a function, and not the entire object context. SO the 'this' will point to its new mother object, or context which is displayName. Since displayName does not have any 'name' variable or attribute, the 'this' will fallback to dfault binding. Which means that if we have a name variable in our JS that will be printed, if not we get an undefined.

//Example of what is printed if we get a name variable. Bella is now printed:
var name = "Bella"
displayName()


//Another example: If we actually have a name var in our new context object, because that's the closest containing object, it has precedence over the global JS object and so our function prints Sophie
var display = {
  name:"Sophie"
}
display.showName = person.printName
display.showName()


//*************************Limits of Implicit Binding demo in SetTimeout *************************
setTimeout(person.printName,2000)
  //As you can see, we get "Bella" (the global variable) instead of "Sabrina". 
  //That's because what's happening is that we're passing the person.printName function into this setTimeout function as an argument. But remember that arguments are actually being passed into parameter variables. 
//So if the defining code of setTimeout is actually : setTimeout(callback,delay) we are actually doing this:
//callback = person.printName  --> which is the same assigning operation we did above and which we explained.


//*************************Hard binding*************************
//To avoid any mishaps that occur with implicit binding, we use hard binding anytime we know our function uses a this that it must absolutely point to no matter what. Especially if we know our function will be used as a callback in various places.
person.printName = person.printName.bind(person) //We bind the person context to our function. So that it keeps it with it wherever it goes
var sabrinaWillPrint = person.printName
sabrinaWillPrint()