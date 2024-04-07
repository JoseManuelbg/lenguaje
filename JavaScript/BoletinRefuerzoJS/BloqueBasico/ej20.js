//20. Llama a la función contarVocales con una cadena y muestra el resultado en la
//consola.


let str = "Hola";
console.log(contarVocales(str));

function contarVocales(str) {
    let tot = 0;
    for(let i= 0 ; i< str.length; i++){
        tot += 1;
    }
    return tot;
}