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


    desc("Test everything");
    task("test", [TEMP_TESTFILE_DIR], function(){
		var testFiles = new jake.FileList();
		testFiles.include("**/_*_test.js");
		testFiles.exclude("node_modules");

		var reporter = require("nodeunit").reporters["default"];
		reporter.run(testFiles.toArray(), null, function(failures) {
			if (failures) fail("Tests failed");
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