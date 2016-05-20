#!/usr/bin/env node

var Random = require('./Random');
var Command = require('./Command');
var random = new Random();
var command = new Command();


module.exports = {
    Random: Random,
    random: random
};
