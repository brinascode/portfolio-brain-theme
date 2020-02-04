
var user = {
    username:"brinascode",
    age:20,
    passion:"coding"
}

// instead of doing this:
const username = user.username
const age = user.age
const passion = user.passion

//We can do this :)
const  {username, age, passion} = user
console.log(username)
console.log(age)
console.log(passion)

//using different names for the properties :)
const { username: personName } = obj;
console.log("personName", personName);