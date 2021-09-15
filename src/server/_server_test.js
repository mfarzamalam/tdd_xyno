var server = require("./server.js");
var http   = require("http");

exports.testHttpServer = function(test){
    server.start();
    
    http.get("http://localhost:8000", function(response){

    });

    test.done();
};