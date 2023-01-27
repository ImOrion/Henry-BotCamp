'use strict';

function BinarioADecimal(num) {
   var operacion1 = 0;
   for (var i = 0; i<num.length; i++){
      operacion1 += num[i] * (2**(num.length -1 -i))
   }
   return operacion1;
}

function DecimalABinario(num) {
   let numero = num;
   let bin = [];
   while (numero > 1){
      bin.push(numero%2)
      numero = Math.floor(numero/2)
   }
   bin.push(numero)
   return bin.reverse().join('')
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
