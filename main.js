// Armar un simulador interactivo, la estructura final de tu proyecto integrador.
// Definimos las constantes del código
const OPCION_PIEDRA = "piedra";
const OPCION_PAPEL = "papel";
const OPCION_TIJERA = "tijera";

// Creamos 2 variables para contabilizar los puntos del usuario y maquina cada vez que ganan
let puntosUsuario = 0;
let puntosMaquina = 0;

// Creamos una funcion para mostrar los puntos de ambos
function mostrarPuntos(){
    alert(`Puntuacion actual:\nUsuario: ${puntosUsuario}\nMáquina: ${puntosMaquina}`);
}

// Se crea una funcion para obtener las elecciones del jugador 
function obtenerElecciones() {
    let eleccion = "";
    // Bucle para validar la entrada del usuario
    while (true) {
        eleccion = prompt(
            "Para comenzar a jugar elige: Piedra, Papel o Tijera"
        ).toLocaleLowerCase();
        if (eleccion === OPCION_PIEDRA || eleccion === OPCION_PAPEL || eleccion === OPCION_TIJERA){
            break; // Salir del bucle si la entrada es válida
        } else {
            alert("Entrada inválida. Por valor elige entre piedra, papel o  tijera");
        }
    }
    // Generar eleccion aleatoria para la eleccion de la computadora con números 0 1 y 2 ,y se asigna un string a cada valor numérico
    let eleccionComputadoraNum = Math.floor(Math.random() * 3);
    let eleccionComputadora;

    if (eleccionComputadoraNum === 0) {
        eleccionComputadora = OPCION_PIEDRA;
    } else if (eleccionComputadoraNum === 1) {
        eleccionComputadora = OPCION_PAPEL;
    } else {
        eleccionComputadora = OPCION_TIJERA;
    }
    alert("Vos elegiste: " +eleccion +"\nLa computadora eligió: " +eleccionComputadora);
    return { eleccion, eleccionComputadora };
}

// Creamos una funcion para determinar si gana la persona o la computadora
function determinarGanador(eleccion, eleccionComputadora) {
    if (eleccion === eleccionComputadora) {
        alert("¡Empate!");
    } else if (eleccion === OPCION_PIEDRA && eleccionComputadora === OPCION_TIJERA) {
        alert("¡Ganaste! Piedra vence a Tijera");
        puntosUsuario++;
    } else if (eleccion === OPCION_PAPEL && eleccionComputadora === OPCION_PIEDRA) {
        alert("¡Ganaste! Papel vence a Piedra");
        puntosUsuario++;
    } else if (eleccion === OPCION_TIJERA && eleccionComputadora === OPCION_PAPEL) {
        alert("¡Ganaste! Tijera vence a Papel");
        puntosUsuario++;
    } else {
        alert("¡Perdiste! " + eleccionComputadora + " vence a " + eleccion);
        puntosMaquina++;
    }
}

// Creamos un bucle para que el jugador decida cuando dejar de jugar
let seguirJugando = true;

while (seguirJugando) {
    let { eleccion, eleccionComputadora } = obtenerElecciones();
    determinarGanador(eleccion, eleccionComputadora);

    // Se muestran los puntos actuales
    mostrarPuntos();
    
    // Preguntar al usuario si quiere seguir jugando
    seguirJugando = confirm("¿Queres jugar de nuevo?");
}

