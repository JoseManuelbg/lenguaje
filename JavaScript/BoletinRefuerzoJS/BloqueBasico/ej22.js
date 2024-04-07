//22. Llama a la función esPalindromo con varias cadenas y muestra los resultados en
//la consola.

let str = "Ojo rojo";
console.log(esPalindromo(str));

str = "No es un palindromo";
console.log(esPalindromo(str));

function esPalindromo(str) {
    let res = false; 
    let cadenaProcesada = str.toLowerCase().replace(/\s/g, '');

    let reverse = cadenaProcesada.split("").reverse().join("");
    
    if (cadenaProcesada === reverse) {
        res = true;
    } 
    return res;
}