/*global desc, task, jake, fail, complete */

(function(){
    "use strict";

    desc("Build and Test");
    task("default", ["test"]);

    
    desc("Test Everything");
    task("test", [], function(){
        var reporter = require("nodeunit").reporters["default"];
        reporter.run(['src/server/_server_test.js'], null, function(failures){
            if (failures) fail("Test Failed");
            complete();
        });
    }, {async: true});


    desc("Example");
    task("example", ["dependency"], function(){
        console.log("example task");
    });


    task("dependency", function(){
        console.log("dependency");
    });
}());