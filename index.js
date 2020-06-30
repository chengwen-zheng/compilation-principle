const start = require('./state-machine.js');
const {evaluate} = require("./evaluate.js");
const expression = require('./expression.js');

const input = "1024 + 2 * 256 + 4";

let state = start;

for (const c of input.split('')) {
    state = state(c);
}

const sources = state(Symbol('EOF'));
const ast = expression(sources);
console.log(evaluate(ast));