/*
Callbacks mean this:
-- Do function A, if done do this
-- Callbacks are when functions call each other
*/

//Callbacks at work
function serverCall(url){
    if(url === "google"){
        showResponse(url)
    }else if(url === "twitter"){
        showResponse(twitter)
    }
}

function showResponse(url){
    if(url === "google"){
        console.log("Hey, we're at google!")
    }else if(url === "twitter"){
        console.log("Hey, you've reached twitter!")
    }
}

serverCall("google")

//Callbacks can get convoluted really quickly and an easy way to avoid callback hell is to use promises.
//Callback model is: Function is run --> if some conditions are met call nextFunction --> so on and so forth
//The 'problem' (or inconvenience) is that we have to manually check whether these conditions are true, and then call the next function within this function.
//So things get nested really quickly and that's what we call callback hell.
var userLeft = false
var userWatchingCatMeme = true
function watchTutorialCallback(successCallback,errorCallback){
    if(userLeft){
        errorCallback({
            name:"User left",
            message:"Boohooo"
        })
    }else if(userWatchingCatMeme){
        errorCallback({
            name:"User Watching Cat meme",
            message:"Booooo"
        })
    }else{
        successCallback({
            name:"User is here",
            message:"We all good"
        })
    }
}

watchTutorialCallback((message)=>{
    console.log(message.message)
},(message)=>{
    console.log(message.message)
})

//Note: Promises are only good at replacing functions that use success and error callbacks. Just to note that this is what makes promises useful.
//Other than that, there are other kinds of reasons for using callbacks in functions that promises would not be useful for...
// We use promises to avoid callback hell because promises are actually just callbacks like in the example above, but in a predefined model.
//They anticipate that you will have 1. A function 2.That will need to resolve(pass to a success callback) or reject(pass to a failure callback) and allows you to do this without nesting and in a much cleaner and intuitive way.
//Summary: In promises, the callbacks are attached to the concept of promises, removing the need for us to explicitly create them and reinvent the wheel every time.
// It provides us a way to use callbacks and chain them without haivng to create callbacks all the time. In promises callbacks are implicit.
//Resolve is our successCallback and Reject is our errorCallback

function watchTutorialCallback(){
  return new Promise((resolve,reject)=>{
    if(userLeft){
        reject({
            name:"User left",
            message:"Boohooo"
        })
    }else if(userWatchingCatMeme){
        reject({
            name:"User Watching Cat meme",
            message:"Booooo"
        })
    }else{
        resolve({
            name:"User is here",
            message:"We all good"
        })
    }
  })
   
}
