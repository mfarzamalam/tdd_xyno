var CONTENT_DIR = "src/server/content/";

var server = require("./server.js");
var port   = process.argv[2];

server.start(CONTENT_DIR +"homepage.html", CONTENT_DIR +"404.html", port, function(){
    console.log("server started");
});