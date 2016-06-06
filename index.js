#!/usr/bin/env node

var Random = require('./js/Random');
var Command = require('./js/Command');
var random = new Random();


/*
 * If called from command line then switch
 * commands. Else export 'random' object.
 */
if (require.main === module) {
    new Command();
}
else {
    module.exports = random;
}
