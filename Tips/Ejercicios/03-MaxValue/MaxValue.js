// Solucion con fuerza bruta
function MaxValue (shares) {
  // Your code here:
  let maxGanancia = -Infinity;

  for (let i = 0 ; i < shares.length - 1 ; i++) {
    const buy = shares[i];

    for (let j = i + 1 ; j < shares.length ; j++) {
      const sell = shares[j];
      const actualGanancia = sell - buy;
      if(actualGanancia > maxGanancia) maxGanancia = actualGanancia;
    };
  };
  return maxGanancia;
};

// Solucion compleja
function MaxValue (shares) {
  let maxProfit = -Infinity;
  let minValue = shares[0];

  for (let i = 1 ; i < shares.length ; i++) {
    const sell = shares[i];
    const actualProfit = sell - minValue;
    if(actualProfit > maxProfit) maxProfit = actualProfit; // maxProfit = actualProfit > maxProfit ? actualProfit : maxProfit;
    if(sell < minValue) minValue = sell; // minValue = sell < minValue ? sell : minValue;
  };
  return maxProfit;
};

module.exports = MaxValue
