export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month - 1; // Restar 1 al mes, porque los meses en JS empiezan desde 0
        this.day = day;
    }

    returnAge() {
        const today = new Date();
        const birthDate = new Date(this.year, this.month, this.day);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        
        // Si aún no ha llegado el cumpleaños este año, restamos 1 a la edad
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return `${this.name} is ${age} today!`;
    }
}


