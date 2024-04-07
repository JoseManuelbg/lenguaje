//19. Crea una función llamada contarVocales que tome una cadena como parámetro y
//devuelva el número de vocales que contiene

function contarVocales(str) {
    let tot = 0;
    for(let i= 0 ; i< str.length; i++){
        tot += 1;
    }
    return tot;
}