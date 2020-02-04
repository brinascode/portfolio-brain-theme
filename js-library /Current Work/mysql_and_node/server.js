var mysql = require("mysql")
//Create a connection to the database
var connection = mysql.createConnection({
    host: "localhost",  //the host is the machine that hosts the mysql server you're trying to connect to
    post:3306,
    user:"root",
    password:"Abidjan54",
    database:"animals_db"
})

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connected as id:" + connection.threadId) //each connection has a thread
    connection.end();
})