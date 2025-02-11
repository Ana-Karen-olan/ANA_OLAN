// Refer to Task 1 in your Instructions to complete this task

// task1.js
for (let i = 1; i < 106; i++) {
  let a = "Fizz";
  let b = "Buzz";
  
  // Verificar si es múltiplo de 3 y 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(a + b); // Imprimir "FizzBuzz"
  } 
  // Verificar si es múltiplo de 3
  else if (i % 3 === 0) {
    console.log(a); // Imprimir "Fizz"
  } 
  // Verificar si es múltiplo de 5
  else if (i % 5 === 0) {
    console.log(b); // Imprimir "Buzz"
  } 
  // Si no es múltiplo de 3 ni de 5
  else {
    console.log(i); // Imprimir el número
  }
}

  



  