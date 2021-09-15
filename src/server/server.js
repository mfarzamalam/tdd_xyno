var http   = require("http");

exports.start = function(){
    var server = http.createServer();

    server.on("request", function(request, response){
        console.log("Received request");
    
        var body = "<html><title>Node Http Server</title><head></head>"+
                    "<body><p>This is an actual Node's HTTP server.</p></body></html>";
    
        response.end(body);
    });
    
    server.listen(8000);
};