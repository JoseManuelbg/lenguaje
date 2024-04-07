//18. Llama a la función invertirCadena con una cadena y muestra el resultado en la
//consola

let cadena = "Hola";
console.log(invertirCadena(cadena));

function invertirCadena(str) {
    let cadenaInvertida= "";
    for(let i = str.length -1; i >= 0; i--){
        cadenaInvertida+= str[i];
    }
    return cadenaInvertida;
}
