/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
  if (n == 0) {
      return 0;
  } else if (n < 0) {
      n = n*-1;
  }

  let soma = 1;
  
  contar(n);

  function contar(n) {
    let divisao = Math.trunc(n / 2);
    let resto = (n % 2);
    soma += resto;

    if (divisao >= 2) {
      contar(divisao);
    }
  }

  return soma;
};