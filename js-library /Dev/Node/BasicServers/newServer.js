var http = require("http");
var PORT1 = 8081;
var PORT2 = 8080;

function handleRequest1(request,response){
    console.log(request.url)
    response.end("Response 1 sent!")
}

function handleRequest2(req,res){
    console.log(req.url)
    res.end("Response 2 sent!")
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2)

server1.listen(PORT1,function(){
    console.log("Server 1 is listening on PORT: " + PORT1)
})

server2.listen(PORT2,function(){
    console.log("Server 2 is listening on PORT " + PORT2)
})




