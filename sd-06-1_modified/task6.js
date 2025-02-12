//ShoppingList


const readline = require('readline');

function ShoppingList() {
    this.items = {};
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const shoppingList = new ShoppingList();

function askForItem() {
    rl.question("Ingresa el nombre del producto (o 'fin' para terminar): ", function(item) {
        if (item.toLowerCase() === 'fin') {
            console.log(shoppingList.items);
            rl.close();
        } else {
            rl.question(`¿Cuántos ${item} deseas agregar? `, function(quantity) {
                shoppingList.items[item] = parseInt(quantity) || 1;
                askForItem();
            });
        }
    });
}

askForItem();



