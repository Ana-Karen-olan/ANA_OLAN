export function ageCalculator(year, month, day) {
    const birthDate = new Date(year, month - 1, day); // Restar 1 al mes, ya que en JS los meses son de 0 a 11
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    // Si aún no ha llegado el cumpleaños este año, restamos 1 a la edad
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
