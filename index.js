var Random = require('./Random');
var random = new Random();
var args = process.argv.slice(2);

switch(args[0]) {
    case 'decimal':
        console.log(random.decimal(args[1]));
        break;

    case 'range':
        console.log(random.range(args[1], parseInt(args[2]), parseInt(args[3])));
        break;

    default:
        console.log('Not a valid function');
        break;
}

module.exports = {
    Random: Random,
    random: random
};
