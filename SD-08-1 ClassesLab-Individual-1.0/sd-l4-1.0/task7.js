export class Player {
  constructor(name, level = 1) {
      this.name = name;  // Asigna el nombre recibido al objeto
      this.level = level;  // Asigna el nivel recibido al objeto, por defecto es 1
      this.inventory = {};  // Inicializa un inventario vacío
  }

  // Método para mostrar la información del jugador
  info() {
      console.log(`${this.name} has reached Level ${this.level}!`);
  }

  // Método para aumentar el nivel del jugador
  levelUp() {
      this.level += 1;
  }

  // Método para añadir un item al inventario
  addItem(item, quantity = 1) {
      if (this.inventory[item]) {
          this.inventory[item] += quantity;  // Si el item ya existe, se suma la cantidad
      } else {
          this.inventory[item] = quantity;  // Si el item no existe, se crea con la cantidad indicada
      }
  }

  // Método para eliminar un item del inventario
  removeItem(item, quantity = 1) {
      if (this.inventory[item]) {
          this.inventory[item] -= quantity;
          if (this.inventory[item] <= 0) {
              delete this.inventory[item];  // Elimina el item si la cantidad es 0 o negativa
          }
      }
  }

  // Método para mostrar el inventario
  showInventory() {
      console.log("Inventory:");
      for (let item in this.inventory) {
          console.log(`${item}: ${this.inventory[item]}`);
      }
  }
}

// Crear un jugador y manejar su inventario
const player = new Player("Grog", 4);
player.addItem("Potion", 3);  // Añade 3 pociones
player.addItem("Sword", 1);   // Añade 1 espada
player.showInventory();  // Muestra el inventario

player.removeItem("Potion", 2);  // Remueve 2 pociones
player.showInventory();  // Muestra el inventario actualizado
