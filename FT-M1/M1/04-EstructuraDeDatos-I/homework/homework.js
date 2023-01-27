'use strict';

// EJERCICIO 1
const nFactorial = (n) => n === 0 ? 1 : n * nFactorial(--n)
// EJERCICIO 2
const nFibonacci = (n) => n <= 1 ? n : nFibonacci(n-1) + nFibonacci(n-2);
// EJERCICIO 3
function Queue() {  
    let arr = [];
    this.enqueue = function(a){arr.push(a)}
    this.dequeue = function(){return arr.shift()}
    this.size = function(){return arr.length}
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
