// Constructor para la lista de amigos
function FriendsList() {
    this.names = [];
  
    // Comienza a procesar desde el índice 4 para omitir '5' y '3'
    for (let i = 4; i < process.argv.length; i++) {  // Comienza en el índice 4
      let friendName = process.argv[i];
  
      // Si el nombre es "Sam", lo cambiamos por "Sami"
      if (friendName === "Sam") {
        friendName = "Sami";
      }
  
      // Agrega el nombre del amigo a la lista
      this.names.push(friendName);
    }
  }
  
  // Creamos una nueva instancia de la lista de amigos
  const friendsList = new FriendsList();
  
  // Imprimimos la salida en el formato adecuado
  let output = "[ '" + friendsList.names.join("', '") + "' ]";
  
  // Imprime la lista de amigos
  console.log(output);
  


  
  
  
  
  
