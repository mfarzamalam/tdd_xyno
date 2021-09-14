/*global desc, task, jake, fail, complete */

(function(){
    "use strict";

    desc("Build and Test");
    task("default", ["test"]);

    
    desc("Test Everything");
    task("test", [], function(){
        console.log("Test Everything");
    });


    desc("Example");
    task("example", ["dependency"], function(){
        console.log("example task");
    });


    task("dependency", function(){
        console.log("dependency");
    });
}());