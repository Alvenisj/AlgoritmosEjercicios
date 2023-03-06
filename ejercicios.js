
// // hacer una función que reciba dos arreglos ORDENADOS de números y que a través de un algoritmo se encargue de unir los dos arreglos en UN SOLO ARREGLO...
// arr1 = [ 10, 20, 30, 40, 45, 90 ];
// arr2 = [ 50, 60, 70, 80 ];

// function joinArray( arr1, arr2 ) {
  
//   //Declaramos un array vacio
//   let combineArray = [];
//   // [1, 2, 3, 4]  [5, 6, 7, 8]
//   while ( arr1.length && arr2.length ) {
//     let firstElement;
//     if ( arr1[0] < arr2[0] ) {
//       firstElement = arr1.shift();
//     } else {
//       firstElement = arr2.shift();
//     }
    
//     combineArray.push(firstElement);
//   }
  
//         combineArray = combineArray.concat(arr1).concat(arr2);
//        return combineArray;   
// }

// joinArray( arr1, arr2)

// //Método burbuja (Método de ordenamiento) ---
// //Revisa cada elemento del arreglo que va a ser ORDENADO con el siguiente elemento del mismo arreglo, INTERCAMBIÁNDOLOS de posición si están en el orden equivocado. (Es necesario que el algoritmo revise varias veces todos el arreglo hasta que no se necesite más intercambios), lo cual da por entendido que el arreglo se encuentra ordenado.

// // CORRIDA EN FRIO DEL ALGORITMO 
// //[4, 5, 2, 1, 3]  
// //Si numeroActual > numeroSiguiente 
// ///      intercambio
// // De lo contrario, se avanza una posición en el arreglo

// 'use-strict'

// arr1 = [ 10, 40, 35, 12, 1, 13, 50 ];

// const algoritmoBurbuja = (  arr  ) => {
//   var i, j, n, aux;
//   n = arr.length;
// //Algoritmo del método Burbuja
//         for ( i = 0; i < n - 1; i++ ) { 
//             for ( j = 0; j < n; j++ ) {    
//                 if ( arr[j] > arr[j+1] ) {
//                         aux = arr[j];
//                         arr[j] = arr[j+1];
//                         arr[j+1] = aux;
//                 //OTRA FORMA DE HACERLO AL ESTILO DE JAVASCRIPT ES:
//                 //  // [ arr1[j], arr1[j+1] ] = [ arr1[j+1], arr1[j] ];
//                 //   }   
                
//                 }
//             }      
//         }

//   return arr;

// }

// console.log(algoritmoBurbuja( arr1 ));


// // // Crear una función que reciba una lista de números números y que se encargue de imprimir TIK si el número es múltiplo de 3, y que imprima TOOK si es multiplo de 5; en caso de que el número sea múltiplo de 3 y 5, debe imprimir TIKTOOK.

// function tiktook( num ) {
//         let mensaje = '';

//   const divisible = ( num, divisor ) => !( num % divisor );
  
//         if ( divisible( num, 3 ) ) {
//             mensaje += 'TIK';
//         }
//         if ( divisible( num, 5 ) ) {
//             mensaje += 'TOOK';
//         }
        
//      return mensaje || num;
// }


// function printNumber( num ) {

//     for (let i = 1; i<=num; i++ ) {

//         console.log(`${ i }: ${ tiktook( i ) }`)

//     }
// }

// printNumber( 100 );


// // método ORDENAMIENTO por inserción: Requiere un O(n^2) operaciones para ordenar una lista de n elementos.

// // // CORRIDA EN FRIO DEL ALGORITMO 
// // //[ 5, 3, 4, 1, 2 ]  Ordenar en forma ASCENDETE
// // //Si numeroIzquierda > numeroActual
// // ///      intercambio
// // // De lo contrario, se avanza una posición en el arreglo

// 'use-strict'
// let arr1 = [ 5, 3, 4, 1, 2 ];

// function algoritmoInsercion( arr ) {
//        var i, pos, n, aux;
//         n = arr.length;
//     //Algoritmo del método INSERCIÓN
//       for ( i = 1; i < n; i++ ) {
//             pos = i; //Indica la posición del arreglo para cada elemento
//             posActual = arr[i]; //Guarda el valor de cada posición

//           while ( ( pos>0 ) && ( arr[pos-1] > posActual ) ) {
//             arr[pos] = arr[pos-1]; //Realiza el cambio
//             pos--; //Itera hacia la izquierda hasta que se cumpla la condición
//           } 
        
//           arr[pos] = posActual;
        
//       }

//     return arr;
  
// }

// console.log(algoritmoInsercion( arr1 ));

// // método ORDENAMIENTO por selección: Es un algoritmo de ordenamiento que requiere O(n^2) operaciones para ordenar una lista de n números:
// //1.- Busca en los elementos del arreglo, con el valor mínimo, si lo encuentra intercambia con la posición actual del arreglo
// //2.- Luego del intercambio se avanza una posición a la derecha  (posición actual)
// //3.- Continua buscando desde la posición actual al resto de los elementos del arreglo el valor mínimo que se encuentre a su derecha y si lo encuentra (intercambia nuevamente)
// //4.- Luego del intercambio se avanza una posición a la derecha  (posición actual)
// //5.- y así sucesivamente hasta que no haya un valor mínimo a la derecha del arreglo

// 'use-strict'
//   let arr1 = [ 80, 4, 20, 3, 1, 5, 2 ];

//     function algoritmoSeleccion( arr ) {
//         var i, j, n, aux, min;
//          n = arr.length;
//       //Algoritmo del método INSERCIÓN
//       for ( i = 0; i<n; i++ ) {
//             min = i;  
//               for ( j = i+1; j<n; j++ ) {
//                 if ( arr[j] < arr[min] ) {
//                     min = j;           
//                 }
//               }

//           aux = arr[i];
//           arr[i] = arr[min];
//           arr[min] = aux;
        
//       }      
      
//       return arr;

//     }

// algoritmoSeleccion( arr1 );


// //Algoritmo de busqueda secuencial: Se encarga de buscar SECUENCIALMENTE desde la posición cero, luego la siguiente, hasta que haya recorrido todo el arreglo y encuentre el dato que se está BUSCANDO; en caso de que lo encuentre, lo muestra, de lo contrario, dirá que el dato NO EXISTE... (No importa si el arreglo se encuentra ordenado o no)

// let arr1 = [ 3, 4, 2, 1, 5 ];


// function algoritmoBusquedaSecuencial( arr ) {
//     var i, dato, n, aux, pos;
//     band = 'F';
//     dato = 1; //dato a buscar
//     n = arr.length;

//       //Algoritmo busqueda SECUENCIAL
//       i = 0;
//       while ( (band === 'F' ) && (i<n) ) {
            
//               if ( arr[i] === dato ) {
//                   band = 'V';           
//               }    
//               i++;
//        }

//       if ( band === 'F' ) {
//           console.log(`El número a buscar ${dato} NO EXISTE en el arreglo `);
//       } else {
//          console.log(`El número a buscar ${dato} SI EXISTE en el arreglo y tiene la posición ${i-1} `);
//       }
  
// }

// algoritmoBusquedaSecuencial( arr1 )


// // Algoritmo de busqueda BINARIA: Se encarga de buscar el valor de un arreglo ORDENADO DE FORMA ASCENDENTE (El orden si importa)
// 'use-strict'

// let arr1 = [ 1, 2, 3, 4, 10, 20, 30, 40 ];

// function algoritmoBusquedaBinaria( arr  ) {
//   var inf;
//   var sup;
//   var mitad;
//   var dato = 30; //dato a buscar
//   n = arr.length - 1;
//   inf = 0; //inicializamos la variable
//   sup = n; //número total de elementos del array
  
//   band = 'F';
//          //Algoritmo de busqueda BINARIA
//      while ( inf <= sup ) {       
//               mitad = Math.floor( (inf + sup)/2 );
//             if ( arr[mitad] === dato  ) {
//               band = 'V';
//               break;        
//             }

//             if ( (arr[mitad] < dato) ) {
//               inf = mitad + 1;
//               mitad = Math.floor( (inf + sup)/2 );
//             }
            
//             if ( arr[mitad] > dato ) {
//               sup = mitad - 1;
//               mitad = Math.floor( (inf + sup)/2 );
//             }
//      } 


//      if ( band === 'V' ) {
          
//           console.log(`El número ${dato} a buscar SI EXISTE en el arreglo en la posición ${mitad}
          
//           `);
            
//       } else {
              
//            console.log(`El número ${dato} a buscar NO EXISTE en el arreglo`);
//        }

      
// }

// algoritmoBusquedaBinaria( arr1 );


console.log('Hola alvenis');