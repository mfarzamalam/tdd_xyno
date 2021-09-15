var http = require("http");

var server = http.createServer();

server.on("request", function(request, response){
    console.log("Received request");

    var body = "<html><title>Node Http Spike</title><head></head>"+
                "<body><p>This is a spike of Node's HTTP server.</p></body></html>";

    response.end(body);
});

server.listen(8000);

console.log("Server started");