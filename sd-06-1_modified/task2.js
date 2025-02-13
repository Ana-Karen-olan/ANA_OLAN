//Mail objects with dynamics arguments


// Type your code below this line!

function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

// Aseguramos que se pasen los argumentos correctamente desde la terminal
const newMail = new Mail(process.argv[3], process.argv[4]);

console.log(newMail.subject + ": " + newMail.message);

// Type your code above this line!
