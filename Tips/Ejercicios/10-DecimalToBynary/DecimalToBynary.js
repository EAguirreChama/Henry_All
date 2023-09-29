function DecimalToBynary (num) {
  // Your code here:
  const binary = [];

  while( num > 0) {
    const module = num % 2;
    binary.push(module);
    num = Math.floor(num/2);
  };
  return binary.reverse.join("")
};
module.exports = DecimalToBynary

// Seguda forma
function DecimalToBynary2 (num) {
  // Your code here:
  const binary = [];

  while( num > 0) {
    const module = num % 2;
    binary.unshift(module);
    num = Math.floor(num/2);
  };
  return binary.join("")
};
module.exports = DecimalToBynary2

// Tercera forma
function DecimalToBynary3 (num) {
  // Your code here:
  let binary = '';
  while( num > 0) {
    binary = num % 2 + binary;
    num = Math.floor(num/2);
  };
  return binary
};
module.exports = DecimalToBynary3

// Cuarta forma 
function DecimalToBynary4 (num) {
  // Your code here:
  const module = num % 2
  if(num) return DecimalToBynary4(Math.floor(num/2)) + module;
  return '';
};
module.exports = DecimalToBynary4

// Cuarta forma 
function DecimalToBynary5 (num) {
  // Your code here:
  return num ? DecimalToBynary5(Math.floor(num/2)) : num
};
module.exports = DecimalToBynary5