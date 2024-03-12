//Intento de input
//Funcion para detectar un palindromo
function palindromo(cadena){
    let cadenaProcesada = cadena.toLowerCase().replace(/\s/g, "");

    let reverse = cadenaProcesada.split("").reverse().join("");
    
    if (cadenaProcesada === reverse) {
        console.log("Sí es un palíndromo");
    } else {
        console.log("No es un palíndromo");
        console.log("Original:", cadenaProcesada);
        console.log("Reverso:", reverse);
    }
    
};

var nombre;
process.stdout.write("Escribe una cadena: ");

process.stdin.on('data', function(data) { 
    cadena = data.toString();
    palindromo(cadena);
    process.exit();
 });

 /*
 process.stdout sirve para poder introducir info y write para pasar un texto por consola(node)
 
 
 
 */