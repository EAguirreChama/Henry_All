'use strict';

function BinarioADecimal(num) { // "110"
   // //Forma 1
   // num = num.split("") // ["1" , "1" , "0"]
   // var Suma = 0; // 0
   
   // for(var i = 0 ; i < num.length ; i++) {
   //    Suma = Suma + Math.pow(2, num.length -1 -i) * num[i]
   // }         //0        // 2 elevado a     // 3 (cuantos elementos) - 1 - i * (num en la posición de i (posicion 0 , numero 1)) = Suma = 4
   //           //4        // 2 elevado a     // 3 (cuantos elementos) - 1 - i * (num en la posicion de i (posicion 1 , numero 1)) = Suma = 6
   //           //6        // 2 elevado a     // 3 (cuantos elementos) - 1 - i * (num en la posicion de i (posicion 2 , numero 0)) = Suma = 6
   // return Suma;

   // Forma 2
   num = num.split("").reverse()
   var Suma = 0;
   for (var i = 0 ; i < num.length ; i++) {
      Suma += num[i]*2**i
   }
   return Suma;

   // /Forma 3
   // let Numero = String(num).split("")
   // let Posición = 0;
   // let Total = 0;
   // for (let i = Numero.length - 1 ; i >= 0 ; i--) {
   //    Total += (2**Posición)*Numero[i]
   //    Posición++
   // }
   // return Total;
}

function DecimalABinario(num) { // 9
   //Forma 1
   var Binario = []; // []
   while (num !== 0){//num > 0 || num >= 0 ==> 9 !== 0 ? True
      Binario.unshift(num % 2) //Nos da como resultado el resto de una división
      num = Math.floor(num / 2)
   }
   return Binario.join("")

   // // Forma 3
   // let Restos = [];
   // let Resultado = num;
   // while(Resultado !== 0) {
   //    Restos.push(Resultado % 2)
   //    Resultado = Math.floor(Resultado / 2)
   // }
   // return Restos.reverse().join("")
}
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
