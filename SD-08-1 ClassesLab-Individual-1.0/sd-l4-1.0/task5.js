export class Player {
  constructor(name, level = 1, experience = 0) {
      this.name = name;  // Asigna el nombre recibido al objeto
      this.level = level;  // Asigna el nivel recibido al objeto, por defecto es 1
      this.experience = experience;  // Asigna los puntos de experiencia, por defecto es 0
  }

  // Método para mostrar la información del jugador
  info() {
      console.log(`${this.name} has reached Level ${this.level}!`);
  }

  // Método para aumentar el nivel del jugador
  levelUp() {
      this.level += 1;
  }

  // Método para ganar experiencia
  gainExperience(points) {
      this.experience += points;
      if (this.experience >= 100) {  // Si alcanza 100 puntos de experiencia, sube de nivel
          this.levelUp();
          this.experience = 0;  // Resetea la experiencia después del nivel
      }
  }
}

// Para crear un jugador y verificar la salida
const player = new Player("Grog", 4);
player.gainExperience(50);  // Gana 50 puntos de experiencia
player.info();  // Grog has reached Level 4!
player.gainExperience(50);  // Gana 50 puntos y sube de nivel
player.info();  // Grog has reached Level 5!
