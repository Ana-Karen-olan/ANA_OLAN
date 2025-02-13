export class Player {
  constructor(name) {
      this.name = name;  // Asigna el nombre recibido al objeto
  }
}

// Para crear un jugador y verificar la salida
const player = new Player("Grog");
console.log(player);  // Esto imprimirá: Player { name: 'Grog' }
