//Async/Await is useful because it reduces the chaining of promises, and forces in the async code in a synchronous environment
// by making the synchronous literally wait for the resolve of a promise.
var number = 4
function makeRequest(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(number > 10){
                resolve({response:"The result of the request :)"})
            }else{
                reject({response:"Number is not greater than 10"})
            }
        },5000)
    })
}

async function doAfterRequest(){
    const response = await makeRequest()
    console.log(response) //Will only be logged after response contains something.
}

//doAfterRequest()


//Because there can be errors in the await and we don't have any .catch() to handle it, we typically do this:
async function doAfterRequest2(){
    try{
        const response = await makeRequest()
        console.log(response)
    }
    catch (err){
        console.log(err)
    } 
}

doAfterRequest2()