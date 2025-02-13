export function costCalculator(amount) {
    const fee = 3;
    const interest = 0.01 * amount;
    
    // Convertir a número en caso de que no lo sea
    const total = Number(amount) + fee + interest;
    
    // Devolver el resultado con 2 decimales
    return total.toFixed(2);
}

