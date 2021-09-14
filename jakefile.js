/*global desc, task, jake, fail, complete */

(function(){
    "use strict";

    desc("Build and Test");
    task("default", ["test"]);

    
    desc("Test everything");
    task("test", [], function() {
		var reporter = require("nodeunit").reporters["default"];
		reporter.run(['src/server/server.js']);
	});

    
    
    desc("Example");
    task("example", ["dependency"], function(){
        console.log("example task");
    });
    
    
    task("dependency", function(){
        console.log("dependency");
    });
}());