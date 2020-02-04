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

checkNumber(7)
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