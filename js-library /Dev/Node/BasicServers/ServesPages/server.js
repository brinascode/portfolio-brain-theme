var http = require("http");
var fs = require("fs")
var PORT = 8081;

//add other files

function display404(path,response){
    var errorHTML = `
    <html>
        <head></head>
        <body>
            <h1>Page not found for ${path}</h1>
        </body>
    </html>`
    response.writeHead(404,{'Content-Type':"text/html"})
    response.end(errorHTML)
}


function handleRequest(request,response){
    console.log(request.url)
    var path = request.url 
    switch(path){
        case "/":
            response.end("Home page")
            break;
        case "/contact":
            console.log(__dirname)
            fs.readFile(__dirname + "/contact.html","utf-8",(err,data)=>{
                if(err) throw err
                response.writeHead(200,{"Content-Type":"text/html"})
                response.end(data)
            })
            break;
        default:
            return display404(path,response)
    }
    
}

var server = http.createServer(handleRequest);
server.listen(PORT,function(){
    console.log("Server 1 is listening on PORT: " + PORT)
})

