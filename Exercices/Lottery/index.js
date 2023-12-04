// console.log('lottery');
const chalk = require('chalk');

const {loto, gagnant}= require('./modules/Lottery')


console.log(loto({min:20, max:50, count:5}));


const players = ['Kali', 'Kim', 'Jules', 'Timo'];

console.log(chalk.green(`Le gagnant(e) est : ${gagnant(players)}`));