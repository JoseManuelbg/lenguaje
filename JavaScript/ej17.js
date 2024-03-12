// Verificar si una cadena es un palíndromo.

let cadena = "Ojo rojo";

// Eliminar espacios y convertir a minúsculas
// La /\s sirve para los espacios en blanco
let cadenaProcesada = cadena.toLowerCase().replace(/\s/g, '');

let reverse = cadenaProcesada.split("").reverse().join("");

if (cadenaProcesada === reverse) {
    console.log("Sí es un palíndromo");
} else {
    console.log("No es un palíndromo");
    console.log("Original:", cadenaProcesada);
    console.log("Reverso:", reverse);
}
