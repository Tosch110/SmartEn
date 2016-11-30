var McpAdc = require('mcp-adc');

var adc = new McpAdc.Mcp3208();

var channel = 0;
var voltOffset = 1650;

setInterval(function() {


    var totalRaw = 0;
    var totalVolt = 0;
    var totalPerc = 0;
    
    for(var x=0; x<10000;x++) {


            adc.readRawValue(channel, function(value) {
                totalRaw = totalRaw + value;
            });

    }

    var avgRaw = totalRaw / 10000;

    console.log("Raw value:\t" + avgRaw);

    var avgVolt = ((avgRaw * 3.3) / 4095);

    console.log("avgVolt:\t" + avgVolt);


    var ampere = (avgVolt / 10) - 0.1;
    console.log("Ampere:\t" + ampere);


    //console.log("Percents:\t" + (avgPerc * 100));


}, 3000);

