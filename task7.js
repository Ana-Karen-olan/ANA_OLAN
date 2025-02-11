const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ];
  
  // Type your code below this line!
  // 1. Agregar un número a una fila existente (añadir 30 al final de la primera fila)
arr[0].push(30);

// 2. Agregar una fila nueva al final de la matriz
arr.push([30,31,32,33,34,35,36,37,38,39]);

// 3. Eliminar un número de una fila (eliminar el número 15 de la segunda fila)
arr[1].splice(arr[1].indexOf(15), 1);

// 4. Revertir una de las filas sin afectar a las otras (revertir la tercera fila)
arr[2].reverse();
  
  
  // Type your code above this line!
  console.log(arr);