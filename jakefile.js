/*global desc, task, jake, fail, complete */

(function(){
    "use strict";

    var GENERATED_DIR = "generated";
    var TEMP_TESTFILE_DIR = GENERATED_DIR + "/test";

    directory(TEMP_TESTFILE_DIR);

    desc("Delete all generated files");
    task("clean", [], function(){
        jake.rmRf(GENERATED_DIR);
    });

    
    desc("Build and Test");
    task("default", ["test"]);


    desc("Test Everything");
    task("test", [TEMP_TESTFILE_DIR], function(){
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