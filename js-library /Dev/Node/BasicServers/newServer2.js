var http = require("http");
var PORT = 8081;

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

function displayContactPage(path,response){
    var pageInfo = `
    <html>
        <head>Contact Page</head>
        <body>
            <h1>You reached the contact page!</h1>
        </body>
    </html>`
    response.writeHead(200,{'Content-Type':"text/html"})
    response.end(pageInfo)
}

function handleRequest(request,response){
    console.log(request.url)
    var path = request.url 
    switch(path){
        case "/":
            response.end("Home page")
            break;
        case "/contact":
            displayContactPage(request.url,response)
            break;
        default:
            return display404(path,response)
    }
    response.end("Response 1 sent!")
}

var server = http.createServer(handleRequest);
server.listen(PORT,function(){
    console.log("Server 1 is listening on PORT: " + PORT)
})



