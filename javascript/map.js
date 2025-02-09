const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros
  .map((numero, ke) => numero * 2)
  .filter((item) => item !== 2);

console.log(numerosDobrados);
