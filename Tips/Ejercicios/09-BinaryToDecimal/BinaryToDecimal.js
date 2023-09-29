// Primera forma
function BinaryToDecimal (binary) {
  // Your code here:
  binary = binary.split('').reverse();
  let resultado = 0;

  for(let i = 0 ; i < binary.length ; i++) {
    const num = binary[i];
    result += num * 2 ** i
  }
  return resultado;
};
module.exports = BinaryToDecimal

// Segunda forma
function BinaryToDecimal2 (binary) {
  // Your code here:
  binary = binary.split('').reverse();
  let resultado2 = 0;

  binary.forEach((num , i) => {
    resultado2 += num * 2 ** i
  })
  return resultado2;
};
module.exports = BinaryToDecimal2

// Tercera forma
function BinaryToDecimal3 (binary) {
  // Your code here:
  return binary.split('').reverse().reduce((resultado3 , num , i) => (resultado3 += num * 2 ** i), 0);
};
module.exports = BinaryToDecimal3

// Cuarta forma
function BinaryToDecimal4 (binary) {
  // Your code here:
  const num = binary[0];
  const resultado4 = num * 2 ** (binary.length - 1);
  const rest = binary.slice(1);

  if(rest) return + BinaryToDecimal4(rest);
  return resultado4
};
module.exports = BinaryToDecimal4

// Quinta forma
function BinaryToDecimal5 (binary) {
  // Your code here:
  const resultado5 = num * 2 ** (binary.length - 1);
  const rest = binary.slice(1);
  return rest ? resultado5 + BinaryToDecimal5(rest) : resultado5
};
module.exports = BinaryToDecimal5