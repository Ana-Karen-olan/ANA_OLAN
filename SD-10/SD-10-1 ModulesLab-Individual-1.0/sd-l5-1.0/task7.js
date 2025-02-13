export function rubricPerfect(score) {
    // Convierte la entrada a un número
    score = Number(score); 

    // Verifica si la puntuación es perfecta
    if (score === 11) {
        return "Perfect";
    } else {
        return "Pass";
    }
}
