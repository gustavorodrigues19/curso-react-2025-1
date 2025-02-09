function saudacao(nome) {
  return `Olá, ${nome}!`;
}

function soma(a, b) {
  return a + b;
}

const somaArrow = (a, b) => a + b;

// Arrow function
const saudacaoArrow = (nome) => {
  return `Olá, ${nome}!`;
};

// Arrow function sem parâmetros
const mensagem = () => "Olá, mundo!";

const dobro = (numero) => numero * 2;

console.log(saudacao("Gustavo")); // Olá, Gustavo!
console.log(soma(5, 3)); // 8
console.log(saudacaoArrow("Gustavo")); // Olá, Gustavo!
console.log(somaArrow(5, 3)); // 8
console.log(mensagem()); // Olá, mundo!
console.log(dobro(4)); // 8
