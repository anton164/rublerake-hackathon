var vegvesenClient  = require("vegvesen");	//replace with require("vegvesen") in production
var vegvesen = new vegvesenClient();			//create a new instance of vegvesenClient

var kommune = 217;
var kommuneNavn;

function findKommune(kommuner){
    return kommuner.nummer === kommune;
}

var searchObject = {
	lokasjon: {kommune: [kommune]},
	objektTyper: [{id: 105, antall: 9999}]
}

var averageSpeed = 0;

vegvesen.connect(function(){
  console.log(vegvesen.definisjoner.vegobjektTyper);
    vegvesen.omrader.kommuner(function(obj){
       kommuneNavn = obj.kommuner.find(findKommune).navn;
        console.log("Fetching data for " + kommuneNavn + ", please wait...");
    });
    vegvesen.sokegrensesnitt.sok(searchObject, function(obj){
        var results = obj.resultater[0].vegObjekter;
        for(item in results){
            var speedObject = results[item].egenskaper;
            for(properties in speedObject){
                if(speedObject[properties].id === 2021){
                    averageSpeed += parseInt(speedObject[properties].verdi);
                }
            }
        }
        averageSpeed = (averageSpeed / obj.totaltAntallReturnert).toFixed(2);
        console.log("Average speed limit in " + kommuneNavn + " is " + averageSpeed + " km/h");
    });
});

console.log("Connecting...");
