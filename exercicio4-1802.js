let executarOperacao = (a, b, operacao) => operacao(a, b)

console.log(executarOperacao(6, 3, (a, b) => a - b));
console.log(executarOperacao(4, 5, (a, b) => a * b));