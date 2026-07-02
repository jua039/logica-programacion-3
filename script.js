const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Escribe un numero "));



function calcularFactorial(numero) {
 
  if (numero === 0 || numero === 1) {
    return 1;
  }
  
  let resultado = 1;
  
  
  for (let i = 2; i <= numero; i++) {
    resultado *= i; 
  }
  
  return resultado;
}


console.log(calcularFactorial(numero)); 
