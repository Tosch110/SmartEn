var McpAdc = require('mcp-adc');

var adc = new McpAdc.Mcp3208();

var channel = 0;
var voltOffset = 1690;

adc.readRawValue(channel, function(value) {
        console.log("Raw value:\t" + value);
});

adc.readVoltage(channel, function(voltage) {
        var mV = voltage * 1000;
        console.log("Voltage:\t" + voltage);

        var difference = mV - voltOffset;
        console.log("Ampere:\t" + difference);



});

adc.readNormalizedValue(channel, function(normValue) {
        console.log("Percents:\t" + (normValue * 100));
});