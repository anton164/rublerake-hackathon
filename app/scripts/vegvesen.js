
var vegvesenClient  = require("vegvesen");	//replace with require("vegvesen") in production
var vegvesen = new vegvesenClient();			//create a new instance of vegvesenClient

vegvesen.connect(function(){
	/* dumps the vegvesen object, usefull for checking available API calls */
	console.log(vegvesen);
});

console.log("Connecting...");
