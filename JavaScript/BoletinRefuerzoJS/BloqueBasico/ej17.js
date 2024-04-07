//17. Crea una función llamada invertirCadena que tome una cadena como parámetro
//y devuelva la cadena invertida
//No voy a usar el .reverse

function invertirCadena(str) {
    let cadenaInvertida= "";
    for(let i = str.length -1; i >= 0; i--){
        cadenaInvertida+= str[i];
    }
    return cadenaInvertida;
}
