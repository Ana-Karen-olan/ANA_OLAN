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

// Clase para gestionar el grupo de jugadores
export class Party {
  constructor() {
      this.members = [];  // Array para almacenar a los miembros del grupo
  }

  // Método para añadir un jugador al grupo
  addMember(player) {
      this.members.push(player);
  }

  // Método para remover un jugador del grupo
  removeMember(playerName) {
      this.members = this.members.filter(player => player.name !== playerName);
  }

  // Método para mostrar el grupo
  showParty() {
      console.log("Party Members:");
      this.members.forEach(player => {
          player.info();
      });
  }
}

// Crear jugadores y añadirlos a un grupo
const player1 = new Player("Grog", 4);
const player2 = new Player("Tara", 5);
const party = new Party();
party.addMember(player1);
party.addMember(player2);
party.showParty();  // Muestra el grupo de jugadores

party.removeMember("Grog");  // Remueve a Grog del grupo
party.showParty();  // Muestra el grupo actualizado
