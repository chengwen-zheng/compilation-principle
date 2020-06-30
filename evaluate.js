function evaluate(node) {
    if (node.type === "Expression") {
        return evaluate(node.children[0])
    }
    if (node.type === "AdditiveExpression") {
        if (node.operator === '-') {
            return evaluate(node.children[0]) - evaluate(node.children[2]);
        }
        if (node.operator === '+') {
            return evaluate(node.children[0]) + evaluate(node.children[2]);
        }
        return evaluate(node.children[0])
    }
    if (node.type === "MultiplicativeExpression") {
        if (node.operator === '*') {
            return evaluate(node.children[0]) * evaluate(node.children[2]);
        }
        if (node.operator === '/') {
            return evaluate(node.children[0]) / evaluate(node.children[2]);
        }
        return evaluate(node.children[0])
    }
    if (node.type === "Number") {
        return Number(node.value);
    }
}

module.exports = { evaluate };