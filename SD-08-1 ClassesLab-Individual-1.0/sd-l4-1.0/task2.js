export class Player {
  constructor(name, level = 1) {
      this.name = name;  // Asigna el nombre recibido al objeto
      this.level = level;  // Asigna el nivel recibido al objeto, por defecto es 1
  }
}

// Para crear un jugador y verificar la salida
const player = new Player("Grog", 4);
console.log(player);  // Esto imprimirá: Player { name: 'Grog', level: 4 }
