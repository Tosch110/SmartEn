var McpAdc = require('mcp-adc');

var adc = new McpAdc.Mcp3208();

var channel = 0;
var voltOffset = 1650;



setInterval(function() {

    adc.readRawValue(channel, function(value) {
        console.log("Raw value:\t" + value);
    });

    adc.readVoltage(channel, function(voltage) {

        var mV = voltage * 1000;
        console.log("Voltage:\t" + voltage);

        var ampere = (mV - voltOffset) / 100;
        console.log("Ampere:\t" + ampere);

    });

    adc.readNormalizedValue(channel, function(normValue) {
        console.log("Percents:\t" + (normValue * 100));
    });


}, 1000);

