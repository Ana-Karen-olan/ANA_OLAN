"""
Este es un módulo que proporciona un cuestionario de trivia sobre números.
Los usuarios pueden ingresar un número para obtener una trivia relacionada.
"""

def trivia_fetch(num):
    """
    Esta función toma un número como entrada y devuelve un diccionario con la trivia relacionada con ese número.
    Si el número no está en el diccionario, devuelve un mensaje predeterminado.
    """
    trivia_dict = {
        1: "El número 1 es el primer número natural y es considerado único en muchas culturas.",
        2: "El número 2 es el único número primo par.",
        3: "El número 3 es considerado un número de la suerte en muchas culturas.",
        4: "El número 4 es el primer número compuesto y es conocido por su relación con los cuatro elementos.",
        5: "El número 5 es el número de la perfección humana en varias filosofías.",
        6: "El número 6 está asociado con la armonía, el equilibrio y la belleza.",
        7: "El número 7 es considerado un número mágico y sagrado en muchas culturas."
    }

    # Retorna un diccionario con el número y la trivia correspondiente
    trivia = trivia_dict.get(num, "No hay trivia disponible para este número.")
    return {"number": num, "trivia": trivia}

def main():
    """
    Esta es la función principal que pide al usuario ingresar un número y luego muestra la trivia correspondiente.
    """
    print("¡Hola estudiantes!")
    
    try:
        # Solicitar al usuario ingresar un número
        num = int(input("Ingrese un número para obtener trivia: "))
        
        # Llamar a la función trivia_fetch para obtener la trivia del número
        trivia = trivia_fetch(num)
        
        # Mostrar la trivia
        trivia_text = f"Trivia sobre el número {trivia['number']}: {trivia['trivia']}"
        print(trivia_text)
        
    except ValueError:
        print("Por favor, ingrese un número válido.")
    except TypeError as e:
        print(f"Hubo un error de tipo: {e}")

if __name__ == "__main__":
    main()


