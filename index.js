var McpAdc = require('mcp-adc');

var adc = new McpAdc.Mcp3208();

var channel = 0;
var voltOffset = 1650;

var totalRaw = 0;
var totalVolt = 0;
var totalPerc = 0;

for(var x=0; x<100;x++) {

    adc.readRawValue(channel, function(value) {
        totalRaw = totalWar + value;

    });

    adc.readVoltage(channel, function(voltage) {

        totalVolt = totalVolt + voltage;

    });

    adc.readNormalizedValue(channel, function(normValue) {
        totalPerc = totalPerc + normValue;
    });

}

var avgVolt = totalVolt / 100;
var avgRaw = totalRaw / 100;
var avgPerc = totalPerc / 100;

setInterval(function() {

        console.log("Raw value:\t" + avgRaw);

        var mV = avgVolt * 1000;
        console.log("avgVolt:\t" + voltage);

        var ampere = (mV - voltOffset) / 100;
        console.log("Ampere:\t" + ampere);


        console.log("Percents:\t" + (avgPerc * 100));


}, 1000);

