// validationService.js
function isValidExpression(expression) {
    return !(/[+\-*/]$/.test(expression.trim()));
}

module.exports = { isValidExpression };