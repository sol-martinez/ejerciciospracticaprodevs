'use strict'
//Trabajo practico integrador prodevs Academy


//Implementá una función llamada minimo que reciba un array de números
//  y devuelva el valor numérico más bajo del array. No podés usar funciones 
// como Math.min ni métodos como sort. Usá un bucle para comparar los elementos.


function minimo(arr) {
  let valorMasChico = arr[0]; // Inicializo una variable con el primer valor del array
  for (let i = 1; i < arr.length; i++){ // Recorro todo el array con un bucle for
    if(valorMasChico > arr[i]) valorMasChico = arr[i]; // Si el valor actual del array es menor que el que tengo guardado, lo reemplazo
  }
  return valorMasChico // Devuelvo el valor más chico encontrado
}

//Creá una función llamada mayor que tome un array 
// de números y retorne el número más grande dentro del mismo. 
// No podés usar Math.max. Deberás recorrer el array manualmente y comparar los valores.

function mayor(arr) {
  let valorMasGrande = arr[0];
  for (let i = 1; i < arr.length; i++){
    if(valorMasGrande < arr[i]) valorMasGrande = arr[i];
  }
  return valorMasGrande
}

//Definí una función llamada total que sume todos los valores de un array numérico usando el método .reduce. Retorná la suma total

function total(arr) {
  let suma = arr.reduce((acumulador, item) => {
    return acumulador + item;
  },0 )
  return suma;
}

//Implementá la misma funcionalidad que en el ejercicio anterior (total), 
// pero sin usar .reduce. Esta vez, deberás usar un bucle for para recorrer el array y acumular el resultado.

function totalBis(arr) {
  let suma = arr[0]; // Inicializo la variable suma con el primer valor de la array
  for(let i=1; i < arr.length; i++){ // Recorro el array desde el segundo elemento hasta el final
    suma += arr[i] // Sumo el valor actual al acumulador suma
  }
  return suma // Devuelvo el total acumulado
}


//Escribí una función llamada promedio que calcule el promedio (media) de los números en un array.
//  Debés hacerlo usando el método .reduce. El promedio es el total dividido por la cantidad de elementos.


// inicializa una variable donde se guardará el valor final del metodo .reduce()
// Uso reduce para sumar todos los elementos del array.
// 'acumulador' guarda la suma parcial, 'item' es el valor actual.
// Empieza desde 0.

function promedio(arr) {
  let suma = arr.reduce((acumulador, item) => {
      return acumulador + item 
  },0 )
    let promedio = suma / arr.length // Divido la suma total por la cantidad de elementos del array para obtener el promedio

    return promedio // Devuelvo el promedio calculado

    /*CON IF TERNARIO
    let promedio = arr.reduce((acumulador, item, index) => {
        return index === arr.length - 1 ? (acumulador + item) / arr.length : acumulador + item;
        
    }, 0)

    return promedio
    */
}


//Reescribí la función anterior (promedio) sin usar .reduce.
//  Esta vez usá un bucle for para sumar los valores y calcular el promedio dividiendo por la cantidad de elementos.

function promedioBis(arr) {
  let suma = 0; // Inicializo la variable suma con el primer valor del array
  for (let i = 0; i < arr.length; i++){ // Recorro todo el array con un bucle for
    suma += arr[i]; // En cada vuelta, le sumo el valor actual del array a la variable suma
  }
  return suma / arr.length; // Divido la suma total por la cantidad de elementos para obtener el promedio
  
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
    point: null,
    len: 0,
    
    insertFirst(data){
      const newNode = Nodo(data);
      newNode.next = this.point;
      this.point = newNode;
      this.len++;
      return newNode
    },

    insertLast(data){
      const newNode = Nodo(data);
      if(!this.point){
        this.point = newNode;
      }else{
        let current = this.point;
        while(current.next){
          current = current.next;
        }
        current.next=newNode;
      }
      this.len++
      return newNode
    },

    push(data){
      return this.insertFirst(data)
    },
    
    insert(data, pos){
       if(pos > this.len ){
    // insertar al final
        this.insertLast(data)
        return
      }
      const newNode = Nodo(data);
      if (pos === 1) {
    // Insertar al principio
    newNode.next = this.point;
    this.point = newNode;
  } else {
    // Insertar en una posición intermedia
    let current = this.point;
    for (let i = 1; i < pos - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  this.len++;

    },

    deleteFirst(){
      if(!this.point) return console.log(`Lista vacia`)
       if(!this.point.next){
        this.point=null;
        this.len--;
       }
    },

    deleteLast(){
      if(!this.point) return console.log(`Lista vacia`)
       if(!this.point.next){
        this.point=null;
        this.len--;
       }
      
      let current = this.point;
      while(current.next.next){
        current=current.next;
      }
      const value = current.next.data;
      current.next=null;
      this.len--;
      return value
    },

    print(){
      if(!this.point) return console.log(`Lista vacia`);
      let current = this.point;
      while(current){
        console.log(current.data);
        current = current.next;
      }
    },

    find(valor){
      let current = this.point;
      while(current){
        if(current.data=== valor) return current;
        current = current.next
      }
      return undefined;
    }

  };

  return lista;
}


//var list = new Lista();

//list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// list.print()
3

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
    constructor(filas, columnas){
      this.filas = filas;
      this.columnas = columnas;
      this.data = Array.from({length: filas}, () => Array(columnas).fill(undefined));

    }

    buscar(valor){
      for(let i = 0; i < this.filas; i++){
        for(let j = 0; j < this.columnas; j++){
          if(this.data[i][j] === valor){
            return [i,j];
          }
        }
      }
      return undefined
    }

    sumar(otraMatriz){
      if(this.filas!==otraMatriz.filas || this.columnas !== otraMatriz.columnas){
        throw new Error(`Las matrices deben tener las mismas dimensiones para sumar.`);
      }

      let resultado = new Matriz(this.filas, this.columnas);
      for(let i = 0; i < this.filas; i++){
        for(let j = 0; j < this.columnas; j++){
          resultado.data[i][j] = this.data[i][j] + otraMatriz.data[i][j] 
        }
        }
        return resultado

    }

    restar(otraMatriz){
      if(this.filas!==otraMatriz.filas || this.columnas !== otraMatriz.columnas){
        throw new Error(`Las matrices deben tener las mismas dimensiones para restar.`);
      }

      let resultado = new Matriz(this.filas, this.columnas);
      for(let i = 0; i < this.filas; i++){
        for(let j = 0; j < this.columnas; j++){
          resultado.data[i][j] = this.data[i][j] - otraMatriz.data[i][j] 
        }
        }
        return resultado
    }

    multiplicar(otraMatriz){
      if(this.columnas!==otraMatriz.filas){
        throw new Error(`Las dimensiones no son compatibles para multiplicación.`);
      }

      let resultado = new Matriz(this.filas, otraMatriz.columnas);
      for(let i = 0; i < this.filas; i++){
        for(let j = 0; j < otraMatriz.columnas; j++){
          resultado.data[i][j] = 0;
          for (let k = 0; k < this.columnas; k++){
          resultado.data[i][j] += this.data[i][k] * otraMatriz.data[k][j] 
        }
      }
    }
    return resultado
  }

  print(){
  for(let i = 0; i < this.filas; i++) {
    console.log(this.data[i].join(' '));
  }
}

}
 



//"Resolver la Torre de Hanoi para n discos, usando tres pilas que representan las torres.
//  Implementar la lógica para mover todos los discos desde la primera torre hasta la tercera,
//  respetando las reglas clásicas: sólo se puede mover un disco a la vez,
//  y nunca colocar un disco más grande sobre uno más pequeño."

class Pila {
  constructor() {
  this._arr = [];
  }

  push(a){ //agregar al arreglo
    return this._arr.push(a);
  }

  pop(){ //eliminar del arreglo
    return this._arr.pop();
  }

  len(){ //longitud del arreglo
    return this._arr.length;
  }

  getArr(){
    return this._arr;
  }
 
}

class Torre {
  constructor() {
  this._t1 = new Pila();
  this._t2 = new Pila();
  this._t3 = new Pila();
  }

  init(n){
    for(let i = n; i >= 1; i--){
      this._t1.push(i);
    }
    return this
  }

  solve(disk=null, source=null, dest=null, aux=null){
    if(disk === null) {
      disk = this._t1.len();
      source = this._t1;
      dest= this._t3;
      aux = this._t2;
    }
    if(disk === 1){
      dest.push(source.pop())
      return 
    }

    this.solve(disk - 1, source, aux, dest)
    dest.push(source.pop());
    this.solve(disk - 1, aux, dest, source)

  }

  getTorre1(){
    return this._t1.getArr()
  }

  getTorre2(){
    return this._t2.getArr()
  }

  getTorre3(){
    return this._t3.getArr()
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
