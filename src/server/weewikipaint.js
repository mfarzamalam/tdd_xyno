
var server = require("./server.js");

server.start("homepage.html", "404.html", 8081, function(){
    console.log("server started");
});