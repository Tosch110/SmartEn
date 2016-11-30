var McpAdc = require('mcp-adc');

var adc = new McpAdc.Mcp3008();

var channel = 0;
var voltOffset = 1690;

setInterval(function() {


    var totalRaw = 0;
    var totalVolt = 0;
    var totalPerc = 0;

    for(var x=0; x<50000;x++) {


            adc.readRawValue(channel, function(value) {
                totalRaw = totalRaw + value;
            });

    }

    var avgRaw = totalRaw / 50000;

    console.log("Raw value:\t" + avgRaw);

    var avgVolt = ((avgRaw * 3.3) / 1023);

    console.log("avgVolt:\t" + avgVolt);

    var mV = (avgVolt * 1000) - 100; // -100 because 0mA starts at 100 mV
    var ampere = (mV - voltOffset) * 10000;
    console.log("Ampere:\t" + ampere);


    //console.log("Percents:\t" + (avgPerc * 100));


}, 5000);

