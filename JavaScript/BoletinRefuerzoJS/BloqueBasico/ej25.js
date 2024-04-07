//25. Crea una función llamada generarNumeroAleatorio que genere y devuelva un
//número aleatorio entre 1 y 100.

function generarNumeroAleatorio(maximo) {
    return  num = Math.floor(Math.random(101) * maximo);
    
}

console.log(generarNumeroAleatorio(100));