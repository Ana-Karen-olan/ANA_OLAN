/*Ciclo for
Se compone de tres partes, una es declarando mi variable, inicializando e iterando */

for (let i = 0; i < 6; i++){
    document.write(i);
}


// While con break
let numero = 0;
while (numero < 10) {  
    console.log(numero);
    numero++;
    if (numero == 10) {
        break;
    }
}

// Array de frutas con splice
let frutas = ["15", "platano", "mango", "fresa", "tuna"];
frutas.splice(1, 0, "uva"); // Se mantiene la inserción de "uva"
console.log(frutas); // Se espera que imprima ['15', 'uva', 'platano', 'mango', 'fresa', 'tuna']

// Array numérico con splice
let numeros = [1, 2, 3];
numeros.splice(1, 0, 4); // Inserta el número 4 en la posición 1
console.log(numeros); // Se espera que imprima [1, 4, 2, 3]

/* Objeto / Diccionario */
const usuarixs = {
    "nombre": "Karen",
    "edad": "30",
    "correo": "karen18102010@hotmail.com",
    "telefono": "9381763736"
};
console.log(usuarixs.edad); // Se espera que imprima 30



//Ciclo for in y for of (investigar)
//For in Es una estructura de control que itera sobre las claves (propiedades) de un objeto o los índices de un array.
//Se usa principalmente para recorrer objetos.


//For of Es una estructura de control que itera directamente sobre los valores de un iterable como arrays, strings, Maps, Sets, etc.

//Se usa principalmente para recorrer arrays y estructuras iterables.

//Metodo filter: Se usa para filtrar elementos de un array según una condición. Retorna un nuevo array con los elementos que cumplen esa condición, sin modificar el array original.



/*Funciones son bloques de código que nos permiten modularizar y se pueden ejcutar en cualquier parte del código, siempre y cuando las mande a llamar*/

function consejo() {
    let clima = prompt("¿Cómo está el clima hoy?");
    
    if (clima !== null) {  // Verifica si el usuario no canceló el prompt
        if (clima.toLowerCase() === "caluroso") {
            alert("Toma agua");
        } else {
            alert("Abrígate");
        }
    } else {
        alert("No ingresaste un valor");
    }
}

consejo();
consejo();
consejo();
consejo();





// Un array de días de la semana
const WEEKDAYS = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ];
  
  // Problema 1: Bucles
  // Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
  for (let index = 0; index < WEEKDAYS.length; index++) {
    console.log("El día en la posición " + index + " es " + WEEKDAYS[index]);
  }
  
  // Problema 2: Ramas (Branches)
  // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado o domingo
  for (let index = 0; index < WEEKDAYS.length; index++) {
    if (WEEKDAYS[index] === "Sábado" || WEEKDAYS[index] === "Domingo") {
      console.log("¡Es fin de semana!");
    }
  }
  
  // Problema 3: Funciones
  // Esta función comprobará si un número de día de entrada corresponde a un día laborable
  function workdayChecker(dayNumber) {
    let workday = true;
    if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === "Domingo") {
      workday = false;
    }
    return workday;
  }
  
  console.log(workdayChecker(4)); // Llamada a la función con el número de día
  