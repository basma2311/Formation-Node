// Module provenant de npm
const slugify = require('slugify');

// Module crée par le dev
const { calc } = require('./modules/calc');

/*
Si l'export du module s'est fait avec : 
module.exports = calc
const  calc  = require('./modules/calc');
*/
//pour installer le slugify "npm i slugify"

// Module crée par le dev
// const { calc } = require('./modules/calc');

console.log(calc(2, 5));
// Bienvenue a Paris
// bienvenue-a-paris

console.log(slugify('Bienvenue à Paris', {lower: true}))