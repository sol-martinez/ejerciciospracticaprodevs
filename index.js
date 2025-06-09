'use strict'
//Trabajo practico integrador prodevs Academy


//Implementá una función llamada minimo que reciba un array de números
//  y devuelva el valor numérico más bajo del array. No podés usar funciones 
// como Math.min ni métodos como sort. Usá un bucle para comparar los elementos.


function minimo(arr) {
  let valorMasChico = arr[0]; // Inicializo una variable con el primer valor del array
  for (let i = 1; i < arr.length; i++){ // Recorro todo el array con un bucle for
    if(valorMasChico > arr[i]) valorMasChico = arr[i] // Si el valor actual del array es menor que el que tengo guardado, lo reemplazo
  }
  return valorMasChico // Devuelvo el valor más chico encontrado
}

//Creá una función llamada mayor que tome un array 
// de números y retorne el número más grande dentro del mismo. 
// No podés usar Math.max. Deberás recorrer el array manualmente y comparar los valores.

function mayor(arr) {
 
}

//Definí una función llamada total que sume todos los valores de un array numérico usando el método .reduce. Retorná la suma total

function total(arr) {
 
}

//Implementá la misma funcionalidad que en el ejercicio anterior (total), 
// pero sin usar .reduce. Esta vez, deberás usar un bucle for para recorrer el array y acumular el resultado.

function totalBis(arr) {
  
}


//Escribí una función llamada promedio que calcule el promedio (media) de los números en un array.
//  Debés hacerlo usando el método .reduce. El promedio es el total dividido por la cantidad de elementos.

function promedio(arr) {
 
}

//Reescribí la función anterior (promedio) sin usar .reduce.
//  Esta vez usá un bucle for para sumar los valores y calcular el promedio dividiendo por la cantidad de elementos.

function promedioBis(arr) {
  
}



/* LISTAS ENLAZDAS */
//Implementá una estructura de datos llamada ListaEnlazada que funcione como una lista simplemente enlazada. Esta lista debe permitir:
//Agregar nodos al principio y al final.
//Insertar un nodo en una posición específica.
//Eliminar el primer y último nodo.
//Imprimir todos los elementos o un elemento específico.
//Buscar un nodo por valor.
//No podés usar Array ni sus métodos (push, pop, etc.) para almacenar los elementos. Cada nodo debe ser un objeto que contenga al menos una propiedad data y un puntero next.
//Importante: resolvé todo sin usar prototype, utilizando funciones constructoras y métodos directamente dentro del objeto ListaEnlazada.


function Nodo(data) {
  return {
    data: data,
    next: null
  };
}

function crearListaEnlazada() {
  const lista = {
    

  
  };

  return lista;
}


// var list = new Lista();

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// list.print()


//MATRIZ
//Implementá una clase Matriz que permita representar matrices bidimensionales y realizar operaciones básicas con ellas. Debe contar con los siguientes métodos:
//buscar(valor): retorna las coordenadas [fila, columna] del valor si existe.
//sumar(otraMatriz): retorna una nueva matriz con la suma elemento a elemento.
//restar(otraMatriz): retorna una nueva matriz con la resta elemento a elemento.
//multiplicar(otraMatriz): retorna una nueva matriz con el producto matricial.
//print(): imprime la matriz en consola con formato visual.
//Debe usarse programación moderna (ES6+), incluyendo class, let, const, y buen manejo de errores (como tamaños incompatibles).
//No podés usar librerías externas.


class Matriz {
 
  }

 



//"Resolver la Torre de Hanoi para n discos, usando tres pilas que representan las torres.
//  Implementar la lógica para mover todos los discos desde la primera torre hasta la tercera,
//  respetando las reglas clásicas: sólo se puede mover un disco a la vez,
//  y nunca colocar un disco más grande sobre uno más pequeño."

class Pila {
  constructor() {
  
  }

 
}

class Torre {
  constructor() {
  
  }

  
}







module.exports = {
  minimo,
  mayor,
  total,
  totalBis,
  promedio,
  promedioBis,
  crearListaEnlazada,
  Matriz,  
  Torre, 
};
