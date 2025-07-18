// librería para evaluar expresiones matemáticas
const { evaluate } = require('mathjs');

function calculate(expression) {
    return evaluate(expression);
}

module.exports = { calculate };