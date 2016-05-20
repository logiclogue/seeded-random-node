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
        .option('-s, --seed <seed>', 'specify the seed', '')
        .option('-f, --function <function-name>', 'function name', 'decimal')
        .option('-r, --range <a>..<b>', 'range of numbers inclusive', this.range)
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
        switch(program.function) {
            case 'decimal':
                console.log(this.random.decimal(program.seed));
                break;

            case 'range':
                console.log(this.random.range(program.seed, program.range[0], program.range[1]));
                break;

            default:
                console.log('Not a valid function');
                break;
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
