"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var unArbol = new BinarySearchTree(15);
// BinarySearchTree { value: 15, left: null, right: null }

// unArbol.size();
// unArbol.insert(6)

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;
  if (!this.left) return 1 + this.right.size();
  if (!this.right) return 1 + this.left.size();
  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.insert = function (value) {
  var newNode = new BinarySearchTree(value);

  if (value < this.value)
    return this.left ? this.left.insert(value) : (this.left = newNode);
  if (value > this.value)
    return this.right ? this.right.insert(value) : (this.right = newNode);
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value < this.value && this.left) return this.left.contains(value);
  if (value > this.value && this.right) return this.right.contains(value);

  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  switch (order) {
    case "pre-order":
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      break;
    case "post-order":
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    default:
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value);

  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);

  if (array.length) array.shift().breadthFirstForEach(cb, array);
};



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};