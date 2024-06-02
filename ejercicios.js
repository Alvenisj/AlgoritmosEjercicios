// hacer una función que reciba dos arreglos ORDENADOS de números y que a través de un algoritmo se encargue de unir los dos arreglos en UN SOLO ARREGLO...
// const isArrayUno = [10, 20, 30, 40, 45, 90, 200];
// const isArrayDos = [50, 60, 70, 80];

// function joinArray(arrUno, arrDos) {
//   // DECLARAMOS UN ARRAY VACÍO
//   let combineArray = [];
//   while (arrUno.length && arrDos.length) {
//     let firstElement;
//     if (arrUno[0] < arrDos[0]) {
//       firstElement = arrUno.shift();
//     } else {
//       firstElement = arrDos.shift();
//     }

//     combineArray.push(firstElement);
//   }

//   return combineArray.concat(arrUno).concat(arrDos);
// }

// const print = joinArray(isArrayUno, isArrayDos);
// console.log(print);

// Método burbuja (Método de ordenamiento) ---
// Bubble Sort Method

// const isArrayNumber = [10, 40, 35, 12, 1, 13, 50];

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < n - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // INTERCAMBIO DE VARIABLE
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }

//   return arr;
// }

// const print = bubbleSort(isArrayNumber);
// console.log(print);

// Crear una función que reciba una lista de números números y que se encargue de imprimir TIK si el número es múltiplo de 3, y que imprima TOOK si es multiplo de 5; en caso de que el número sea múltiplo de 3 y 5, debe imprimir TIKTOOK.

// function tikTook(num) {
//   let msg = "";

//   const divisible = (num, multiplo) => !(num % multiplo);

//   if (divisible(num, 3)) {
//     msg += "Tik";
//   }

//   if (divisible(num, 5)) {
//     msg += "Took";
//   }

//   return msg || num;
// }

// function printNumber(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(`${tikTook(i)}`);
//   }
// }

// printNumber(100);

// Método ORDENAMIENTO por inserción: Requiere un O(n^2) operaciones para ordenar una lista de n elementos.

// const isArrayNumber = [5, 3, 4, 1, 2];

// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let currentValue = arr[i];
//     let posValue = i;

//     while (posValue > 0 && arr[posValue - 1] > currentValue) {
//       arr[posValue] = arr[posValue - 1];
//       posValue--;
//     }

//     arr[posValue] = currentValue;
//   }

//   return arr;
// }

// const print = insertionSort(isArrayNumber);
// console.log(print);

// Método de ORDENAMIENTO por selección
// const isArrayNumber = [80, 4, 20, 3, 1, 5, 2];
// function selectionSort(arr) {
//   let n = arr.length;
//   let min = 0;
//   for (let i = 0; i < n; i++) {
//     min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }

//     // INTERCAMBIO DE VARIABLE
//     [arr[i], arr[min]] = [arr[min], arr[i]];
//   }

//   return arr;
// }

// const print = selectionSort(isArrayNumber);
// console.log(print);

//Algoritmo de busqueda secuencial
// let isArrayNumber = [3, 4, 2, 1, 5];
// function secuentialSearch(arr, target) {
//   let n = arr.length;
//   let band = "F";
//   let result = "";
//   i = 0;
//   while (band === "F" && i <= n) {
//     if (arr[i] === target) {
//       band = "V";
//     }
//     i++;
//   }

//   if (band === "V") {
//     result = `El número "${target}" se encuentra en la posición: ${i - 1}`;
//   } else {
//     result = `El número "${target}" no se encuentra en el array`;
//   }

//   return result;
// }

// const print = secuentialSearch(isArrayNumber, 3);
// console.log(print);

// // Algoritmo de busqueda BINARIA: Se encarga de buscar el valor de un arreglo ORDENADO DE FORMA ASCENDENTE (El orden si importa)

// let isArrayNumber = [1, 2, 3, 4, 10, 20, 30, 40];

// function binarySearch(arr, target) {
//   let n = arr.length - 1;
//   let inf = 0;
//   let sup = n;
//   let mitad = 0;
//   let band = "F";
//   let result = "";

//   while (inf <= sup) {
//     mitad = Math.floor((inf + sup) / 2);
//     if (arr[mitad] === target) {
//       band = "V";
//       break;
//     }

//     if (arr[mitad] < target) {
//       inf = mitad + 1;
//       mitad = Math.floor((inf + sup) / 2);
//     }

//     if (arr[mitad] > target) {
//       sup = mitad - 1;
//       mitad = Math.floor((inf + sup) / 2);
//     }
//   }

//   if (band === "V") {
//     result = `El número "${target}" se encuentra en la posición ${mitad}`;
//   } else {
//     result = `El número "${target}" NO EXISTE en el arreglo`;
//   }

//   return result;
// }

// const print = binarySearch(isArrayNumber, 30);
// console.log(print);

// Algoritmo que busca el camino más corto en un grafo ponderado dirigido, utilizando el algoritmo de Dijkstra. Este algoritmo es útil para encontrar la ruta más corta entre dos nodos en un grafo con aristas de peso no negativo.

// // Ejemplo de uso
// const grafo = {
//   A: { B: 2, C: 5 },
//   B: { A: 2, C: 6, D: 1, E: 3 },
//   C: { A: 5, B: 6, D: 2, F: 8 },
//   D: { B: 1, C: 2, E: 4, F: 3 },
//   E: { B: 3, D: 4, G: 7 },
//   F: { C: 8, D: 3, G: 1 },
//   G: { E: 7, F: 1 },
// };

// const nodoInicial = "A";

// function dijkstra(grafo, nodoInicial) {
//   let distancia = {};
//   let visitado = {};

//   const nodos = Object.keys(grafo);
//   nodos.forEach((nodo) => {
//     distancia[nodo] = Infinity;
//     visitado[nodo] = false;
//   });

//   distancia[nodoInicial] = 0;

//   while (true) {
//     let nodoActual = null;
//     nodos.forEach((nodo) => {
//       if (!visitado[nodo] && ( nodoActual === null || distancia[nodo] < distancia[nodoActual] )) {
//         nodoActual = nodo;
//       }
//     });

//     if ( nodoActual === null ) break;
//       visitado[nodoActual] = true;

//     for ( let vecino in grafo[nodoActual] ) {
//         let distanciaHastaVecino = distancia[nodoActual] + grafo[nodoActual][vecino];
//         if ( distanciaHastaVecino < distancia[vecino] ) {
//           distancia[vecino] = distanciaHastaVecino;
//         }
//     }
//   }

//   return distancia;
// }

// const print = dijkstra(grafo, nodoInicial);
// console.log(print);

// CÓMO HARÍAN PARA DEVOLVER UN ARREGLO CON LOS NOMBRES DE CADA PADDOCKTYPE, ORDENADOS DECRECIENTEMENTE POR LA SUMA TOTAL DE LA CANTIDAD DE HECTAREAS PLANTADAS DE CADA UNO DE ELLOS, QUE SE ENCUENTRE EN EL ARREGLO PADDOCKS. SUGERENCIA MAPEAR EL ARREGLO PADDOCKS Y OBTENER EL paddockTypeId y el área.

// const paddockType = [
//   { id: 1, name: "PALTOS" },
//   { id: 2, name: "AVELLANOS" },
//   { id: 3, name: "CEREZAS" },
//   { id: 4, name: "NOGALES" },
// ];

// const paddocks = [
//   {
//     paddockManagerId: 6,
//     farmId: 1,
//     paddockTypeId: 1,
//     harvestYear: 2019,
//     area: 1200,
//   },
//   {
//     paddockManagerId: 1,
//     farmId: 3,
//     paddockTypeId: 4,
//     harvestYear: 2019,
//     area: 500,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 3,
//     paddockTypeId: 2,
//     harvestYear: 2020,
//     area: 20000,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 2,
//     paddockTypeId: 3,
//     harvestYear: 2021,
//     area: 8401,
//   },
//   {
//     paddockManagerId: 3,
//     farmId: 1,
//     paddockTypeId: 1,
//     harvestYear: 2020,
//     area: 2877,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 2,
//     paddockTypeId: 2,
//     harvestYear: 2017,
//     area: 15902,
//   },
//   {
//     paddockManagerId: 3,
//     farmId: 3,
//     paddockTypeId: 2,
//     harvestYear: 2018,
//     area: 1736,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 3,
//     paddockTypeId: 3,
//     harvestYear: 2020,
//     area: 2965,
//   },
//   {
//     paddockManagerId: 4,
//     farmId: 3,
//     paddockTypeId: 4,
//     harvestYear: 2018,
//     area: 1651,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 1,
//     paddockTypeId: 1,
//     harvestYear: 2018,
//     area: 700,
//   },
//   {
//     paddockManagerId: 1,
//     farmId: 2,
//     paddockTypeId: 1,
//     harvestYear: 2019,
//     area: 7956,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 3,
//     paddockTypeId: 2,
//     harvestYear: 2020,
//     area: 3745,
//   },
//   {
//     paddockManagerId: 6,
//     farmId: 1,
//     paddockTypeId: 3,
//     harvestYear: 2021,
//     area: 11362,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 3,
//     paddockTypeId: 3,
//     harvestYear: 2021,
//     area: 300,
//   },
//   {
//     paddockManagerId: 3,
//     farmId: 2,
//     paddockTypeId: 2,
//     harvestYear: 2020,
//     area: 19188,
//   },
//   {
//     paddockManagerId: 3,
//     farmId: 1,
//     paddockTypeId: 1,
//     harvestYear: 2019,
//     area: 17137,
//   },
//   {
//     paddockManagerId: 4,
//     farmId: 3,
//     paddockTypeId: 2,
//     harvestYear: 2020,
//     area: 100,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 1,
//     paddockTypeId: 3,
//     harvestYear: 2019,
//     area: 11845,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 2,
//     paddockTypeId: 1,
//     harvestYear: 2018,
//     area: 15969,
//   },
//   {
//     paddockManagerId: 1,
//     farmId: 3,
//     paddockTypeId: 1,
//     harvestYear: 2029,
//     area: 10420,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 2,
//     paddockTypeId: 3,
//     harvestYear: 2010,
//     area: 3200,
//   },
//   {
//     paddockManagerId: 6,
//     farmId: 1,
//     paddockTypeId: 2,
//     harvestYear: 2012,
//     area: 10587,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 2,
//     paddockTypeId: 2,
//     harvestYear: 2018,
//     area: 16750,
//   },
// ];

// function searchAreaOfPaddocks(paddocks, paddockType) {
//   let areOfPaddocks = {};
//   paddocks.forEach( paddock => {
//     const { paddockTypeId, area } = paddock;
//     areOfPaddocks[paddockTypeId] ??= 0;
//     areOfPaddocks[paddockTypeId] += area;
//   });

//   const result = paddockType.map( isObjeto => ({
//     ...isObjeto,
//     totalHectareas: areOfPaddocks[isObjeto.id]
//   }));

//   return result
// }

// const print = searchAreaOfPaddocks(paddocks, paddockType);
// console.log(print);

// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
// const giftIds2 = [1, 2, 3, 4] // output -1
// const giftIds3 = [5, 1, 5, 1] // output 5
// const giftIds = [2, 1, 3, 5, 3, 2]; // output: 3 Aunque el 2 y el 3 se repiten el 3 aparece primero por segunda vez.
// function findFirstRepeated(gifts) {
//   const isObjeto = new Map();
//   let n = gifts.length;

//   for (let i = 0; i < n; i++) {
//     const num = gifts[i];
//     if (isObjeto.has(num)) {
//       return num;
//     }
//     isObjeto.set(num, i);
//   }
//   return -1;
// }

// const print = findFirstRepeated(giftIds);
// console.log(print)

// Función que agrupa y calcula el monto total y la cantidad de productos comprados por categoría,
// filtrando las compras con una cantidad de productos mayor a un valor especificado.

// function calculatePurchaseStats(purchases, minQuantity) {
//   const filterPurchases = purchases.filter(
//     (purchase) => purchase.quantity > minQuantity
//   );
//   const reducedPurchases = filterPurchases.reduce((acc, ele) => {
//     const { category, amount, quantity } = ele;
//     if (!acc[category]) {
//       acc[category] = { totalAmount: 0, totalQuantity: 0 };
//     }

//     acc[category].totalAmount += amount;
//     acc[category].totalQuantity += quantity;

//     return acc;
//   }, {});

//   return reducedPurchases;
// }
// Datos de ejemplo
// const purchases = [
//   { category: "Electronics", amount: 200, quantity: 1 },
//   { category: "Groceries", amount: 50, quantity: 10 },
//   { category: "Clothing", amount: 100, quantity: 5 },
//   { category: "Clothing", amount: 100, quantity: 6 },
//   { category: "Electronics", amount: 150, quantity: 2 },
//   { category: "Groceries", amount: 75, quantity: 20 },
// ];

// // Ejemplo de uso de la función
// const minQuantity = 5;
// const result = calculatePurchaseStats(purchases, minQuantity);
// console.log(result);
// Output esperado: { Groceries: { totalAmount: 125, totalQuantity: 30 }, Clothing: { totalAmount: 100, totalQuantity: 6 } }

// Función que filtra y selecciona productos que se deben mostrar en la tienda en línea
// basado en varios criterios.
// CRITERIOS: stock > 0 &&
//            rating >= 4 &&
//            allowedCategories = ["Electronics", "Groceries", "Clothing"]; &&
//           ( isFeatured || price < maxPrice )

// function selectProductsToShow(products, allowedCategories, maxPrice) {
//   // Paso 1: Filtrar los productos que cumplen con los criterios
//   const filteredProducts = products.filter((product) => {
//     return (
//       product.stock > 0 &&
//       product.rating >= 4 &&
//       allowedCategories.includes(product.category) &&
//       (product.isFeatured || product.price < maxPrice)
//     );
//   });

//   // Paso opcional: Agrupar los productos por categoría (si se necesita alguna estadística adicional)
//   const groupedProducts = filteredProducts.reduce((acc, product) => {
//     const { category } = product;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   // Si se desea ver los productos agrupados por categoría, devolver groupedProducts en su lugar
//   return groupedProducts;
// }

// // Datos de ejemplo
// const products = [
//   {
//     id: 1,
//     category: "Electronics",
//     price: 299,
//     rating: 4.5,
//     stock: 10,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     category: "Groceries",
//     price: 5,
//     rating: 3.5,
//     stock: 50,
//     isFeatured: false,
//   },
//   {
//     id: 3,
//     category: "Clothing",
//     price: 49,
//     rating: 4.0,
//     stock: 0,
//     isFeatured: true,
//   },
//   {
//     id: 4,
//     category: "Electronics",
//     price: 199,
//     rating: 3.8,
//     stock: 5,
//     isFeatured: false,
//   },
//   {
//     id: 5,
//     category: "Groceries",
//     price: 3,
//     rating: 4.8,
//     stock: 30,
//     isFeatured: true,
//   },
//   {
//     id: 6,
//     category: "Clothing",
//     price: 99,
//     rating: 4.2,
//     stock: 20,
//     isFeatured: false,
//   },
// ];

// // Ejemplo de uso de la función
// const allowedCategories = ["Electronics", "Groceries", "Clothing"];
// const maxPrice = 100;
// const result = selectProductsToShow(products, allowedCategories, maxPrice);
// console.log(result);

// Output esperado:
// [
//   { id: 1, category: 'Electronics', price: 299, rating: 4.5, stock: 10, isFeatured: true },
//   { id: 5, category: 'Groceries', price: 3, rating: 4.8, stock: 30, isFeatured: true },
//   { id: 6, category: 'Clothing', price: 99, rating: 4.2, stock: 20, isFeatured: false }
// ]

// Función que filtra y selecciona productos recomendados basados en varios criterios.
// CRITERIOS: stock > 0 &&
//            isNew ||
//            rating >= 4  &&
//            reviews >= 10

// Datos de ejemplo
// const products = [
//   {
//     id: 1,
//     category: "Electronics",
//     price: 299,
//     rating: 4.5,
//     stock: 10,
//     reviews: 100,
//     isNew: true,
//   },
//   {
//     id: 2,
//     category: "Groceries",
//     price: 5,
//     rating: 3.5,
//     stock: 50,
//     reviews: 150,
//     isNew: false,
//   },
//   {
//     id: 3,
//     category: "Clothing",
//     price: 49,
//     rating: 4.0,
//     stock: 0,
//     reviews: 10,
//     isNew: true,
//   },
//   {
//     id: 4,
//     category: "Electronics",
//     price: 199,
//     rating: 3.8,
//     stock: 5,
//     reviews: 5,
//     isNew: false,
//   },
//   {
//     id: 5,
//     category: "Groceries",
//     price: 3,
//     rating: 4.8,
//     stock: 30,
//     reviews: 25,
//     isNew: true,
//   },
//   {
//     id: 6,
//     category: "Clothing",
//     price: 99,
//     rating: 4.2,
//     stock: 20,
//     reviews: 20,
//     isNew: false,
//   },
//   {
//     id: 7,
//     category: "Clothing",
//     price: 150,
//     rating: 4.7,
//     stock: 15,
//     reviews: 35,
//     isNew: false,
//   },
//   {
//     id: 8,
//     category: "Electronics",
//     price: 299,
//     rating: 4.9,
//     stock: 0,
//     reviews: 50,
//     isNew: false,
//   },
// ];

// function recommendProducts(products) {
//   const filteredProducts = products.filter((product) => {
//     return (
//       (product.stock > 0 && product.isNew) ||
//       (product.rating && product.reviews)
//     );
//   });

//   const sortedProducts = filteredProducts.sort((a, b) => b.rating - a.rating);

//   const topProducts = sortedProducts.slice(0, 5);

//   return topProducts;
// }

// const print = recommendProducts(products);
// console.log(print);

// Output esperado:
// [
//   { id: 8, category: 'Electronics', price: 299, rating: 4.9, stock: 5, reviews: 50, isNew: false },
//   { id: 5, category: 'Groceries', price: 3, rating: 4.8, stock: 30, reviews: 25, isNew: true },
//   { id: 1, category: 'Electronics', price: 299, rating: 4.5, stock: 10, reviews: 100, isNew: true },
//   { id: 7, category: 'Clothing', price: 150, rating: 4.7, stock: 15, reviews: 35, isNew: false },
//   { id: 6, category: 'Clothing', price: 99, rating: 4.2, stock: 20, reviews: 20, isNew: false }
// ]

// **************************************************************

