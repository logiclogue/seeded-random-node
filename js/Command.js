var program = require('commander');
var Random = require('./Random.js');
var random = new Random();
var env = require('../package.json');


/*
 * Class that interprets command line commands
 * using commander.
 */
var Command = function () {
    // Defines all the commands with commander.
    program
        .version(env.version)
        .description('Tool for generating random numbers from a seed')
        .option('-s, --seed <seed>', 'specify the seed', Math.random())
        .option('-d, --decimal', 'generates a random decimal number', false)
        .option('-r, --range <a>,<b>', 'generates a random integer in the range inclusive', this.range)
        .parse(process.argv);

    // Calls the method that will check the commands
    // the user has entered.
    this.switchFunction();
};

(function (status_, proto_) {
    
    /*
     * Method which switches the function string and
     * executes the chosen method from the Random
     * class.
     */
    proto_.switchFunction = function () {
        if (program.decimal) {
            console.log(random.decimal(program.seed));
        }
        else if (typeof program.range !== 'undefined') {
            console.log(random.range(program.seed, program.range[0], program.range[1]));
        }
        else {
            program.help();
        }
    };

    /*
     * Method which is used to separate arguments
     * into an array.
     */
    proto_.range = function (val) {
        return val.split(',').map(Number);
    };

}(Command, Command.prototype));

module.exports = Command;
