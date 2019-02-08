var chalk = require("chalk");

var message = chalk.green("Hello") + chalk.yellow("World");
console.log(message);

console.log(chalk.red("Hello", chalk.underline.bgBlue('world')+ '!'));





console.log(chalk.blue('Hello', 'World', 'foo'))


console.log(chalk.green(
    'I am a green line ' +
    chalk.blue('with a blue substring') +
    ' that becomes green again!'
));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);


const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));