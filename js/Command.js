var program = require('commander');
var Random = require('./Random.js');


/*
 * Class that interprets command line commands
 * using commander.
 */
var Command = function () {
    this.random = new Random();
    program
        .version('1.0.0')
        .option('-s, --seed <seed>', 'specify the seed', Math.random())
        .option('-d, --decimal', 'generates a random decimal number', false)
        .option('-r, --range <a>..<b>', 'generates a random integer in the range inclusive', this.range)
        .parse(process.argv);

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
            console.log(this.random.decimal(program.seed));
        }
        else if (typeof program.range !== 'undefined') {
            console.log(this.random.range(program.seed, program.range[0], program.range[1]));
        }
    };

    /*
     * Method which is used to separate arguments
     * into an array.
     */
    proto_.range = function (val) {
        return val.split('..').map(Number);
    };

}(Command, Command.prototype));

module.exports = Command;
