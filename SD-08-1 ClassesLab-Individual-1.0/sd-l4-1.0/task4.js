export class Player {
  constructor(name, level = 1) {
      this.name = name;  // Asigna el nombre recibido al objeto
      this.level = level;  // Asigna el nivel recibido al objeto, por defecto es 1
  }

  // Método para mostrar la información del jugador
  info() {
      console.log(`${this.name} has reached Level ${this.level}!`);
  }

  // Método para aumentar el nivel del jugador
  levelUp() {
      this.level += 1;
  }
}

// Para crear un jugador y verificar la salida
const player = new Player("Grog", 4);
player.info();  // Grog has reached Level 4!
player.levelUp();
player.info();  // Grog has reached Level 5!
