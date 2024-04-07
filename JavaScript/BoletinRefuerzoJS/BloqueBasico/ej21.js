//21. Crea una función llamada esPalindromo que tome una cadena como parámetro y
//devuelva true si es un palíndromo o false si no lo es

function esPalindromo(str) {
    let res = false; 
    let cadenaProcesada = str.toLowerCase().replace(/\s/g, '');

    let reverse = cadenaProcesada.split("").reverse().join("");
    
    if (cadenaProcesada === reverse) {
        res = true;
    } 
    return res;
}